import React from "react";
import { FilterHeader } from "../FilterHeader";
import { FilterItem } from "../FilterItem";
import { FilterByRatingForm } from "./FilterByRatingForm";

export const FilterByRating = () => {
  return (
    <FilterItem>
      <FilterHeader title="Filter by rating" />
      <FilterByRatingForm />
    </FilterItem>
  );
};
