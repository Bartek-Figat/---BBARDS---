import { Categories } from "./Categories";

export function buildMongoQuery(query: Categories): Categories {
  const mongoQuery: any = {};

  if (query.page) {
    mongoQuery.page = query.page;
  }

  if (query.productCategory) {
    mongoQuery.productCategory = query.productCategory;
  }

  if (query.price) {
    mongoQuery.price = {
      $gte: query.price.minPrice,
      $lte: query.price.maxPrice,
    };
  }

  if (query.date) {
    mongoQuery.date = {
      $gte: query.date.startDate,
      $lte: query.date.endDate,
    };
  }

  if (query.priceCondition) {
    mongoQuery.priceCondition = query.priceCondition;
  }

  if (query.adCategory) {
    mongoQuery.adCategory = query.adCategory;
  }

  if (query.productCondition) {
    mongoQuery.productCondition = query.productCondition;
  }

  if (query.city) {
    mongoQuery.city = query.city;
  }

  if (query.rate) {
    mongoQuery.rate = query.rate;
  }

  return mongoQuery;
}

// type SearchFilter = {
//     $and: any[];
//   };

//   const filter: SearchFilter = {
//     $and: [],
//   };

//   Object.keys(query).forEach((key) => {
//     const value = query[key];
//     if (value) {
//       if (key === "price") {
//         const { maxPrice, minPrice } = value;
//         filter.$and.push({
//           "price.maxPrice": maxPrice,
//           "price.minPrice": minPrice,
//         });
//       } else if (key === "date") {
//         const { startDate, endDate } = value;
//         filter.$and.push({
//           "date.startDate": startDate,
//           "date.endDate": endDate,
//         });
//       } else {
//         filter.$and.push({ [key]: value });
//       }
//     }
//   });

//   console.log(filter);

// export function buildMongoQuery({
//     page,
//     productCategory,
//     price,
//     date,
//     priceCondition,
//     adCategory,
//     productCondition,
//     city,
//     rate,
//   }: Categories): any {
//     const mongoQuery: any = {
//       page,
//       productCategory,
//       price: price && {
//         $gte: price.minPrice,
//         $lte: price.maxPrice,
//       },
//       date: date && {
//         $gte: date.startDate,
//         $lte: date.endDate,
//       },
//       priceCondition,
//       adCategory,
//       productCondition,
//       city,
//       rate,
//     };

//     return mongoQuery;
//   }
