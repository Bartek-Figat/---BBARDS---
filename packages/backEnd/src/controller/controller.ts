import { Controller, Middleware, Get, Post } from "@overnightjs/core";
import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.services";
import { AddService } from "../services/adds.services";
import { ICategories } from "../dto/user.dto";
import { MulterRequest } from "../interface";
import { AuthMiddleware } from "../middleware/index";

const middleware = new AuthMiddleware();
@Controller("api/v1")
export class UserController {
  constructor(
    private service: UserService = new UserService(),
    private addService: AddService = new AddService()
  ) {}

  @Post("registration")
  async userRegister(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userRegister(req.body);
    res.status(response.statusCode).json(response);
  }
  @Post("login")
  async userLogin(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userLogin(req.body);
    res.status(response.statusCode).json(response);
  }
  @Get("user")
  @Middleware(middleware.isAuthenticated)
  @Middleware(middleware.isAuthenticated)
  async userData(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userData(req.user);
    res.status(response.statusCode).json(response);
  }
  @Get("logout")
  @Middleware(middleware.isAuthenticated)
  async userLogout(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userLogout(req.user);
    res.status(response.statusCode).json(response);
  }
  @Get("user/profile")
  @Middleware(middleware.isAuthenticated)
  async userProfile(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userProfile(req.user);
    res.status(response.statusCode).json(response);
  }
  @Post("user/profile")
  @Middleware(middleware.isAuthenticated)
  async userInsertProfile(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userInsertProfile(req.body, req.user);
    res.status(response.statusCode).json(response);
  }
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
  async advertisingData(req: Request, res: Response, next: NextFunction) {
    const response = await this.addService.advertisingData();
    res.status(response.statusCode).json(response);
  }
}
