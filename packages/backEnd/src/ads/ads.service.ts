import { getDb } from "../db/mongo";
import { Index } from "../enum";
import { InternalServerError, BadRequest } from "../httpError/ErrorHandler";
import { ObjectId } from "mongodb";
import { Categories } from "./util/Categories";
import { Upolader } from "./util/uploadFile";
import { buildMongoQuery } from "./util/buildMongoQuery";
import { Filter } from "./util/filterCategory";
import { IServiceCategory } from "./util/serviceModel";

export class CategoriesService implements IServiceCategory {
  private collection = getDb().collection(Index.Add);
  private categorie = getDb().collection<Categories>(Index.Add);
  private spaces: Upolader = new Upolader();
  private advanced: Filter = new Filter();

  async getCategoryById(id: string): Promise<Categories[] | null> {
    try {
      const categorie: Categories[] | null = await this.categorie
        .find({ _id: new ObjectId(id) })
        .toArray();

      return categorie;
    } catch (err: any) {
      throw new InternalServerError(err.message);
    }
  }

  async getAllCategories(): Promise<Categories[]> {
    const categories: Categories[] = await this.categorie.find().toArray();
    return categories;
  }

  async getAllCategoriesById(id: string) {
    try {
      const ads = await this.collection
        .find({ _id: new ObjectId(id) })
        .toArray();
      const total = await this.collection.countDocuments({});

      return { total, ...ads };
    } catch (err: any) {
      throw new InternalServerError(err.message);
    }
  }

  async createCategory(
    files: Express.Multer.File[],
    token: string,
    category: Categories
  ): Promise<void> {
    const uploadedFiles = await this.spaces.UploadFiles(files);
    try {
      await this.collection.insertOne({
        author: token,
        productImages: uploadedFiles,
        ...category,
      });
    } catch (err) {
      throw new BadRequest("Bad Request");
    }
  }

  async updateCategory(id: string, categories: Categories): Promise<void> {
    try {
      const mongoQuery = buildMongoQuery(categories);
      await this.collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: mongoQuery }
      );
    } catch (err: any) {
      throw new InternalServerError(err.message);
    }
  }

  async filterCategories(categories: Categories): Promise<{
    dataLength: any;
    data: Categories[];
  }> {
    const { page } = categories;
    const mongoQuery = buildMongoQuery(categories);

    try {
      const pageNumber: number = parseInt(page);
      const nPerPage: number = 10;

      const props: any = {
        pageNumber,
        nPerPage,
        filterQuery: mongoQuery,
      };
      const { filterResult, dataLength } =
        await this.advanced.categoryFiltration(props);

      return {
        dataLength: dataLength.length,
        data: filterResult,
      };
    } catch (err: any) {
      throw new InternalServerError(err.message);
    }
  }

  async deleteCategory(id: string): Promise<void> {
    await this.collection.deleteOne({ _id: new ObjectId(id) });
  }
}
