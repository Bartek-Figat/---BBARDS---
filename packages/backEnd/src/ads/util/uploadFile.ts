import { v4 as uuidv4 } from "uuid";
import { createReadStream } from "fs";
import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  endpoint: process.env.endpoint,
  region: process.env.region,
  credentials: {
    accessKeyId: process.env.accessKeyId || "",
    secretAccessKey: process.env.secretAccessKey || "",
  },
});

export class Upolader {
  constructor() {}
  async UploadFiles(requsetFiles: Express.Multer.File[]) {
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
  }

  ImagesFromRequset(files: Express.Multer.File[]): Express.Multer.File[] {
    return files.filter(
      (file) => file.mimetype === "image/jpeg" || file.mimetype === "image/png"
    );
  }
}
