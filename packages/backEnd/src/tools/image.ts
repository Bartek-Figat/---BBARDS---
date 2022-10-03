import { S3 } from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
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

export const uploadedFilesToSpaces = async (file) => {

      const spacesFiles = {
        Bucket: bucketName,
        Key: `bbardsImages/${uuidv4() + "-" + file.originalName}`,
        Body: Buffer.from(file.data),
        ACL: "public-read",
        ContentEncoding: 'base64',
        ContentType: file.mimetype,
      };
      const { Location } = await s3.upload(spacesFiles).promise()
      return Location
    };
  