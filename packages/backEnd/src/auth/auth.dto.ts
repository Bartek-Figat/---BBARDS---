import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDto {
  @IsNotEmpty()
  password!: string;
  @IsEmail()
  email: string | undefined;
  @IsNotEmpty()
  name: string | undefined;
}

export interface RegisterProps {
  password: string;
  email: string | undefined;
  name: string | undefined;
}

export class LoginDto {
  @IsNotEmpty()
  /**
   * Unique password
   */
  password: string | undefined;
  @IsEmail()
  /**
   * Valid Email
   */
  email: string | undefined;
}

export interface User {
  userPassword: string | undefined;
  isVerified: boolean | undefined;
  authToken: string | undefined;
  _id: string | undefined;
}
