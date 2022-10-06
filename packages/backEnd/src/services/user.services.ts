import { config } from "dotenv";
import { ObjectId } from "mongodb";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { Repository } from "../repositories/user.repositories";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { StatusCode, ErrorMessage } from "../enum";
import { uploadFile } from "../tools/image"
import { UserDto, UserProfileDto } from "../dto/user.dto";

config({ path: "../../.env" });
const { secret } = process.env;

const saltRounds: number = 10;

export class UserService {
  constructor(private repository: Repository = new Repository()) {}

  async userRegister(req: Request, res: Response, next: NextFunction) {
    const { email, password, name }: UserDto = req.body;

    let credentialValidation = new UserDto();

    credentialValidation.email = email;
    credentialValidation.password = password;
    credentialValidation.name = name;

    const errors = await validate(credentialValidation);
    if (errors.length > 0)
      return res.status(StatusCode.BAD_REQUEST).json({
        errors,
      });

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
    try {
      const { email, password }: UserDto = req.body;

      let credentialValidation = new UserDto();

      credentialValidation.email = email;
      credentialValidation.password = password;

      const errors = await validate(credentialValidation);
      if (errors.length > 0)
        return res.status(StatusCode.BAD_REQUEST).json({
          errors,
        });
      const user = await this.repository.findOne(
        { email },
        { email: 1, password: 1, isVerified: 1, authToken: 1, _id: 1 }
      );

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
          postCode: 1, country: 1, website: 1, phone: 1, birthDay: 1, imageLink: 1, _id: 0 }
      );

      res.status(StatusCode.SUCCESS).json({ user });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async userInsertProfile(req: Request, res: Response, next: NextFunction) {
    const { firstName, lastName, company, address, city, state, postCode,
    country, website, phone, birthDay, image }: UserProfileDto = req.body.user;

    const { token } = req.user as {
      token: {
        token: string;
      };
    };
    let imageLink = null;
    if (image != null){
      imageLink = await uploadFile(image)
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
    userProfileValidation.birthDay = birthDay
    userProfileValidation.image = image;
    userProfileValidation.imageLink = imageLink;

    const errors = await validate(userProfileValidation);
    if (errors.length > 0)
      return res.status(StatusCode.BAD_REQUEST).json({
        errors,
      });

    try{
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
          imageLink: imageLink }},
      {});
      return res
        .status(StatusCode.SUCCESS)
        .json({ message: "User profile updated." });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
