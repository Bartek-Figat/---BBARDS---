import { Controller, Route, Post, Request, Middlewares, Security } from "tsoa";
import { EditProfile } from "./profileService";
import { upload } from "./multer";

/**
 * Update profile requires valid jwt.
 */
@Security("jwt")
@Route("api/v1")
export class ProfileController extends Controller {
  @Middlewares([upload.single("avatar")])
  @Post("profile")
  async userRegister(@Request() request: any) {
    return await new EditProfile().profile(request);
  }
}
