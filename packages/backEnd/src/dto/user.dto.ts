import {
  IsAlpha,
  IsAlphanumeric,
  IsDateString,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsPostalCode,
  IsUrl,
} from "class-validator";
import { IFile, IUserAddress, IUserProfile } from "../interface";

export class UserProfileDto implements IUserProfile, IUserAddress {
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
  @IsPostalCode("any")
  postCode: string;
  @IsAlpha()
  country: string;
}
