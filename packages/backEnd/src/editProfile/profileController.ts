import { Controller, Route, Post, Request, Middlewares } from "tsoa";
import express from "express";
import { EditProfile } from "./profileService";
import { upload } from "./multer";

@Route("api/v1")
export class ProfileController extends Controller {
  @Middlewares([upload.single("avatar")])
  @Post("profile")
  async userRegister(@Request() request: express.Request) {
    return await new EditProfile().profile(request);
  }
}
