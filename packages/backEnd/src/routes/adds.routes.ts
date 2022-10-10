import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { upload } from "../multer";
const router = Router({
  caseSensitive: true,
  strict: true,
});

const controller = new UserController();

router.get("/filter", controller.filterCategories.bind(controller));

export default router;
