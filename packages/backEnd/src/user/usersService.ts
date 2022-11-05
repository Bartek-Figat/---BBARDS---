import { ObjectId } from "mongodb";
import { HttpResponse } from "../httpError/httpError";
import { db } from "../db/mongo";
import { Index } from "../enum/index";

export class UsersService {
  async getUser({ decoded: { token } }: { decoded: { token: string } }) {
    const user = await db.collection(Index.Users).findOne(
      { _id: new ObjectId(token) },
      {
        projection: {
          email: 1,
          name: 1,
          lastLoggedIn: 1,
          logOutDate: 1,
          _id: 0,
        },
      }
    );

    return HttpResponse.sucess(user, 200, {});
  }
}
