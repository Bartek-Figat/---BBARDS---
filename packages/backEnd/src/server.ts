import { config } from "dotenv";
import { Server } from "@overnightjs/core";
import express, { json, urlencoded } from "express";
import helemt from "helmet";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./api/documentation.json";
import { connect } from "./db/db";
import { UserController } from "./controller/controller";

config({ path: "../../.env" });
const { origin } = process.env;

const Port = 8080;

process.on("SIGINT", (err) => {
  process.exit(0);
});

connect();

export class SampleServer extends Server {
  constructor() {
    super(process.env.NODE_ENV === "development"); // setting showLogs to true
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
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
    this.setupControllers();
  }

  private setupControllers(): void {
    const userController = new UserController();

    // super.addControllers() must be called, and can be passed a single controller or an array of
    // controllers. Optional router object can also be passed as second argument.
    super.addControllers([userController]);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server listening on port: ${port}`);
    });
  }
}

const server = new SampleServer();

server.start(Port);
