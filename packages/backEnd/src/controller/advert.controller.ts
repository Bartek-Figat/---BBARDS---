import { Controller, Get, Middleware, Post } from "@overnightjs/core";
import { Request, Response, NextFunction } from "express";
import { AddService } from "../services/adds.services";
import { ICategories } from "../dto/advert.dto";
import { MulterRequest } from "../interface";
import { upload } from "../multer";
import { AuthMiddleware } from "../middleware";

const middleware = new AuthMiddleware();
@Controller("api/v1")
export class AdvertController {
  constructor(private addService: AddService = new AddService()) {}

  @Get("filter")
  async filterCategories(
    req: Request<{}, {}, {}, ICategories>,
    res: Response,
    next: NextFunction
  ) {
    const response = await this.addService.filterCategories(req.query);
    res.status(response.statusCode).json(response);
  }
  @Post("advertisement")
  @Middleware([middleware.isAuthenticated, upload.array("images", 6)])
  async addAdvertising(req: MulterRequest, res: Response, next: NextFunction) {
    const response = await this.addService.addAdvertising(
      req.files,
      req.user,
      req.body
    );
    res.status(response.statusCode).json(response);
  }

  @Get("data")
  async getAdvertisingData(req: Request, res: Response, next: NextFunction) {
    const response = await this.addService.getAdvertisingData();
    res.status(response.statusCode).json(response);
  }
}
