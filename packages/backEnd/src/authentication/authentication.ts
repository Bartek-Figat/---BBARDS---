import { Request } from "express";
import { verify } from "jsonwebtoken";
import { db } from "../db/mongo";
import { Index } from "../enum/index";
import { Unauthorized } from "../httpError/ErrorHandler";

export async function expressAuthentication(
  req: Request,
  securityName: string,
  _scopes?: string[]
) {
  if (securityName === "jwt") {
    const authHeader = req.headers.authorization;
    const token: string | undefined = authHeader && authHeader.split(" ")[1];

    return new Promise(async (resolve, _reject) => {
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

      if (authorizationToken.length === 0) {
        throw new Unauthorized("");
      }

      verify(`${token}`, "secret", function (err: any, decoded: any) {
        if (err) {
          throw new Unauthorized("");
        }

        resolve({
          decoded,
          authHeader: token,
        });
      });
    });
  }
}
