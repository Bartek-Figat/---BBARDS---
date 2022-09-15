import React from "react";
import { FilterByPrice } from "./FilterByPrice/FilterByPrice";
import { FilterByType } from "./FilterByType/FilterByType";
import { FilterByRating } from "./FilterByRating/FilterByRating";
import { FilterByCities } from "./FilterByCities/FilterByCities";
import { FilterByPopularity } from "./FilterByPopularity/FilterByPopularity";
import { FilterByCategories } from "./FilterByCategories/FilterByCategories";

export const FilterList = () => {
  return (
    <>
      <FilterByPrice />
      <FilterByType />
      <FilterByRating />
      <FilterByCities />
      <FilterByPopularity />
      <FilterByCategories />
    </>
  );
};
