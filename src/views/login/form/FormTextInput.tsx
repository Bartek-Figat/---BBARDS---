import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  placeholder: string;
  register: UseFormRegister<any>;
  options: object;
}

function FormTextInput({ id, placeholder, register, options }: Props) {
  return (
    <input
      className="mt-5 w-full border-b-[2px] border-gray-mercury focus:border-dark-blue focus:outline-none py-2.5 pl-5"
      type="text"
      placeholder={placeholder}
      {...register(id, options)}
    />
  );
}

export default FormTextInput;
