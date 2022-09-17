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

  async filter({
    parsePage,
    pageSize,
    productCategory,
    price,
    priceCondition,
    adCategory,
    productCondition,
    city,
  }: IPagination) {
    console.log(parsePage);
    try {
      const filterResult = await db
        .collection(Index.Add)
        .find({
          $or: [
            { productCategory },
            { price },
            { adCategory },
            { priceCondition },
            { productCondition },
            { city },
          ],
        })
        .limit(pageSize)
        .skip(pageSize * parsePage)
        .toArray();

      const result = await db
        .collection(Index.Add)
        .find({})
        .limit(pageSize)
        .skip(pageSize * parsePage)
        .toArray();

      if (filterResult.length <= 0) return result;

      return filterResult;
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
