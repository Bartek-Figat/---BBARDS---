export interface IAdds {
  page?: string;
  productCategory: string;
  price: string;
  priceCondition: string;
  adCategory: string;
  productCondition: string;
  city: string;
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

export interface IUser extends IUserAddress, IUserProfile  {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

interface IUserProfile{
  company: string;
  firstName: string;
  lastName: string;
  website: string;
  phone: string;
  birthDay: Date;
  imageLink: string;
  image: IFile;
}

interface IUserAddress{
  address: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
}

interface IFile{
  originalName: string,
  data: string
}