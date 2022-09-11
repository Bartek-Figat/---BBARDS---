import { config } from "dotenv";
import { ObjectId } from "mongodb";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { Repository } from "../repositories/repositories";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { StatusCode, ErrorMessage } from "../enum";

type User = {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
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
        password,
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
}
