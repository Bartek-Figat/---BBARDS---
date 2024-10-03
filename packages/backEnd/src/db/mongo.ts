import { config } from "dotenv";
import { MongoClient, Db } from "mongodb";
import { Index } from "../enum/index";
config({ path: "../../.env" });
//const { dbDEV } = process.env;
let db: Db;

export async function connectToDb() {
  const client = new MongoClient(`mongodb://localhost:27017`);
  await client.connect();
  db = client.db(Index.Db);
  console.log("Connect To Db");
}

export function getDb() {
  return db;
}

export class Database {
  private client: MongoClient;
  private db: Db;

  constructor() {
    this.client = new MongoClient("mongodb://localhost:27017");
    this.db = this.client.db("mydatabase"); // Initializing the property in the constructor
  }

  public async connect(): Promise<void> {
    await this.client.connect();
    // No need to assign this.db here if initialized in the constructor
  }

  public getCollection(collectionName: string) {
    return this.db.collection(collectionName);
  }
}
