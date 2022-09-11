import React from "react";

interface Props {
  label: string | React.ReactNode;
}

function FormCheckboxInput({ label }: Props) {
  return (
    <div className="flex flex-row-reverse items-center">
      <label className="ml-2" htmlFor="remember">
        {label}
      </label>
      <input
        className="form-checkbox w-4 h-4 text-dark-blue rounded border-[#adb5bd]"
        type="checkbox"
        id="remember"
      />
    </div>
  );
}

export default FormCheckboxInput;
