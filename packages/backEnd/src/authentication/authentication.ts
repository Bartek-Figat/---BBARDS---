import { Request } from "express";
import { verify as verifyJwt } from "jsonwebtoken";
import { promisify } from "util";
import { getDb } from "../db/mongo";
import { Index } from "../enum/index";
import { Unauthorized } from "../httpError/ErrorHandler";

const verify = promisify(verifyJwt);

export async function expressAuthentication(
  req: Request,
  securityName: string,
  _scopes?: string[]
) {
  if (securityName === "jwt") {
    const collection = getDb().collection(Index.Users);
    const authHeader = req.headers.authorization;
    const token: string | undefined = authHeader && authHeader.split(" ")[1];
    const authorizationToken = await collection
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
      throw new Unauthorized("Invalid token");
    }

    try {
      const decoded = await verify(`${token}`);
      return {
        decoded,
        authHeader: token,
      };
    } catch (err) {
      throw new Unauthorized("Failed to verify token");
    }
  }
}
