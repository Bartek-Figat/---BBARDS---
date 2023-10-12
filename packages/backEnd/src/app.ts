import express from "express";
import helemt from "helmet";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import { RegisterRoutes } from "../build/routes";

export const app = express();

app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(compression());
app.use(
  cors({
    methods: ["GET, POST, PUT, DELETE, OPTIONS"],
    credentials: true,
    origin: "http://localhost:3001",
    allowedHeaders: [
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    ],
  })
);
app.use(helemt());
app.use(morgan("dev"));

RegisterRoutes(app);
