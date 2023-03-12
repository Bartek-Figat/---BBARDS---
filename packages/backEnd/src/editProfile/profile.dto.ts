import { IsNotEmpty, IsDate } from "class-validator";

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
  //Website
  @IsNotEmpty()
  website: string | undefined;
  //Phone
  @IsNotEmpty()
  phone: string | undefined;
  @IsNotEmpty()
  imageProfile: string | undefined;
  @IsDate()
  dateAdded: string | undefined;
  @IsNotEmpty()
  user_id: string | undefined;
}
