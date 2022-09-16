import React from "react";
import { FilterHeader } from "../FilterHeader";
import { FilterItem } from "../FilterItem";
import { FilterByCategoriesForm } from "./FilterByCategoriesForm";

export const FilterByCategories = () => {
  return (
    <FilterItem>
      <FilterHeader title="Filter by categories" />
      <FilterByCategoriesForm />
    </FilterItem>
  );
};
