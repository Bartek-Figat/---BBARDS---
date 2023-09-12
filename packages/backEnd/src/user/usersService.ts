import { ObjectId } from "mongodb";
import { db } from "../db/mongo";
import { Index } from "../enum/index";
import { Token, User } from "./dto/user";

export class UsersService {
  async getUser({ decoded: { token } }: Token): Promise<User | null> {
    const user: User | null = await db.collection<User>(Index.Users).findOne(
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
