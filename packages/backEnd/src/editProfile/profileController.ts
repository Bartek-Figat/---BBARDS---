import {
  Controller,
  Route,
  Post,
  Request,
  Middlewares,
  Security,
  Example,
} from "tsoa";
import express from "express";
import { EditProfile } from "./profileService";
import { upload } from "./multer";
import { EditProfileDto } from "./profile.dto";

@Security("jwt")
@Route("api/v1")
export class ProfileController extends Controller {
  @Middlewares([upload.single("avatar")])
  @Example<EditProfileDto>(
    {
      firstName: "Marquez",
      lastName: "Bruce",
      company: "SATIANCE",
      address: "778 Vandam Street, Bentonville, California, 3694",
      city: "Bentonville",
      state: "CA",
      postCode: "3694",
      website: "marquezbruce.com",
      phone: "(929) 455-3703",
      imageProfile: "google.com",
      dateAdded: "3/11/2023",
      user_id: "token",
    },
    "Data Response"
  )
  @Post("profile")
  async userRegister(@Request() request: express.Request) {
    return await new EditProfile().profile(request);
  }
}
