import { config } from "dotenv";
import sgMail from "@sendgrid/mail";
import { ObjectId } from "mongodb";
import { validate } from "class-validator";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Index } from "../enum/index";
import { getDb } from "../db/mongo";
import { HttpResponse } from "../httpError/httpError";
import { LoginDto, RegisterDto } from "./auth.dto";
import { LogoutDto } from "../user/dto/user";
import { BadRequest, NotFound } from "../httpError/ErrorHandler";
import { SendEmail } from "./util/email";
config({ path: "../../.env" });
const { secret, sendgridApi } = process.env;

sgMail.setApiKey(`${sendgridApi}`);

export class AuthService {
  private collection = getDb().collection(Index.Users);
  private email: SendEmail = new SendEmail();

  async emailConfiramtion({ token }: { token: string }) {
    const authToken = await this.collection.findOne(
      { authToken: token },
      {
        projection: {
          authToken: 1,
          _id: 0,
        },
      }
    );

    if (!authToken) return HttpResponse.failed("Not modified", 400);

    const email = await this.collection.findOne({
      authToken: authToken.authToken,
    });

    if (!email) return HttpResponse.failed("Not modified", 400);
    await this.collection.updateOne(
      { email: email.email },
      {
        $set: {
          authToken: null,
          isVerified: true,
        },
      }
    );

    const msg = {
      to: `${email.email}`,
      from: "team.bbards@gmail.com",
      subject: "Thank you for registering.",
      text: "Team bbards",
      html: `Your account has benne successfully activated`,
    };
    sgMail
      .send(msg)
      .then(() => {
        return HttpResponse.sucess({}, 200, {});
      })
      .catch(() => HttpResponse.failed("User email found", 400));
  }

  async userRegister({ email, password, name }: RegisterDto) {
    try {
      let credentialValidation = new RegisterDto();
      credentialValidation.email = email;
      credentialValidation.password = password;
      credentialValidation.name = name;
      const errors = await validate(credentialValidation);

      if (errors.length > 0) return HttpResponse.failed(errors, 400);
      const useEmail = await this.collection.findOne({ email });
      console.log(useEmail);

      if (useEmail) throw new NotFound("Not Found");

      const credentials = {
        email,
        name,
        authToken: sign({ data: email }, `${secret}`),
        isVerified: false,
        dateAdded: new Date(),
        lastLoggedIn: null,
        logOutDate: null,
        password: await hash(password, 10),
        isLogin: false,
      };

      await this.collection.insertOne({
        ...credentials,
      });
      await this.email.confiramtion(email, credentials.authToken);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  async userLogin({ email, password }: LoginDto) {
    let credentialValidation = new LoginDto();
    credentialValidation.email = email;
    credentialValidation.password = password;
    const errors = await validate(credentialValidation);

    if (errors.length > 0) throw new NotFound();

    const user: any = await this.collection.findOne(
      { email },
      {
        projection: {
          email: 1,
          password: 1,
        },
      }
    );
    const match: boolean =
      user && (await compare(`${password}`, user.password));

    if (!match) throw new BadRequest();

    const token: string = sign({ token: user._id }, "secret");

    await this.collection.updateOne(
      { email: user.email },
      {
        $addToSet: { authorizationToken: { $each: [`${token}`] } },
        $set: { isLogin: true, lastLoggedIn: new Date() },
      },
      {}
    );

    const isLogin: any = await this.collection.findOne(
      { email },
      { projection: { isLogin: 1 } }
    );
    console.log("isLogin", isLogin.isLogin);

    return HttpResponse.sucess({ token, isLogin: isLogin.isLogin }, 200, {});
  }
  async userLogout(dto: LogoutDto): Promise<void> {
    const {
      decoded: { token },
      authHeader,
    } = dto;

    await this.collection.updateOne(
      { _id: new ObjectId(token) },
      {
        $pull: { authorizationToken: { $in: [authHeader] } },
        $set: { isLogin: false, logOutDate: new Date() },
      },
      {}
    );
  }
}
