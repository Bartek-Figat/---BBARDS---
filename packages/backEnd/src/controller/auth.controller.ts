import {
  Controller,
  Middleware,
  ClassMiddleware,
  Get,
  Post,
  Delete,
} from "@overnightjs/core";
import os from "node:os";
import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.services";
import { AuthMiddleware } from "../middleware/index";

const middleware = new AuthMiddleware();
@Controller("api/v1")
export class AuthController {
  constructor(private service: AuthService = new AuthService()) {}

  @Post("registration")
  async userRegister(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userRegister(req.body);
    res.status(response.statusCode).json(response);
  }

  @Post("login")
  async userLogin(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    console.log(`Host name of the operating system: ${os.hostname()}`);
    console.log(`Operating system platform: ${os.platform()}`);
    console.log(`Amount of system memory: ${os.totalmem()}`);
    console.log(`Operating system name: ${os.type()}`);
    const response = await this.service.userLogin(req.body, req);
    res.status(response.statusCode).json(response);
  }

  @Get("activate/:token")
  async userEmailConfiramtion(req: Request, res: Response, next: NextFunction) {
    const { token } = req.params;
    console.log(token);
    if (!token) return res.sendStatus(400);
    const response = await this.service.emailConfiramtion({ token });
    res.status(response.statusCode).json(response);
  }

  @Delete("logout")
  @Middleware(middleware.isAuthenticated)
  async userLogout(req: Request, res: Response, next: NextFunction) {
    console.log(req.user);
    const response = await this.service.userLogout(req.user);
    res.status(response.statusCode).json(response);
  }
}
