import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.services";

export class Controller {
  constructor(private service: UserService = new UserService()) {}

  async userRegister(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.userRegister(req.body);
    res.status(response.statusCode).json(response);
  }
}
