import { Handler, NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { StatusCode } from "../enum";
import { BaseHttpResponse } from "../httpError/baseHttpResponse";
import { appConfig } from "../config";

export class AuthMiddleware {
  async isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (!req.session || !req.session.user)
      return BaseHttpResponse.failedResponse(
        StatusCode.UNAUTHORIZED,
        StatusCode.UNAUTHORIZED
      );

    const { user } = req.session;

    return verify(user, appConfig.secret, (err, session) => {
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

export const isAuthenticated: Handler = async (req, res, next) => {
  if (!req.session || !req.session.user)
    return BaseHttpResponse.failedResponse(
      StatusCode.UNAUTHORIZED,
      StatusCode.UNAUTHORIZED
    );

  const { user } = req.session;

  return verify(user, appConfig.secret, (err, session) => {
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
};
