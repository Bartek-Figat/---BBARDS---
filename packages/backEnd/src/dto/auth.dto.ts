import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {
  @IsNotEmpty()
  password: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;
}

export class LoginDto {
  @IsNotEmpty()
  password: string;
  @IsEmail()
  email: string;
}

export class TokenDto {
  @IsString()
  token: {
    token: string;
  };
}

export class IAuthToken {
  @IsString()
  token: string;
}
export class LogoutDto extends TokenDto {
  @IsString()
  authHeader: string;
}

export class ICredentials {
  email: string;
  authToken: string;
}
