import React from "react";
import { FilterHeader } from "../FilterHeader";
import { FilterItem } from "../FilterItem";
import { FilterByCitiesForm } from "./FilterByCitiesForm";

export const FilterByCities = () => {
  return (
    <FilterItem>
      <FilterHeader title="Filter by cities" />
      <FilterByCitiesForm />
    </FilterItem>
  );
};
