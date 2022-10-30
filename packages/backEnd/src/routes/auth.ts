import { Router } from "express";

export const authRouter = Router();

authRouter.post("", (req, res, next) => res.sendStatus(501));
authRouter.delete("", (req, res, next) => {
  res.sendStatus(501);
});
