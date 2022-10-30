import { Router } from "express";

export const advertsRouter = Router();

advertsRouter.get("", (req, res, next) => {
  return res.sendStatus(501);
});
advertsRouter.post("", (req, res, next) => {
  return res.sendStatus(501);
});
advertsRouter.get("data", (req, res, next) => {
  return res.sendStatus(501);
});
