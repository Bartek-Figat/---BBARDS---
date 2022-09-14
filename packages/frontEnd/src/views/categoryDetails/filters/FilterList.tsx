import React from "react";
import { FilterByPrice } from "./FilterByPrice/FilterByPrice";
import { FilterByType } from "./FilterByType/FilterByType";

export const FilterList = () => {
  return (
    <>
      <FilterByPrice />
      <FilterByType />
    </>
  );
};
