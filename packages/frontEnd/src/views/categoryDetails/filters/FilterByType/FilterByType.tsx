import React from "react";
import { FilterHeader } from "../FilterHeader";
import { FilterItem } from "../FilterItem";
import { FilterByTypeForm } from "./FilterByTypeForm";

export const FilterByType = () => {
  return (
    <FilterItem>
      <FilterHeader title="Filter by type" />
      <FilterByTypeForm />
    </FilterItem>
  );
};
