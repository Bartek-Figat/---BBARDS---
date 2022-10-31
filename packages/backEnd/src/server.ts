import express, { json, urlencoded } from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import logger from "jet-logger";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./api/documentation.json";
import { connect } from "./db/mongo";

import { appConfig } from "./config";
import { authRouter } from "./auth/router";
import { usersRouter } from "./users/router";
import { advertsRouter } from "./adverts/router";

process.on("SIGINT", (err) => {
  process.exit(0);
});

connect();

const redisClient = new Redis(
  `redis://${appConfig.Redisusername}:${appConfig.Redispassword}@${appConfig.Redishost}`
);

const RedisStore = connectRedis(session);

const app = express();

//configure app
app.use(json({ limit: "50mb" }));
app.use(urlencoded({ limit: "50mb", extended: true }));
app.use(compression());
app.use(express.static("static"));
app.enable("trust proxy");
app.use(
  cors({
    methods: ["GET, POST, PUT, DELETE, OPTIONS"],
    credentials: true,
    origin: appConfig.origin,
    allowedHeaders: [
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    ],
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(
  session({
    secret: "secret",
    name: "sid",
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({ client: redisClient }),
    cookie: {
      secure: "auto",
      httpOnly: true,
      sameSite: "lax",
    },
  })
);
//mount swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//mount routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/adverts", advertsRouter);

app.listen(appConfig.Port, () => {
  logger.info(`App listening on port ${appConfig.Port}`);
});
