import { Repository } from "../repositories/user.repositories";
import { LogoutDto, UserDto } from "../dto/dto";
import { validate } from "class-validator";
import { BaseHttpResponse } from "../httpError/baseHttpResponse";
import { ErrorMessage, StatusCode } from "../enum";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { appConfig } from "../config";

class AuthService {
  constructor(private repository: Repository = new Repository()) {}

  async userLogin({ email, password }: UserDto, req) {
    try {
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

      if (!match || user.isVerified === false || user.authToken !== null)
        return BaseHttpResponse.failedResponse(
          ErrorMessage.WRONG,
          StatusCode.BAD_REQUEST
        );

      req.session.user = sign({ token: user._id }, `${appConfig.secret}`);

      return BaseHttpResponse.sucessResponse({}, 200, {});
    } catch (err) {
      return BaseHttpResponse.failedResponse(
        err.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async userLogout({ token, authHeader }: LogoutDto) {
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
}

export const authService = new AuthService();
