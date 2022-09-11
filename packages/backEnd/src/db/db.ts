import { Collection, MongoClient } from "mongodb";
import { Index } from "../enum";

export class DataBase {
  async connect(dbURI: string, dbOptions: any) {
    const client: MongoClient = new MongoClient(dbURI, dbOptions);
    await client.connect();
    const usersCollection = client.db(Index.Db).collection(Index.Users);
    return { usersCollection, client };
  }
}
