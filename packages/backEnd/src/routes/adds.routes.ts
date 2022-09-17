import { Router } from "express";
import { AddService } from "../services/adds.services";
const router = Router({
  caseSensitive: true,
  strict: true,
});

const service = new AddService();

router.get("/get-adds", service.AdvertisingData.bind(service));

router.get("/filter", service.filterAdvertising.bind(service));

export default router;
