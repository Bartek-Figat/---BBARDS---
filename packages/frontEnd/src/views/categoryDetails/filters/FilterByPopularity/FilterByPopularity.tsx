import React from "react";
import { FilterHeader } from "../FilterHeader";
import { FilterItem } from "../FilterItem";
import { FilterByPopularityForm } from "./FilterByPopularityForm";

export const FilterByPopularity = () => {
  return (
    <FilterItem>
      <FilterHeader title="Filter by popularity" />
      <FilterByPopularityForm />
    </FilterItem>
  );
};
