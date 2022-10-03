import { config } from "dotenv";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { S3 } from "aws-sdk";
import { db } from "../db/db";
import { Index } from "../enum";
import { Repository } from "../repositories/add.respositories";
import { StatusCode } from "../enum";
import { IAdds } from "../interface/index";

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

interface MulterRequest extends Request {
  files: any;
  file: any;
}

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
    try {
      if (req.files > 0) {
        if (
          req.files.mimetype !== "image/png" ||
          req.files.mimetype !== "image/jpg" ||
          req.files.mimetype !== "image/jpeg"
        )
          return res
            .status(StatusCode.BAD_REQUEST)
            .json({ error: "Only .png, .jpg and .jpeg format allowed!" });
        // const spacesFiles = await uploadedFilesToSpaces(req.files);
        return res.status(StatusCode.SUCCESS).json({ msg: 200 });
      }
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
    const {
      page,
      productCategory,
      price,
      priceCondition,
      adCategory,
      productCondition,
      city,
    }: IAdds = req.query;

    const check = (object: IAdds) => {
      for (let key in {
        productCategory,
        price,
        priceCondition,
        adCategory,
        productCondition,
        city,
      }) {
        if (object[key] !== undefined) return req.query;
      }
    };
    const resultFromCheckQuey = check(req.query);

    try {
      const pageNumber: number = parseInt(page);
      const nPerPage: number = 10;

      if (resultFromCheckQuey === undefined) {
        const paginationProps: { pageNumber: number; nPerPage: number } = {
          pageNumber,
          nPerPage,
        };
        const data = await this.repository.filterOnlyWithPagination(
          paginationProps
        );
        res.status(StatusCode.NOT_FOUND).json({
          dataLength: data.length,
          msg: StatusCode.NOT_FOUND,
          data,
        });
      } else {
        const props: any = {
          pageNumber,
          nPerPage,
          resultFromCheckQuey,
        };
        const filter = await this.repository.advancedFiltration(props);

        res.status(StatusCode.SUCCESS).json({
          filterLength: filter.length,
          filter,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
