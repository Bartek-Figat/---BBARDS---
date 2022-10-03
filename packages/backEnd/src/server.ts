import { config } from "dotenv";
import express, { Express } from "express";
import helemt from "helmet";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./api/documentation.json";
import userRouter from "./routes/user.routes";
import addsRouter from "./routes/adds.routes";
import { connect } from "./db/db";

config({ path: "../../.env" });
const { origin } = process.env;

const Port = 8080;

process.on("SIGINT", (err) => {
  process.exit(0);
});

connect();

const server: Express = express();
server.use(express.urlencoded({ limit: "50mb", extended: true }));
server.use(express.json({ limit: "50mb" }));
server.use(compression());
server.use(express.static("avatar"));
server.use(
  cors({
    methods: ["GET, POST, PUT, DELETE, OPTIONS"],
    credentials: true,
    origin,
    allowedHeaders: [
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    ],
  })
);

server.use(helemt());
server.use(morgan("tiny"));
server.enable("trust proxy");

server.use("/api/v1", userRouter);
server.use("/api/v1", addsRouter);

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.listen(Port, () =>
  console.log(`Server is starting cleanup at: http://localhost:${Port}`)
);
