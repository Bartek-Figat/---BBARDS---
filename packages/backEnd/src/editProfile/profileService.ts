import { config } from "dotenv";
import { S3 } from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { Index } from "../enum";
import { db } from "../db/mongo";

config({ path: "../../.env" });

const { endpoint, region, accessKeyId, secretAccessKey, bucketName } =
  process.env;

const s3 = new S3({
  endpoint,
  region,
  credentials: {
    accessKeyId: `${accessKeyId}`,
    secretAccessKey: `${secretAccessKey}`,
  },
});

export class EditProfile {
  async profile(request: any) {
    const {
      file,
      body,
      user: {
        decoded: { token },
      },
    } = request;
    const imageProfile = await s3
      .upload({
        Bucket: `${bucketName}`,
        Key: `bbardsImages/${uuidv4() + file?.originalname}`,
        Body: fs.createReadStream(`${file?.path}`),
        // "authenticated-read" | "aws-exec-read" | "bucket-owner-full-control" | "bucket-owner-read" | "private" | "public-read" | "public-read-write"
        ACL: "public-read",
        ContentType: file?.mimetype,
      })
      .promise()
      .then(async (values) => values.Location);

    await db.collection(Index.UserProfile).insertOne({
      ...body,
      imageProfile,
      dateAdded: new Date(),
      user_id: token,
    });
  }
}