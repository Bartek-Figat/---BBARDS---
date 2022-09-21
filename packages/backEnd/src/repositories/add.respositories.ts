import { Document } from "mongodb";
import { db } from "../db/db";
import { Index } from "../enum";
import { IAdds, IPagination } from "../interface/index";

export class Repository {
  async find<T>(query: T, projection?: T): Promise<Document[]> {
    try {
      const result = await db
        .collection(Index.Add)
        .find(query, { projection })
        .toArray();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async filterOnlyWithPagination(
    { parsePage, pageSize },
    projection?: any
  ): Promise<Document[]> {
    try {
      const filterResult = await db
        .collection(Index.Add)
        .find({})
        .limit(pageSize)
        .skip(pageSize * parsePage)
        .toArray();

      return filterResult;
    } catch (err) {
      console.log(err);
    }
  }

  async advancedFiltration({ parsePage, pageSize, resultFromCheckQuey }) {
    const { page, ...res } = resultFromCheckQuey;
    try {
      const filterResult = await db
        .collection(Index.Add)
        .find({
          $and: [res],
        })
        .limit(pageSize)
        .skip(pageSize * parsePage)
        .toArray();

      const dataLength = await db
        .collection(Index.Add)
        .find({
          $and: [res],
        })
        .toArray();

      return { filterResult, dataLength };
    } catch (err) {
      console.log(err);
    }
  }

  async insertMany<T>(document: T[]) {
    try {
      await db.collection(Index.Add).insertMany(document);
    } catch (err) {
      console.log(err);
    }
  }
}
