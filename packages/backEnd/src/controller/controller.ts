import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.services";
import { AddService } from "../services/adds.services";
import { ICategories } from "../dto/user.dto";
import { MulterRequest } from "../interface";

export class Controller {
  constructor(
    private service: UserService = new UserService(),
    private addService: AddService = new AddService()
  ) {}

  async userRegister(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userRegister(req.body);
    res.status(response.statusCode).json(response);
  }

  async userLogin(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userLogin(req.body);
    res.status(response.statusCode).json(response);
  }

  async userData(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userData(req.user);
    res.status(response.statusCode).json(response);
  }

  async userLogout(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userLogout(req.user);
    res.status(response.statusCode).json(response);
  }

  async userProfile(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userProfile(req.user);
    res.status(response.statusCode).json(response);
  }

  async userInsertProfile(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userInsertProfile(req.body, req.user);
    res.status(response.statusCode).json(response);
  }

  async filterCategories(
    req: Request<{}, {}, {}, ICategories>,
    res: Response,
    next: NextFunction
  ) {
    const response = await this.addService.filterCategories(req.query);
    res.status(response.statusCode).json(response);
  }

  async addAdvertising(req: MulterRequest, res: Response, next: NextFunction) {
    const response = await this.addService.addAdvertising(req.files);
    res.status(response.statusCode).json(response);
  }

  async advertisingData(req: Request, res: Response, next: NextFunction) {
    const response = await this.addService.advertisingData();
    res.status(response.statusCode).json(response);
  }
}
