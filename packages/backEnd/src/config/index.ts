import { config } from "dotenv";
import logger from "jet-logger";

config({ path: "../../.env" });

const envErrors: string[] = [];

function appendEnvError(envVarName: string): null {
  envErrors.push(`Environment variable: ${envVarName} is not set`);
  return null;
}

// read environment variables, provide defaults or append errors to throw
const origin = process.env.ORIGIN ?? "*";
const backendPort = parseInt(process.env.BACKEND_PORT) || 8080;
const secret = process.env.SECRET ?? appendEnvError("SECRET");
const redisHost = process.env.REDIS_HOST ?? appendEnvError("REDIS_HOST");
const redisPort = process.env.REDIS_PORT
  ? parseInt(process.env.REDIS_PORT)
  : appendEnvError("REDIS_PORT");
const redisUsername =
  process.env.REDIS_USERNAME ?? appendEnvError("REDIS_USERNAME");
const redisPassword =
  process.env.REDIS_PASSWORD ?? appendEnvError("REDIS_PASSWORD");
const redisDb = process.env.REDIS_DB ?? appendEnvError("REDIS_DB");
const dbURL = process.env.DB_URL ?? appendEnvError("DB_URL");
const digitalOceanUrl =
  process.env.DIGITAL_OCEAN_URL ?? appendEnvError("DIGITAL_OCEAN_URL");
const digitalOceanRegion =
  process.env.DIGITAL_OCEAN_REGION ?? appendEnvError("DIGITAL_OCEAN_REGION");
const digitalOceanAccessKeyId =
  process.env.DIGITAL_OCEAN_ACCESS_KEY_ID ??
  appendEnvError("DIGITAL_OCEAN_ACCESS_KEY_ID");
const digitalOceanSecretKey =
  process.env.DIGITAL_OCEAN_SECRET_KEY ??
  appendEnvError("DIGITAL_OCEAN_SECRET_KEY");
const digitalOceanBucketName =
  process.env.DIGITAL_OCEAN_BUCKET_NAME ??
  appendEnvError("DIGITAL_OCEAN_BUCKET_NAME");
const sendgridApiKey =
  process.env.SENDGRID_API_KEY ?? appendEnvError("SENDGRID_API_KEY");

// shutdown the app if the configuration is not provided
if (envErrors.length > 0) {
  logger.err("Failed to read environment variables.");
  envErrors.forEach((err) => {
    logger.err(err);
  });
  logger.err("Shutting down with exit code 1...");
  process.exit(1);
}

export const appConfig = {
  origin,
  backendPort,
  secret,
  redisHost,
  redisPort,
  redisUsername,
  redisPassword,
  redisDb,
  dbURL,
  digitalOceanUrl,
  digitalOceanRegion,
  digitalOceanAccessKeyId,
  digitalOceanSecretKey,
  digitalOceanBucketName,
  sendgridApiKey,
};
