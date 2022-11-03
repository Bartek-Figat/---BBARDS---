import { IsNumber, IsString } from "class-validator";

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
