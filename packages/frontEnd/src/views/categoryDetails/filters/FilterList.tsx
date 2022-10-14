import React from "react";
import { FilterByPrice } from "./FilterByPrice/FilterByPrice";
import { FilterByType } from "./FilterByType/FilterByType";
import { FilterByRating } from "./FilterByRating/FilterByRating";
import { FilterByCities } from "./FilterByCities/FilterByCities";
import { FilterByPopularity } from "./FilterByPopularity/FilterByPopularity";
import { FilterByCategories } from "./FilterByCategories/FilterByCategories";

export const FilterList = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 p-12 sm:p-0">
      <FilterByPrice />
      <FilterByType />
      <FilterByRating />
      <FilterByCities />
      <FilterByPopularity />
      <FilterByCategories />
    </div>
  );
};
