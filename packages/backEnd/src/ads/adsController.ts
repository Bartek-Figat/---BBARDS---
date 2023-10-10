import {
  Controller,
  Get,
  Middlewares,
  Path,
  Post,
  Request,
  Route,
  Tags,
  Put,
  Delete,
  SuccessResponse,
} from "tsoa";
import { CategoriesService } from "./ads.service";
import { upload } from "../multer";
import { Categories } from "./util/Categories";
import { Upolader } from "./util/uploadFile";

@Route("api/v1")
@Tags("Categories")
export class CategoriesController extends Controller {
  private files: Upolader = new Upolader();
  @Get()
  public async getAllCategories(): Promise<Categories[]> {
    return await new CategoriesService().getAllCategories();
  }
  @SuccessResponse(200)
  @Get("{id}")
  async getAd(@Path() id: string) {
    return await new CategoriesService().getCategoryById(id);
  }

  @SuccessResponse(200)
  @Get("filter")
  async getFilteredAds(@Request() request: any) {
    return await new CategoriesService().filterCategories(request.query);
  }

  @Middlewares([upload.array("files")])
  @SuccessResponse(201)
  @Post("create-category")
  async putAd(@Request() request: any) {
    return await new CategoriesService().createCategory(
      this.files.ImagesFromRequset(request.files),
      request.token,
      request.body
    );
  }

  @SuccessResponse(200)
  @Put("{id}")
  async updateCategory(
    @Path() id: any,
    @Request() request: any
  ): Promise<void> {
    await new CategoriesService().updateCategory(id, request.body);
  }

  @SuccessResponse(200)
  @Delete("{id}")
  async deleteCategory(@Path() id: any): Promise<void> {
    await new CategoriesService().deleteCategory(id);
  }
}
