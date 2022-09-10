import React from "react";

interface Props {
  children: React.ReactNode;
}

function FormSubmit({ children }: Props) {
  return (
    <button
      className="w-full bg-dark-blue text-white mt-5 py-2 font-medium uppercase rounded-lg flex justify-center items-center"
      type="submit"
    >
      {children}
    </button>
  );
}

export default FormSubmit;
