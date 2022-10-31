import { Router } from "express";
import {
  confirmEmail,
  getUser,
  getUserProfile,
  register,
  updateUserProfile,
} from "./controllers";
import { isAuthenticated } from "../middleware";

export const usersRouter = Router({});

usersRouter.get("", isAuthenticated, getUser);
usersRouter.post("", register);
usersRouter.post("/profile", isAuthenticated, updateUserProfile);
usersRouter.get("/profile", isAuthenticated, getUserProfile);
usersRouter.get("/activate/:token", confirmEmail);
