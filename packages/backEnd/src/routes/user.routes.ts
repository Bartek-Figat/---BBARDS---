import { Router, Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.services";
import { Middleware } from "../middleware/index";
import {
  userLoginValidation,
  userRegisterValidatioin,
} from "../validation/index";
const router = Router({
  caseSensitive: true,
  strict: true,
});

const service = new UserService();
const middleware = new Middleware();

router.get(
  "/user",
  middleware.isAuthenticated.bind(middleware),
  service.userData.bind(service)
);

router.post(
  "/registration",
  userRegisterValidatioin,
  service.userRegister.bind(service)
);

router.post("/login", userLoginValidation, service.userLogin.bind(service));

router.get(
  "/user",
  middleware.isAuthenticated.bind(middleware),
  service.userData.bind(service)
);

router.get(
  "/logout",
  middleware.isAuthenticated.bind(middleware),
  service.userLogout.bind(service)
);

export default router;
