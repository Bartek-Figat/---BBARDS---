import { config } from "dotenv";
import { Binary, ObjectId } from "mongodb";
import { Request, Response, NextFunction } from "express";
import { Repository } from "../repositories/user.repositories";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { StatusCode, ErrorMessage } from "../enum";

config({ path: "../../.env" });
const { secret } = process.env;

type User = {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  website: string;
  phone: string;
  birthDay: Date;
  image: Binary
};

const saltRounds: number = 10;

export class UserService {
  constructor(private repository: Repository = new Repository()) {}

  async userRegister(req: Request, res: Response, next: NextFunction) {
    const { email, password, name }: User = req.body;

    const userEmail = await this.repository.findOne(
      { email },
      { email: 1, _id: 0 }
    );
    try {
      if (userEmail)
        return res.status(StatusCode.BAD_REQUEST).json({
          error: ErrorMessage.BEDREQ,
        });

      const credentials = {
        email,
        name,
      };

      await this.repository.insertOne({
        ...credentials,
        password: await hash(password, saltRounds),
      });
      return res
        .status(StatusCode.SUCCESS)
        .json({ message: "User registered successfully" });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async userLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password }: User = req.body;
    console.log(email, password);
    const user = await this.repository.findOne(
      { email },
      { email: 1, password: 1, isVerified: 1, authToken: 1, _id: 1 }
    );
    try {
      const match = user && (await compare(password, user.password));
      if (!match)
        return res
          .status(StatusCode.BAD_REQUEST)
          .json({ error: ErrorMessage.WRONG })
          .end();

      const token: string = sign({ token: user._id.toString() }, `${secret}`);
      console.log("token -> line 70", token);

      await this.repository.updateOne(
        { email: user.email },
        {
          $addToSet: { authorizationToken: { $each: [`${token}`] } },
        },
        {}
      );

      return res.status(200).json({ token });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async userData(req: Request, res: Response, next: NextFunction) {
    const { token } = req.user as {
      token: {
        token: string;
      };
    };

    try {
      const user = await this.repository.findOne(
        { _id: new ObjectId(token.token) },
        { email: 1, name: 1, lastLoggedIn: 1, logOutDate: 1, _id: 0 }
      );

      res.status(StatusCode.SUCCESS).json({ user });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async userLogout(req: Request, res: Response, next: NextFunction) {
    const { token, authHeader } = req.user as {
      token: {
        token: string;
      };
      authHeader: string;
    };
    console.log(authHeader);
    try {
      const v = await this.repository.updateOne(
        { _id: new ObjectId(token.token) },
        {
          $pull: { authorizationToken: authHeader },
        },
        {}
      );
      console.log("line 119", v);
      return res
        .status(200)
        .json({ message: "You have been logged out successfully" });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async userProfile(req: Request, res: Response){
    const { token } = req.user as {
      token: {
        token: string;
      };
    };

    try {
      const user = await this.repository.findOne(
        { _id: new ObjectId(token.token) },
        { firstName: 1, lastName: 1, company: 1, address: 1, city: 1,state: 1,
          postCode: 1, country: 1, website: 1, phone: 1, birthDay: 1, image: 1, _id: 0 }
      );

      res.status(StatusCode.SUCCESS).json({ user });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async userInsertProfile(req: Request, res: Response, next: NextFunction) {
    const { firstName, lastName, company, address, city, state, postCode,
    country, website, phone, birthDay, image }: User = req.body;

    const { token } = req.user as {
      token: {
        token: string;
      };
    };
    try{
    const user = await this.repository.findOne(
      { _id: new ObjectId(token.token) },
      { _id: 0 }
    );

      await this.repository.updateOne(
        { _id: new ObjectId(token.token) },
        { $set:
          { firstName: firstName,
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
          image: image }},
      {});
      return res
        .status(StatusCode.SUCCESS)
        .json({ message: "User profile updated." });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
