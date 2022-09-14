import React from "react";
import { FilterByPriceForm } from "./FilterByPriceForm";
import { FilterHeader } from "../FilterHeader";
import { FilterItem } from "../FilterItem";

export const FilterByPrice = () => {
  return (
    <FilterItem>
      <FilterHeader title="Filter by price" />
      <FilterByPriceForm />
    </FilterItem>
  );
};
