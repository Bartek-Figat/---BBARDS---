import { config } from "dotenv";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { S3 } from "aws-sdk";
import { db } from "../db/db";
import { Index } from "../enum";
import { Repository } from "../repositories/add.respositories";
import { StatusCode } from "../enum";
import { IAdds, MulterRequest } from "../interface/index";

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

  async AdvertisingData(req: Request, res: Response, next: NextFunction) {
    try {
      const adds = await this.repository.find({});
      const total = await db.collection(Index.Add).countDocuments({});

      return res.status(StatusCode.SUCCESS).json({ total, adds });
    } catch (err) {
      console.log(err);
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async AddAdvertising(req: MulterRequest, res: Response, next: NextFunction) {
    const whitelist = ["image/png", "image/jpeg", "image/jpg"];
    try {
      // console.log(req.files[0].mimetype);
      // if (!whitelist.includes(req.files[0].mimetype)) {
      //   console.log("file is not allowed");
      // }
      // const spacesFiles = await uploadedFilesToSpaces(req.files);
      return res.status(StatusCode.SUCCESS).json({ msg: 200 });
    } catch (err) {
      console.log(err);
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async filterAdvertising(
    req: Request<{}, {}, {}, IAdds>,
    res: Response,
    next: NextFunction
  ) {
    const { page }: IAdds = req.query;

    const filterQuery = (obj: IAdds) => {
      return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
    };

    try {
      const pageNumber: number = parseInt(page);
      const nPerPage: number = 10;

      const props: any = {
        pageNumber,
        nPerPage,
        filterQuery: filterQuery(req.query),
      };
      const { filterResult, dataLength } =
        await this.repository.advancedFiltration(props);

      console.log("dataLength.length-------->", filterResult);

      res.status(StatusCode.SUCCESS).json({
        dataLength: dataLength.length,
        data: filterResult,
      });
    } catch (err) {
      console.log(err);
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
