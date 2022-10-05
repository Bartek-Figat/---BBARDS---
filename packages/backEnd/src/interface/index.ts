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
