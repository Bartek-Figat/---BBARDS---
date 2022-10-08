import { Router } from "express";
import { Middleware } from "../middleware/index";
import { Controller } from "../controller/controller";
const router = Router({
  caseSensitive: true,
  strict: true,
});

const middleware = new Middleware();
const cotroller = new Controller();

router.get(
  "/user",
  middleware.isAuthenticated.bind(middleware),
  cotroller.userData.bind(cotroller)
);

router.post("/registration", cotroller.userRegister.bind(cotroller));

router.post("/login", cotroller.userLogin.bind(cotroller));

router.get(
  "/user",
  middleware.isAuthenticated.bind(middleware),
  cotroller.userData.bind(cotroller)
);

router.get(
  "/user/profile",
  middleware.isAuthenticated.bind(middleware),
  cotroller.userProfile.bind(cotroller)
);

router.post(
  "/user/profile",
  middleware.isAuthenticated.bind(middleware),
  cotroller.userInsertProfile.bind(cotroller)
);

router.get(
  "/logout",
  middleware.isAuthenticated.bind(middleware),
  cotroller.userLogout.bind(cotroller)
);

export default router;
