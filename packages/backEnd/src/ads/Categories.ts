export interface Categories {
  [key: string]: any;
  page: string;
  productCategory: string;
  price: {
    maxPrice: number;
    minPrice: number;
  };
  date: {
    startDate: Date;
    endDate: Date;
  };
  priceCondition: string;
  adCategory: string;
  productCondition: string;
  city: string;
  rate: string;
}
