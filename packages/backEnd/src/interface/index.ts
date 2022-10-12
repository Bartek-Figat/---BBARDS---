import { Request } from "express";

export interface IAdds {
  page?: string;
  productCategory: string;
  price: string;
  priceCondition: string;
  adCategory: string;
  productCondition: string;
  city: string;
  rate: string;
}

export interface IFiles {
  files: any;
}

export interface IPagination extends IAdds {
  parsePage: number;
  pageSize: number;
}

interface ReqParams {
  /* Add something as needed */
}
interface ReqBody {
  /* Add something as needed */
}
interface Resbody {
  /* Add something as needed */
}
interface ReqQuery {
  foo: string;
  bar: string;
  something?: string;
}

export interface MulterRequest extends Request {
  files: any;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IUserProfile {
  company: string;
  firstName: string;
  lastName: string;
  website: string;
  phone: string;
  birthDay: Date;
  imageLink: string;
  image: IFile;
}

export interface IUserAddress {
  address: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
}

export interface IFile {
  originalName: string;
  data: string;
}
