import { config } from "dotenv";
import { MongoClient, Db } from "mongodb";
import { Index } from "../enum/index";
config({ path: "../../.env" });
const { dbDEV } = process.env;
let db: Db;

export async function connectToDb() {
  const client = new MongoClient(`${dbDEV}`);
  await client.connect();
  db = client.db(Index.Db);
  console.log("Connect To Db");
}

export function getDb() {
  return db;
}
