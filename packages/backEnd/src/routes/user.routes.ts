import { Router, Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.services";
import { Repository } from "../repositories/user.repositories";
import { Middleware } from "../middleware/index";
import {
  userLoginValidation,
  userRegisterValidatioin,
} from "../validation/index";
import { Controller } from "../controller/controller";
const router = Router({
  caseSensitive: true,
  strict: true,
});

const repository = new Repository();
const service = new UserService();
const middleware = new Middleware();
const cotroller = new Controller();

router.get(
  "/user",
  middleware.isAuthenticated.bind(middleware),
  service.userData.bind(service)
);

router.post("/registration", cotroller.userRegister.bind(cotroller));

router.post("/login", service.userLogin.bind(service));

router.get(
  "/user",
  middleware.isAuthenticated.bind(middleware),
  service.userData.bind(service)
);

router.get(
  "/user/profile",
  middleware.isAuthenticated.bind(middleware),
  service.userProfile.bind(service)
);

router.post(
  "/user/profile",
  middleware.isAuthenticated.bind(middleware),
  service.userInsertProfile.bind(service)
);

router.get(
  "/logout",
  middleware.isAuthenticated.bind(middleware),
  service.userLogout.bind(service)
);

export default router;
