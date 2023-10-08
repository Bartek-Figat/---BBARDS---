import { ObjectId } from "mongodb";
import { getDb } from "../db/mongo";
import { Index } from "../enum/index";
import { Token, User } from "./dto/user";

export class UsersService {
  private collection = getDb().collection<User>(Index.Users);

  async getUser({ decoded: { token } }: Token): Promise<User | null> {
    const user: User | null = await this.collection.findOne(
      { _id: new ObjectId(token) },
      {
        projection: {
          email: 1,
          name: 1,
          lastLoggedIn: 1,
          logOutDate: 1,
          isLogin: 1,
          _id: 0,
        },
      }
    );
    console.log(user);
    return user;
  }
}
