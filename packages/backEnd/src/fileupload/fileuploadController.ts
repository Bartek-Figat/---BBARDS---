import { Post, Route, UploadedFile } from "tsoa";

@Route("files")
export class FilesController {
  @Post("uploadFile")
  public async uploadFile(@UploadedFile("avatar") file: Express.Multer.File) {
    console.log(file.fieldname);
    console.log(file.originalname);
    console.log(file.mimetype);
  }
}
