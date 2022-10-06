import { Router } from "express";
import { AddService } from "../services/adds.services";
import { upload } from "../multer";
const router = Router({
  caseSensitive: true,
  strict: true,
});

const service = new AddService();

router.post(
  "/get-adds",
  upload.array("images", 6),
  service.AddAdvertising.bind(service)
);

router.get("/filter", service.filterAdvertising.bind(service));

export default router;
