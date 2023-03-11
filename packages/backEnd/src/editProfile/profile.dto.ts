import { IsNotEmpty } from "class-validator";

export class EditProfileDto {
  //First Name
  @IsNotEmpty()
  firstName: string | undefined;
  //Last Name
  @IsNotEmpty()
  lastName: string | undefined;
  //Company
  @IsNotEmpty()
  company: string | undefined;
  //Address
  @IsNotEmpty()
  address: string | undefined;
  //City
  @IsNotEmpty()
  city: string | undefined;
  //State
  @IsNotEmpty()
  state: string | undefined;
  //Post Code
  @IsNotEmpty()
  postCode: string | undefined;
  //Country
  @IsNotEmpty()
  coutry: string | undefined;
  //Website
  @IsNotEmpty()
  website: string | undefined;
  //Phone
  @IsNotEmpty()
  phone: string | undefined;
  //Birthday
  @IsNotEmpty()
  birthday: string | undefined;
}
