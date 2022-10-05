import { IsNotEmpty, IsEmail, Min } from "class-validator";

export class UserDto {
  @Min(3)
  @IsNotEmpty()
  password: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;
}
