import { Router } from "express";
import { getAdverts, getAdvertsData } from "./controller";
import { isAuthenticated } from "../middleware";
import { upload } from "../multer";

export const advertsRouter = Router();

advertsRouter.get("", getAdverts);
advertsRouter.post("", isAuthenticated, upload.array("images", 6));
advertsRouter.get("data", getAdvertsData);
