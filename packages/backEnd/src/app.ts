import express, {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from "express";
import { ValidateError } from "tsoa";
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
    origin: "http://localhost:3000",
    allowedHeaders: [
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    ],
  })
);
app.use(helemt());
app.use(morgan("dev"));

RegisterRoutes(app);

app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    if (res.status(401)) {
      return res.status(401).json({
        message: "Validation Failed",
        details: err?.fields,
      });
    }

    if (res.status(400)) {
      return res.status(400).json({
        message: "Bad Request",
        details: err?.fields,
      });
    }
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
});
