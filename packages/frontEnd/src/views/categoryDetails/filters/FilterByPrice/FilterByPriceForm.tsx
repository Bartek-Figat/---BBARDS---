import React from "react";
import { SecondaryButton } from "components/buttons/SecondaryButton";
import { FaSearch } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { signUp } from "../../../../slice/register";
import { SubmitInput } from "components/buttons/Input/SubmitInput";

export const FilterByPriceForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = ({ min, max }) => {};

  interface IFormInput {
    min: string;
    max: string;
  }

  return (
    <>
      <form className="mt-4 mb-4 flex" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full form-input rounded border-transparent"
          type="text"
          placeholder="Min - 00"
          {...register("min")}
        />
        <input
          className="w-full form-input border-transparent rounded ml-2"
          type="text"
          placeholder="Max - 1B"
          {...register("max")}
        />
      </form>
      <SubmitInput variant="outlined">
        <FaSearch /> Search
      </SubmitInput>
    </>
  );
};
