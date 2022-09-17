import { config } from "dotenv";
import { Db, MongoClient, MongoClientOptions } from "mongodb";

import { Index } from "../enum";

config({ path: "../../.env" });
const { dbDEV } = process.env;

const client = new MongoClient(dbDEV, {
  useNewUrlParser: true,
} as MongoClientOptions);

export let db: Db;

export const connect = async () => {
  const connection = await client.connect();
  if (!connection) {
    console.log("Db not connected");
  } else {
    console.log("Db connected");
    console.log("Database Max Listeners: ->", connection.getMaxListeners());

    db = connection.db(Index.Db);
    return client;
  }
};
