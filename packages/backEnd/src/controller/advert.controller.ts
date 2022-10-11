import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response, NextFunction } from "express";
import { AddService } from "../services/adds.services";
import { ICategories } from "../dto/dto";
import { MulterRequest } from "../interface";

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
  async addAdvertising(req: MulterRequest, res: Response, next: NextFunction) {
    const response = await this.addService.addAdvertising(req.files);
    res.status(response.statusCode).json(response);
  }

  @Get("data")
  async getAdvertisingData(req: Request, res: Response, next: NextFunction) {
    const response = await this.addService.getAdvertisingData();
    res.status(response.statusCode).json(response);
  }
}
