import { Handler } from "express";
import { authService } from "./auth.service";

export const loginController: Handler = async (req, res, next) => {
  const response = await authService.userLogin(req.body, req);
  res.status(response.statusCode).json(response);
};

export const logoutController: Handler = async (req, res, next) => {
  const response = await authService.userLogout(req.user);
  res.status(response.statusCode).json(response);
};
