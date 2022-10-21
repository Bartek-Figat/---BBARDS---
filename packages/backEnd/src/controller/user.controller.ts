import { Controller, Middleware, Get, Post } from "@overnightjs/core";
import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.services";
import { AuthMiddleware } from "../middleware/index";

const middleware = new AuthMiddleware();
@Controller("api/v1")
export class UserController {
  constructor(private service: UserService = new UserService()) {}

  @Post("registration")
  async userRegister(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userRegister(req.body);
    res.status(response.statusCode).json(response);
  }
  @Post("login")
  async userLogin(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userLogin(req.body, req);
    res.status(response.statusCode).json(response);
  }

  @Get("user")
  @Middleware(middleware.isAuthenticated)
  async getUserData(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.getUserData(req.user);
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

  @Get("activate/:token")
  async userEmailConfiramtion(
    req: Request<{ token: string }, {}, {}, {}>,
    res: Response,
    next: NextFunction
  ) {
    const response = await this.service.emailConfiramtion(req.params);
    res.status(response.statusCode).json(response);
  }
}
