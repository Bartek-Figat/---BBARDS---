import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload } from "jsonwebtoken";
import { StatusCode } from "../enum";
import { Repository } from "../repositories/user.repositories";

export class AuthMiddleware {
  constructor(private repository: Repository = new Repository()) {}

  async isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const token: string = authHeader && authHeader.split(" ")[1];

    if (!token)
      return res
        .status(StatusCode.UNAUTHORIZED)
        .json({ status: `${StatusCode.UNAUTHORIZED}` });

    const authorizationToken = await new Repository().find(
      { authorizationToken: { $in: [token] } },
      { authorizationToken: 1, _id: 0 }
    );

    if (authorizationToken.length === 0)
      return res.sendStatus(StatusCode.UNAUTHORIZED);

    try {
      verify(token, `secret`, (err, tokenVerify) => {
        if (err)
          return res.status(StatusCode.UNAUTHORIZED).json({
            status: `${StatusCode.UNAUTHORIZED}`,
          });
        req.user = {
          token: tokenVerify as JwtPayload,
          authHeader: token,
        };
        next();
      });
    } catch (err) {
      return res.sendStatus(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
