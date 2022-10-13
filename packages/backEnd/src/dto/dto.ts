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
} from "class-validator";
import Stripe from "stripe";
import { PricingPlan } from "../enum";
import { IUserProfile, IUserAddress, IFile, IStripePayment } from "../interface";

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

export class StripePayment implements IStripePayment{
  mode: Stripe.Checkout.SessionCreateParams.Mode;
  pricingPlan: PricingPlan;
}
