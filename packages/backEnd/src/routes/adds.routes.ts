import { Router } from "express";
import { Controller } from "../controller/controller";
import { upload } from "../multer";
const router = Router({
  caseSensitive: true,
  strict: true,
});

const controller = new Controller();

router.get("/filter", controller.filterCategories.bind(controller));

export default router;
