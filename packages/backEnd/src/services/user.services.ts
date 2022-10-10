import { config } from "dotenv";
import { ObjectId } from "mongodb";
import { validate } from "class-validator";
import { Repository } from "../repositories/user.repositories";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { StatusCode, ErrorMessage } from "../enum";
import { uploadFile } from "../tools/image";
import { UserDto, UserProfileDto, TokenDto, LogoutDto } from "../dto/user.dto";
import { BaseHttpResponse } from "../httpError/baseHttpResponse";

config({ path: "../../.env" });
const { secret } = process.env;

const saltRounds: number = 10;

export class UserService {
  constructor(private repository: Repository = new Repository()) {}

  async userRegister(credentials: UserDto) {
    const { email, password, name } = credentials;

    let credentialValidation = new UserDto();
    credentialValidation.email = email;
    credentialValidation.password = password;
    credentialValidation.name = name;

    try {
      const errors = await validate(credentialValidation);
      if (errors.length > 0)
        return BaseHttpResponse.failedResponse(errors, StatusCode.BAD_REQUEST);

      const userEmail = await this.repository.findOne(
        { email },
        { email: 1, _id: 0 }
      );
      if (userEmail)
        return BaseHttpResponse.failedResponse(
          "User email found",
          StatusCode.BAD_REQUEST
        );

      const credentials = {
        email,
        name,
      };

      await this.repository.insertOne({
        ...credentials,
        password: await hash(password, saltRounds),
      });
      return BaseHttpResponse.sucessResponse(
        "User registered successfully",
        200,
        {}
      );
    } catch (err) {
      return BaseHttpResponse.failedResponse(
        err.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async userLogin(credentials: UserDto) {
    try {
      const { email, password }: UserDto = credentials;

      let credentialValidation = new UserDto();

      credentialValidation.email = email;
      credentialValidation.password = password;

      const errors = await validate(credentialValidation);
      if (errors.length > 0)
        return BaseHttpResponse.failedResponse(errors, StatusCode.BAD_REQUEST);
      const user = await this.repository.findOne(
        { email },
        { email: 1, password: 1, isVerified: 1, authToken: 1, _id: 1 }
      );

      const match = user && (await compare(password, user.password));
      if (!match)
        return BaseHttpResponse.failedResponse(
          ErrorMessage.WRONG,
          StatusCode.BAD_REQUEST
        );

      const token: string = sign({ token: user._id.toString() }, `${secret}`);

      await this.repository.updateOne(
        { email: user.email },
        {
          $addToSet: { authorizationToken: { $each: [`${token}`] } },
        },
        {}
      );
      return BaseHttpResponse.sucessResponse(token, 200, {});
    } catch (err) {
      return BaseHttpResponse.failedResponse(
        err.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getUserData(verificationToken: TokenDto) {
    const { token } = verificationToken;

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

  async userLogout(logout: LogoutDto) {
    const { token, authHeader } = logout;

    try {
      const v = await this.repository.updateOne(
        { _id: new ObjectId(token.token) },
        {
          $pull: { authorizationToken: authHeader },
        },
        {}
      );
      return BaseHttpResponse.sucessResponse(
        "You have been logged out successfully",
        200,
        {}
      );
    } catch (err) {
      return BaseHttpResponse.failedResponse(
        err.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getUserProfile(verificationToken: TokenDto) {
    const { token } = verificationToken;

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
