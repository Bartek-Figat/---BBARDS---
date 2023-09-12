import { ValidateError } from "tsoa";
import { Request } from "express";
import { verify } from "jsonwebtoken";
import { db } from "../db/mongo";
import { Index } from "../enum/index";

export async function expressAuthentication(
  req: Request,
  securityName: string,
  _scopes?: string[]
) {
  if (securityName === "jwt") {
    const authHeader = req.headers.authorization;
    const token: string | undefined = authHeader && authHeader.split(" ")[1];

    return new Promise(async (resolve, reject) => {
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
        reject(new ValidateError({}, "Unauthorized"));
      }

      verify(`${token}`, "secret", function (err: any, decoded: any) {
        if (err) {
          reject(new ValidateError({ err }, "Unauthorized"));
        }

        resolve({
          decoded,
          authHeader: token,
        });
      });
    });
  }
}
