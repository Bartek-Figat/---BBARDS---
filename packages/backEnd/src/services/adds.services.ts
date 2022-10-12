import { config } from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { ObjectId } from "mongodb";
import fs from "fs";
import { S3 } from "aws-sdk";
import { db } from "../db/db";
import { Index } from "../enum";
import { Repository } from "../repositories/add.respositories";
import { StatusCode } from "../enum";
import { IAdvertising, ICategories, TokenDto } from "../dto/dto";
import { MulterRequest } from "../interface/index";
import { BaseHttpResponse } from "../httpError/baseHttpResponse";

config({ path: "../../.env" });
const { endpoint, region, accessKeyId, secretAccessKey, bucketName } =
  process.env;

const s3 = new S3({
  endpoint,
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

const uploadedFilesToSpaces = async (requsetFiles) => {
  const spacesFiles = requsetFiles.map(async (file) => {
    const spacesFiles = {
      Bucket: bucketName,
      Key: `bbardsImages/${uuidv4() + file.originalname}`,
      Body: fs.createReadStream(file.path),
      // "authenticated-read" | "aws-exec-read" | "bucket-owner-full-control" | "bucket-owner-read" | "private" | "public-read" | "public-read-write"
      ACL: "public-read",
      ContentType: file.mimetype,
    };
    return await s3.upload(spacesFiles).promise();
  });

  return Promise.all(spacesFiles).then((values) => {
    return values.map(({ Location }) => {
      return Location;
    });
  });
};

export class AddService {
  constructor(private repository: Repository = new Repository()) {}

  async getAdvertisingData() {
    try {
      const adds = await this.repository.find({});
      const total = await db.collection(Index.Add).countDocuments({});

      return BaseHttpResponse.sucessResponse(
        { total, adds },
        StatusCode.SUCCESS,
        {}
      );
    } catch (err) {
      console.log(err);
      return BaseHttpResponse.failedResponse(
        err.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async addAdvertising(
    files: MulterRequest,
    { token }: TokenDto,
    advertising: IAdvertising
  ) {
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
      const response = await this.repository.insertOne({
        author: new ObjectId(token.token),
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
          oneStar,
          twoStar,
          threeStar,
          fourStar,
          fiveStar,
        },
        click,
        views,
      });
      return BaseHttpResponse.sucessResponse(
        { response },
        StatusCode.SUCCESS,
        {}
      );
    } catch (err) {
      console.log(err);
    }
  }

  async filterCategories(categories: ICategories) {
    const { page } = categories;

    const filterQuery = (obj: ICategories) => {
      return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
    };

    try {
      const pageNumber: number = parseInt(page);
      const nPerPage: number = 10;

      const props: any = {
        pageNumber,
        nPerPage,
        filterQuery: filterQuery(categories),
      };
      const { filterResult, dataLength } =
        await this.repository.advancedFiltration(props);
      return BaseHttpResponse.sucessResponse(
        {
          dataLength: dataLength.length,
          data: filterResult,
        },
        StatusCode.SUCCESS,
        {}
      );
    } catch (err) {
      return BaseHttpResponse.failedResponse(
        err.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }
}
