import { Router, Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.services";
import { userRegisterValidatioin } from "../validation/index";
const router = Router({
  caseSensitive: true,
  strict: true,
});

const service = new UserService();

router.get("/user", (req: Request, res: Response, next: NextFunction) => {
  res.json({ url: req.originalUrl, time: Date.now() });
});

router.post(
  "/registration",
  userRegisterValidatioin,
  service.userRegister.bind(service)
);

export default router;
