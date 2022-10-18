import { config } from "dotenv";
import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload } from "jsonwebtoken";
import { StatusCode } from "../enum";
import { BaseHttpResponse } from "../httpError/baseHttpResponse";
import { Repository } from "../repositories/user.repositories";

config();
const { secret } = process.env;

export class AuthMiddleware {
  constructor(private repository: Repository = new Repository()) {}

  async isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (!req.session || !req.session.user)
      return BaseHttpResponse.failedResponse(
        StatusCode.UNAUTHORIZED,
        StatusCode.UNAUTHORIZED
      );

    const { user } = req.session;

    return verify(user, `${secret}`, (err, session) => {
      if (err)
        return BaseHttpResponse.failedResponse(
          err.message,
          StatusCode.UNAUTHORIZED
        );
      req.user = {
        token: session,
      };
      next();
    });
  }
}
