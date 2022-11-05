import { validate } from "class-validator";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Index } from "../enum/index";
import { db } from "../db/mongo";
import { HttpResponse } from "../httpError/httpError";
import { LoginDto, RegisterDto } from "./auth.dto";

export class AuthService {
  async emailConfirmation() {}
  async updateAccountAfterEmailConfirmation() {}
  async userRegister({ email, password, name }: RegisterDto) {
    let credentialValidation = new RegisterDto();
    credentialValidation.email = email;
    credentialValidation.password = password;
    credentialValidation.name = name;

    const errors = await validate(credentialValidation);
    if (errors.length > 0) return HttpResponse.failed(errors, 400);

    const useEmail = await db.collection(Index.Users).findOne({ email });

    if (useEmail) return HttpResponse.failed("User email found", 400);

    const credentials = {
      email,
      name,
      authToken: sign({ data: email }, "secret"),
      isVerified: false,
      dateAdded: new Date(),
      lastLoggedIn: null,
      logOutDate: null,
      password: await hash(password, 10),
    };

    await db.collection(Index.Users).insertOne({
      ...credentials,
    });

    return HttpResponse.sucess({}, 201, {});
  }

  async userLogin({ email, password }: LoginDto) {
    let credentialValidation = new LoginDto();
    credentialValidation.email = email;
    credentialValidation.password = password;
    const errors = await validate(credentialValidation);
    if (errors.length > 0) return HttpResponse.failed(errors, 400);

    const user: any = await db.collection(Index.Users).findOne(
      { email },
      {
        projection: {
          email: 1,
          password: 1,
        },
      }
    );
    const match = user && (await compare(`${password}`, user.password));

    if (!match) return HttpResponse.failed("Bad Request", 400);

    const token: string = sign({ token: user._id }, "secret");

    await db.collection(Index.Users).updateOne(
      { email: user.email },
      {
        $addToSet: { authorizationToken: { $each: [`${token}`] } },
      },
      {}
    );
    return HttpResponse.sucess(token, 200, {});
  }
  async userLogout() {}
}
