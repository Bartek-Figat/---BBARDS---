import { db } from "../db/mongo";
import { Index } from "../enum";
import { HttpResponse } from "../httpError/httpError";
import { ObjectId } from "mongodb";
import { config } from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { createReadStream } from "fs";
import S3 from "aws-sdk/clients/s3";
import { Categories } from "./Categories";
import { buildMongoQuery } from "./buildMongoQuery";

config({ path: "../../.env" });

const s3 = new S3({
  endpoint: process.env.endpoint,
  region: process.env.region,
  credentials: {
    accessKeyId: process.env.accessKeyId || "",
    secretAccessKey: process.env.secretAccessKey || "",
  },
});

const uploadedFilesToSpaces = async (requsetFiles: Express.Multer.File[]) => {
  const spacesFiles = requsetFiles.map(async (file) => {
    const spacesFiles = {
      Bucket: process.env.bucketName || "",
      Key: `bbardsImages/${uuidv4() + file.originalname}`,
      Body: createReadStream(file.path),
      ACL: "public-read",
      ContentType: file.mimetype,
    };
    return await s3.upload(spacesFiles).promise();
  });

  return Promise.all(spacesFiles).then((values) =>
    values.map(({ Location }) => Location)
  );
};

export class AdsService {
  async getAd(adId: string) {
    try {
      const ads = await db
        .collection(Index.Add)
        .find({ _id: new ObjectId(adId) })
        .toArray();
      const total = await db.collection(Index.Add).countDocuments({});

      return HttpResponse.sucess({ total, ads }, 201, {});
    } catch (err: any) {
      return HttpResponse.failed(err.message, 301);
    }
  }

  async addAd(files: Express.Multer.File[], token: string, advertising: any) {
    const {
      productTitle,
      productCategory,
      price,
      priceCondition,
      adCategory,
      productCondition,
      addDescription,
      city,
      oneStar,
      twoStar,
      threeStar,
      fourStar,
      fiveStar,
      click,
      views,
    } = advertising;
    try {
      const uploadedFiles = await uploadedFilesToSpaces(files);
      const response = await db.collection(Index.Add).insertOne({
        author: token,
        productTitle,
        productImages: uploadedFiles,
        productCategory,
        price,
        priceCondition,
        adCategory,
        productCondition,
        addDescription,
        city,
        rating: {
          oneStar: oneStar || 0,
          twoStar: twoStar || 0,
          threeStar: threeStar || 0,
          fourStar: fourStar || 0,
          fiveStar: fiveStar || 0,
        },
        click: click || 0,
        views: views || 0,
      });
      return HttpResponse.sucess({ response }, 201, {});
    } catch (err: any) {
      return HttpResponse.failed(err.message, 400);
    }
  }

  async filterCategories(categories: Categories) {
    const { page } = categories;
    const mongoQuery = buildMongoQuery(categories);

    try {
      const pageNumber: number = parseInt(page);
      const nPerPage: number = 10;

      const props: any = {
        pageNumber,
        nPerPage,
        filterQuery: mongoQuery,
      };
      const { filterResult, dataLength } = await this.advancedFiltration(props);
      return HttpResponse.sucess(
        {
          dataLength: dataLength.length,
          data: filterResult,
        },
        200,
        {}
      );
    } catch (err: any) {
      return HttpResponse.failed(err.message, 400);
    }
  }

  async advancedFiltration({
    pageNumber,
    nPerPage,
    filterQuery,
  }: {
    pageNumber: number;
    nPerPage: number;
    filterQuery: { [k: string]: any };
  }): Promise<any> {
    const { page, ...res } = filterQuery;

    try {
      const filterResult = await db
        .collection(Index.Add)
        .find({
          $and: [res],
        })
        .skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
        .limit(nPerPage)
        .toArray();

      const dataLength = await db
        .collection(Index.Add)
        .find({
          $and: [res],
        })
        .toArray();

      return { filterResult, dataLength };
    } catch (err) {
      console.log(err);
    }
  }
}
