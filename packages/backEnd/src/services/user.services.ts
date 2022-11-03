import { config } from "dotenv";
import { ObjectId } from "mongodb";
import { validate } from "class-validator";
import { hash, compare } from "bcrypt";
import sgMail from "@sendgrid/mail";
import { Repository } from "../repositories/user.repositories";
import { sign, verify } from "jsonwebtoken";
import { StatusCode, ErrorMessage } from "../enum";
import { uploadFile } from "../tools/image";
import { UserProfileDto } from "../dto/user.dto";
import { TokenDto } from "../dto/auth.dto";
import { BaseHttpResponse } from "../httpError/baseHttpResponse";

config({ path: "../../.env" });
const { sendgridApi } = process.env;

sgMail.setApiKey(sendgridApi);

export class UserService {
  constructor(private repository: Repository = new Repository()) {}

  async getUserData({ token }: TokenDto) {
    try {
      const user = await this.repository.findOne(
        { _id: new ObjectId(token.token) },
        { email: 1, name: 1, lastLoggedIn: 1, logOutDate: 1, _id: 0 }
      );
      return BaseHttpResponse.sucessResponse(user, 200, {});
    } catch (err) {
      return BaseHttpResponse.failedResponse(
        err.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getUserProfile({ token }: TokenDto) {
    try {
      const user = await this.repository.findOne(
        { _id: new ObjectId(token.token) },
        {
          firstName: 1,
          lastName: 1,
          company: 1,
          address: 1,
          city: 1,
          state: 1,
          postCode: 1,
          country: 1,
          website: 1,
          phone: 1,
          birthDay: 1,
          imageLink: 1,
          _id: 0,
        }
      );
      return BaseHttpResponse.sucessResponse(user, 200, {});
    } catch (err) {
      return BaseHttpResponse.failedResponse(
        err.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async userInsertProfile(
    userProfile: UserProfileDto,
    verificationToken: TokenDto
  ) {
    const {
      firstName,
      lastName,
      company,
      address,
      city,
      state,
      postCode,
      country,
      website,
      phone,
      birthDay,
      image,
    } = userProfile;

    const { token } = verificationToken;
    let imageLink = null;
    if (image != null) {
      imageLink = await uploadFile(image);
    }

    let userProfileValidation = new UserProfileDto();

    userProfileValidation.firstName = firstName;
    userProfileValidation.lastName = lastName;
    userProfileValidation.company = company;
    userProfileValidation.address = address;
    userProfileValidation.city = city;
    userProfileValidation.state = state;
    userProfileValidation.postCode = postCode;
    userProfileValidation.country = country;
    userProfileValidation.website = website;
    userProfileValidation.phone = phone;
    userProfileValidation.birthDay = birthDay;
    userProfileValidation.image = image;
    userProfileValidation.imageLink = imageLink;

    const errors = await validate(userProfileValidation);
    if (errors.length > 0)
      return BaseHttpResponse.failedResponse(errors, StatusCode.BAD_REQUEST);

    try {
      await this.repository.updateOne(
        { _id: new ObjectId(token.token) },
        {
          $set: {
            firstName: firstName,
            lastName: lastName,
            company: company,
            address: address,
            city: city,
            state: state,
            postCode: postCode,
            country: country,
            website: website,
            phone: phone,
            birthDay: birthDay,
            imageLink: imageLink,
          },
        },
        {}
      );

      return BaseHttpResponse.sucessResponse(
        "User profile updated.",
        StatusCode.SUCCESS,
        {}
      );
    } catch (err) {
      return BaseHttpResponse.failedResponse(
        err.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }
}
