import React from "react";
import { FilterHeader } from "./FilterHeader";
import { FilterItem } from "./FilterItem";
import { FilterByTypeForm } from "./FilterByType/FilterByTypeForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { SubmitInput } from "../../../components/buttons/Input/SubmitInput";
import { useSearchParams } from "react-router-dom";
import { FilterByRatingForm } from "./FilterByRating/FilterByRatingForm";
import { FilterByCitiesForm } from "./FilterByCities/FilterByCitiesForm";
import { FilterByCategoriesForm } from "./FilterByCategories/FilterByCategoriesForm";
import { FilterByPopularityForm } from "./FilterByPopularity/FilterByPopularityForm";
import { FilterByPriceForm } from "./FilterByPrice/FilterByPriceForm";

type StandardInputs = Record<string, string>;
type CheckboxInputs = {
  checkbox: string[];
};

type Inputs = StandardInputs & CheckboxInputs;
export const FilterList = () => {
  const filtersList = [
    { name: "Filter by price", inputs: FilterByPriceForm },
    {
      name: "Filter by type",
      inputs: FilterByTypeForm,
    },
    {
      name: "Filter by rating",
      inputs: FilterByRatingForm,
    },
    {
      name: "Filter by cities",
      inputs: FilterByCitiesForm,
    },
    {
      name: "Filter by popularity",
      inputs: FilterByPopularityForm,
    },
    {
      name: "Filter by category",
      inputs: FilterByCategoriesForm,
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const { handleSubmit, register } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const filteredTrueValues = Object.entries(data).filter(
      ([_, value]) => value
    );
    const convertToObject = Object.fromEntries(filteredTrueValues);
    setSearchParams(convertToObject);
  };

  return (
    <form
      className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 p-12 sm:p-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      {filtersList.map(({ name, inputs }, i) => {
        return (
          <FilterItem key={i}>
            <FilterHeader title={name} />
            {inputs(register)}
          </FilterItem>
        );
      })}
      <div className="mt-4">
        <SubmitInput variant="filled">Apply filters</SubmitInput>
      </div>
    </form>
  );
};
