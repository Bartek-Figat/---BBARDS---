import { sign, verify } from "jsonwebtoken";
import { getDb } from "../db/mongo";
import { Index } from "../enum/index";

export class TokenService {
  private collection = getDb().collection(Index.Users);
  private tokenCollection = getDb().collection(Index.Token);

  generateAccessToken(userId: string) {
    return sign({ token: userId }, "secret", {
      expiresIn: "15m",
    });
  }

  async generateRefreshToken(userId: string): Promise<string> {
    const user = this.collection.findOne(
      { _id: userId },
      { projection: { _id: 1 } }
    );

    const refreshToken = sign({ userId }, "secret", {
      expiresIn: "7d",
    });
    await this.tokenCollection.insertOne({ $set: { refreshToken, user } });
    return refreshToken;
  }

  async verifyRefreshToken(token: string) {
    const result = await getDb().collection("refreshTokens").findOne({ token });
    if (!result) throw new Error("Invalid refresh token");
    return verify(token, "secret");
  }
}
