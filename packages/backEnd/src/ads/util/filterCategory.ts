import { getDb } from "../../db/mongo";
import { Index } from "../../enum/index";
import { BadRequest } from "../../httpError/ErrorHandler";

export class Filter {
  private collection = getDb().collection(Index.Add);

  async categoryFiltration({
    pageNumber,
    nPerPage,
    filterQuery,
  }: {
    pageNumber: number;
    nPerPage: number;
    filterQuery: { [k: string]: any };
  }): Promise<any> {
    const { page, ...res } = filterQuery;

    try {
      const filterResult = await this.collection
        .find({
          $and: [res],
        })
        .skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
        .limit(nPerPage)
        .toArray();

      const dataLength = await this.collection
        .find({
          $and: [res],
        })
        .toArray();

      return { filterResult, dataLength };
    } catch (err) {
      throw new BadRequest(err);
    }
  }
}
