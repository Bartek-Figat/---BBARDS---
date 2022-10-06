import { IsNotEmpty, IsEmail, Min, IsUrl, IsAlphanumeric, IsDateString, IsNumberString, IsAlpha, IsPostalCode, IsOptional } from "class-validator";
import { IUserProfile, IUserAddress, IFile } from "../interface";

export class UserDto {
  @Min(3)
  @IsNotEmpty()
  password: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;
}

export class UserProfileDto implements IUserProfile, IUserAddress{
  @IsAlpha()
  company: string;
  @IsAlpha()
  @IsNotEmpty()
  firstName: string;
  @IsAlpha()
  @IsNotEmpty()
  lastName: string;
  @IsOptional()
  @IsUrl()
  website: string;
  @IsNumberString()
  phone: string;
  @IsDateString()
  birthDay: Date;
  @IsOptional()
  @IsUrl()
  imageLink: string;
  image: IFile;
  @IsAlphanumeric()
  address: string;
  @IsAlpha()
  city: string;
  @IsAlpha()
  state: string;
  @IsPostalCode('any')
  postCode: string;
  @IsAlpha()
  country: string;
}