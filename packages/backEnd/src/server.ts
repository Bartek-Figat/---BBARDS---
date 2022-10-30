import { config } from "dotenv";
import { Server } from "@overnightjs/core";
import express, { json, urlencoded } from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import helemt from "helmet";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import Logger from "jet-logger";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./api/documentation.json";
import { connect } from "./db/mongo";
import { UserController } from "./controller/user.controller";
import { AdvertController } from "./controller/advert.controller";

config();
const { origin, Redishost, Redispassword, Redisusername } = process.env;

const Port = 8080;

process.on("SIGINT", (err) => {
  process.exit(0);
});

connect();

const rediClient = new Redis(
  `redis://${Redisusername}:${Redispassword}@${Redishost}`
);

const RedisStore = connectRedis(session);

export class SampleServer extends Server {
  constructor() {
    super(process.env.NODE_ENV === "development");
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(compression());
    this.app.use(express.static("avatar"));
    this.app.use(
      cors({
        methods: ["GET, POST, PUT, DELETE, OPTIONS"],
        credentials: true,
        origin,
        allowedHeaders: [
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        ],
      })
    );
    this.app.use(helemt());
    this.app.use(morgan("dev"));
    this.app.enable("trust proxy");
    this.app.use(
      session({
        secret: "secret",
        name: "sid",
        resave: false,
        saveUninitialized: false,
        store: new RedisStore({ client: rediClient }),
        cookie: {
          secure: true,
          httpOnly: true,
          sameSite: "lax",
        },
      })
    );
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
    this.setupControllers();
  }

  private setupControllers(): void {
    const userController = new UserController();
    const advertController = new AdvertController();
    super.addControllers([userController, advertController]);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.imp(`Server listening on port: ${port}`);
    });
  }
}

const server = new SampleServer();

server.start(Port);
