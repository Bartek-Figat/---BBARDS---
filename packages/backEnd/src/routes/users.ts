import { Router } from "express";

export const usersRouter = Router({});

usersRouter.get("", (req, res, next) => {
  return res.sendStatus(501);
});
usersRouter.post("", (req, res, next) => {
  return res.sendStatus(501);
});
usersRouter.post("profile", (req, res, next) => {
  return res.sendStatus(501);
});
usersRouter.get("profile", (req, res, next) => {
  return res.sendStatus(501);
});
usersRouter.post("activate/:token", (req, res, next) => {
  return res.sendStatus(501);
});
