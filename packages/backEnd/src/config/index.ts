import { config } from "dotenv";
import logger from "jet-logger";

config({ path: "../../.env" });

const envErrors: string[] = [];

function appendEnvError(envVarName: string): null {
  envErrors.push(`Environment variable: ${envVarName} is not set`);
  return null;
}

const {
  origin,
  secret,
  dbDEV,
  Port,
  region,
  accessKeyId,
  secretAccessKey,
  bucketName,
  sendgridApi,
  Redishost,
  Redisport,
  Redisusername,
  Redispassword,
  Redisdb,
  endpoint,
} = process.env;

export const appConfig = {
  origin,
  secret,
  dbDEV,
  region,
  accessKeyId,
  secretAccessKey,
  bucketName,
  sendgridApi,
  Redishost,
  Redisport,
  Redisusername,
  Redispassword,
  Redisdb,
  Port,
  endpoint,
};
