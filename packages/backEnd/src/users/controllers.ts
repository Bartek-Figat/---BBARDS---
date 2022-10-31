import { Handler, Request } from "express";
import { usersService } from "./users.service";

export const register: Handler = async (req, res, next) => {
  const response = await usersService.userRegister(req.body);
  res.status(response.statusCode).json(response);
};

export const getUser: Handler = async (req, res, next) => {
  const response = await usersService.getUserData(req.user);
  res.status(response.statusCode).json(response);
};

export const getUserProfile: Handler = async (req, res, next) => {
  const response = await usersService.getUserProfile(req.user);
  res.status(response.statusCode).json(response);
};

export const updateUserProfile: Handler = async (req, res, next) => {
  const response = await usersService.userInsertProfile(req.body, req.user);
  res.status(response.statusCode).json(response);
};

export const confirmEmail: Handler = async (req, res, next) => {
  const token = req.params?.token;
  if (!token) return res.sendStatus(400);
  const response = await usersService.emailConfiramtion({ token });
  res.status(response.statusCode).json(response);
};
