import { Db, MongoClient, MongoClientOptions } from "mongodb";
import Logger from "jet-logger";
import { appConfig } from "../config";

import { Index } from "../enum";

const client = new MongoClient(appConfig.dbURL, {
  useNewUrlParser: true,
} as MongoClientOptions);

export let db: Db;

export const connect = async () => {
  const connection = await client.connect();
  if (!connection) {
    Logger.imp("Db not connected");
  } else {
    Logger.imp("Db connected");
    Logger.imp(`Database Max Listeners: -> ${connection.getMaxListeners()}`);

    db = connection.db(Index.Db);
    return client;
  }
};
