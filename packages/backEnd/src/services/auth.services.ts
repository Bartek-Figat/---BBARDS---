import { config } from "dotenv";
import { ObjectId } from "mongodb";
import { validate } from "class-validator";
import { hash, compare } from "bcrypt";
import sgMail from "@sendgrid/mail";
import { Repository } from "../repositories/user.repositories";
import { sign } from "jsonwebtoken";
import { StatusCode, ErrorMessage } from "../enum";
import {
  RegisterDto,
  LoginDto,
  LogoutDto,
  ICredentials,
  IAuthToken,
} from "../dto/auth.dto";
import { BaseHttpResponse } from "../httpError/baseHttpResponse";

config({ path: "../../.env" });
const { secret, sendgridApi } = process.env;

sgMail.setApiKey(sendgridApi);

export class AuthService {
  constructor(private repository: Repository = new Repository()) {}

  async emailConfirmation({ email, authToken }: ICredentials): Promise<void> {
    const msg = {
      to: `${email}`,
      from: "team.bbards@gmail.com",
      subject: "Thank you for registering.",
      text: "Team bbards",
      html: `Hello.
      Thank you for registering. Please click the link to complete yor activation
      <a href='http://localhost:3000/activate/${authToken}'>Activation Link</a>`,
    };

    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  }

  async updateAccountAfterEmailConfirmation({
    authToken,
  }: {
    authToken: string;
  }): Promise<void> {
    const { email } = await this.repository.findOne(
      { authToken },
      { email: 1, _id: 0 }
    );
    await this.repository.updateOne(
      { email },
      {
        $set: {
          authToken: null,
          isVerified: true,
        },
      },
      {}
    );
    const msg = {
      to: `${email}`,
      from: "team.bbards@gmail.com",
      subject: "Thank you for registering.",
      text: "Team bbards",
      html: `Your account has benne successfully activated`,
    };

    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  }

  async userRegister({ email, password, name }: RegisterDto) {
    let credentialValidation = new RegisterDto();
    credentialValidation.email = email;
    credentialValidation.password = password;
    credentialValidation.name = name;

    const errors = await validate(credentialValidation);
    if (errors.length > 0)
      return BaseHttpResponse.failedResponse(errors, StatusCode.BAD_REQUEST);

    try {
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
        authToken: sign({ data: email }, secret),
        isVerified: false,
        dateAdded: new Date(),
        lastLoggedIn: null,
        logOutDate: null,
      };

      await this.repository.insertOne({
        ...credentials,
        password: await hash(password, 10),
      });
      await this.emailConfirmation({
        email,
        authToken: credentials.authToken,
      });
      return BaseHttpResponse.sucessResponse(
        "User registered successfully",
        200,
        {}
      );
    } catch (err) {
      return BaseHttpResponse.failedResponse(
        err,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async emailConfiramtion({ token }: IAuthToken) {
    const { authToken } = await this.repository.findOne(
      { authToken: token },
      { authToken: 1, _id: 0 }
    );

    try {
      if (!authToken)
        return BaseHttpResponse.failedResponse(
          { error: StatusCode.BAD_REQUEST },
          StatusCode.BAD_REQUEST
        );

      await this.updateAccountAfterEmailConfirmation({
        authToken,
      });
      return BaseHttpResponse.sucessResponse({}, StatusCode.SUCCESS, {});
    } catch (error) {
      return BaseHttpResponse.failedResponse(
        error.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async userLogin({ email, password }: LoginDto, req) {
    try {
      let credentialValidation = new LoginDto();
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

  async userLogout({ token, authHeader }: LogoutDto) {
    try {
      await this.repository.updateOne(
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
