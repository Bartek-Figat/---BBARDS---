import { Request } from "express";
import * as jwt from "jsonwebtoken";
import { db } from "../db/mongo";
import { Index } from "../enum/index";
import { HttpResponse } from "../httpError/httpError";

export async function expressAuthentication(
  req: Request,
  securityName: string,
  _scopes?: string[]
) {
  if (securityName === "jwt") {
    const authHeader = req.headers.authorization;
    const token: string | undefined = authHeader && authHeader.split(" ")[1];

    return new Promise(async (resolve) => {
      if (!token) return HttpResponse.failed("Unauthorized", 401);

      const authorizationToken = await db
        .collection(Index.Users)
        .find(
          { authorizationToken: { $in: [token] } },

          {
            projection: {
              authorizationToken: 1,
              _id: 0,
            },
          }
        )
        .toArray();

      if (authorizationToken[0].authorizationToken.length === 0)
        return HttpResponse.failed("Unauthorized", 401);

      return jwt.verify(
        `${token}`,
        "secret",
        function (err: any, decoded: any) {
          if (err) return HttpResponse.failed("Unauthorized", 401);

          resolve({
            decoded,
            authHeader: token,
          });
        }
      );
    });
  }
}
