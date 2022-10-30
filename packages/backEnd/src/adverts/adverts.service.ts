import { v4 as uuidv4 } from "uuid";
import { ObjectId } from "mongodb";
import fs from "fs";
import { S3 } from "aws-sdk";
import { db } from "../db/mongo";
import { Index, StatusCode } from "../enum";
import { Repository } from "../repositories/add.respositories";
import { IAdvertising, ICategories, TokenDto } from "../dto/dto";
import { MulterRequest } from "../interface";
import { BaseHttpResponse } from "../httpError/baseHttpResponse";
import { appConfig } from "../config";

const s3 = new S3({
  endpoint: appConfig.digitalOceanUrl,
  region: appConfig.digitalOceanRegion,
  credentials: {
    accessKeyId: appConfig.digitalOceanAccessKeyId,
    secretAccessKey: appConfig.digitalOceanSecretKey,
  },
});

const uploadedFilesToSpaces = async (requsetFiles) => {
  const spacesFiles = requsetFiles.map(async (file) => {
    const spacesFiles = {
      Bucket: appConfig.digitalOceanBucketName,
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
          oneStar: oneStar || 0,
          twoStar: twoStar || 0,
          threeStar: threeStar || 0,
          fourStar: fourStar || 0,
          fiveStar: fiveStar || 0,
        },
        click: click || 0,
        views: views || 0,
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

export const advertsService = new AddService();
