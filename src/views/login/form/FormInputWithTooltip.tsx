import React from "react";

interface Props {
  placeholder: string;
  tooltip: string;
}

function FormInputWithTooltip({ placeholder, tooltip }: Props) {
  return (
    <label>
      <input
        className="mt-5 w-full border-b-[2px] border-gray-mercury focus:border-dark-blue focus:outline-none py-2.5 pl-5 peer"
        type="text"
        placeholder={placeholder}
      />
      <p className="text-sm pl-4 mt-1 hidden peer-focus:block">{tooltip}</p>
    </label>
  );
}

export default FormInputWithTooltip;
