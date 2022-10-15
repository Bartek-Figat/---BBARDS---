import { Document, UpdateResult, InsertManyResult } from "mongodb";
import { db } from "../db/mongo";
import { Index } from "../enum";

export class Repository {
  async findOne<T>(query: T, projection: T): Promise<Document> {
    try {
      const result = await db
        .collection(Index.Users)
        .findOne(query, { projection });
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async find<T>(query: T, projection?: T): Promise<Document[]> {
    try {
      const result = await db
        .collection(Index.Users)
        .find(query, { projection })
        .toArray();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async insertOne<T>(document: T): Promise<Document> {
    try {
      const result = await db.collection(Index.Users).insertOne(document);
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async insertMany<T>(document: T[]) {
    try {
      await db.collection(Index.Users).insertMany(document);
    } catch (err) {
      console.log(err);
    }
  }

  async updateOne<T>(filter: T, updateDoc: T, options: T): Promise<Document> {
    try {
      const result = await db
        .collection(Index.Users)
        .updateOne(filter, updateDoc, options);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  async updateMany<T>(
    filter: T,
    updateDoc: T,
    options: T
  ): Promise<Document | UpdateResult> {
    try {
      const result = await db
        .collection(Index.Users)
        .updateMany(filter, updateDoc, options);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}
