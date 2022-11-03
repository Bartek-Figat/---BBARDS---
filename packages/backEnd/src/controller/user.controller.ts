import { Controller, Middleware, Get, Post } from "@overnightjs/core";
import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.services";
import { AuthMiddleware } from "../middleware/index";

const middleware = new AuthMiddleware();
@Controller("api/v1")
export class UserController {
  constructor(private service: UserService = new UserService()) {}

  @Get("user")
  @Middleware(middleware.isAuthenticated)
  async getUserData(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.getUserData(req.user);
    res.status(response.statusCode).json(response);
  }

  @Get("user/profile")
  @Middleware(middleware.isAuthenticated)
  async getUserProfile(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.getUserProfile(req.user);
    res.status(response.statusCode).json(response);
  }

  @Post("user/profile")
  @Middleware(middleware.isAuthenticated)
  async userInsertProfile(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userInsertProfile(req.body, req.user);
    res.status(response.statusCode).json(response);
  }
}
