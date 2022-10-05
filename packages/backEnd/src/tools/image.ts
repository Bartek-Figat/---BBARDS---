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

export const uploadFile = async (file) => {
const data = Buffer.from(file.data.replace(/^data:image\/\w+;base64,/, ""), 'base64');
const mimeType = file.data.substring(file.data.indexOf(":")+1, file.data.indexOf(";"))
const extension = mimeType.split('/')[1]

const fileToUpload = {
    Bucket: bucketName,
    Key: `bbardsImages/${uuidv4() + "-extension" + file.originalName + "." + extension}`,
    Body: data,
    ACL: "public-read",
    ContentEncoding: 'base64',
    ContentType: mimeType
  };
  const { Location } = await s3.upload(fileToUpload).promise()
  return Location
};
