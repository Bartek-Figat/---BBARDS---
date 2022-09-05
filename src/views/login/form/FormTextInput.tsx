import React from "react";

interface Props {
  placeholder: string;
}

function FormTextInput({ placeholder }: Props) {
  return (
    <input
      className="mt-5 w-full border-b-[2px] border-gray-mercury focus:border-dark-blue focus:outline-none py-2.5 pl-5"
      type="text"
      placeholder={placeholder}
    />
  );
}

export default FormTextInput;
