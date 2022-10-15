import { Request } from "express";
import { NumBatchResults } from "aws-sdk/clients/personalize";
import {
  IsNotEmpty,
  IsEmail,
  Min,
  IsUrl,
  IsAlphanumeric,
  IsDateString,
  IsNumberString,
  IsAlpha,
  IsPostalCode,
  IsOptional,
  Max,
  IsString,
  IsNumber,
} from "class-validator";
import { IUserProfile, IUserAddress, IFile, MulterRequest } from "../interface";

export class UserDto {
  @Min(3)
  @Max(255)
  @IsNotEmpty()
  password: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;
}

export class TokenDto {
  @IsString()
  token: {
    token: string;
  };
}
export class LogoutDto extends TokenDto {
  @IsString()
  authHeader: string;
}

export class ICategories {
  @IsString()
  page?: string;
  @IsString()
  productCategory: string;
  @IsString()
  price: string;
  @IsString()
  priceCondition: string;
  @IsString()
  adCategory: string;
  @IsString()
  productCondition: string;
  @IsString()
  city: string;
  @IsString()
  rate: string;
}

export class IAdvertising {
  @IsString()
  productTitle?: string;
  @IsString()
  productImages?: Array<string>;
  @IsString()
  productCategory?: string;
  @IsString()
  price?: string;
  @IsString()
  priceCondition?: string;
  @IsString()
  adCategory?: string;
  @IsString()
  productCondition?: string;
  @IsString()
  addDescription?: string;
  @IsString()
  city?: string;
  @IsNumber()
  oneStar: number;
  @IsNumber()
  twoStar: number;
  @IsNumber()
  threeStar: number;
  @IsNumber()
  fourStar: number;
  @IsNumber()
  fiveStar: number;
  @IsNumber()
  click?: number;
  @IsNumber()
  views?: number;
  @IsNumber()
  average: number;
}

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
