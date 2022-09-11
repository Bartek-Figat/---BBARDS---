import { config } from "dotenv";
import { Document, UpdateResult } from "mongodb";
import { DataBase } from "../db/db";

config({ path: "../../.env" });
const { dbDEV } = process.env;

export class Repository {
  constructor(private db: DataBase = new DataBase()) {}

  async findOne<T>(query: T, projection: T): Promise<Document> {
    const { usersCollection, client } = await this.db.connect(dbDEV, {
      useNewUrlParser: true,
    });
    try {
      const result = await usersCollection.findOne(query, { projection });
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }

  async find<T>(query: T, projection?: T): Promise<Document[]> {
    const { usersCollection, client } = await this.db.connect(dbDEV, {
      useNewUrlParser: true,
    });
    try {
      const result = await usersCollection
        .find(query, { projection })
        .toArray();
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }

  async insertOne<T>(document: T): Promise<Document> {
    const { usersCollection, client } = await this.db.connect(dbDEV, {
      useNewUrlParser: true,
    });
    try {
      const result = await usersCollection.insertOne(document);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }

  async updateOne<T>(filter: T, updateDoc: T, options: T): Promise<Document> {
    const { usersCollection, client } = await this.db.connect(dbDEV, {
      useNewUrlParser: true,
    });
    try {
      const result = await usersCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }
  async updateMany<T>(
    filter: T,
    updateDoc: T,
    options: T
  ): Promise<Document | UpdateResult> {
    const { usersCollection, client } = await this.db.connect(dbDEV, {
      useNewUrlParser: true,
    });
    try {
      const result = await usersCollection.updateMany(
        filter,
        updateDoc,
        options
      );
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }
}
