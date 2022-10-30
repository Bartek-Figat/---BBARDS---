import { Router } from "express";
import { loginController, logoutController } from "./controllers";
import { isAuthenticated } from "../middleware";

export const authRouter = Router();

authRouter.post("", loginController);
authRouter.delete("", isAuthenticated, logoutController);
