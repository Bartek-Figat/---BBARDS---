import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FilterList } from "./FilterList";
import { SubmitInput } from "components/buttons/Input/SubmitInput";
import { FC } from "react";

interface Props {
  submit: (data: FieldValues) => void;
}

export const FiltersForm: FC<Props> = ({ submit }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <FilterList />
        <SubmitInput variant="filled">Apply filter</SubmitInput>
      </form>
    </FormProvider>
  );
};
