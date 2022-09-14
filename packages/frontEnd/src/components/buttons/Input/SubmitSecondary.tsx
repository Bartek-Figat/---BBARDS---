import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const SubmitSecondary: React.FC<Props> = ({ children }) => {
  return (
    <button
      type="submit"
      className="w-full bg-white border-2 border-dark-blue hover:bg-dark-blue hover:text-white px-6 py-3 rounded-md uppercase text-dark-blue font-medium flex justify-center items-center gap-2 duration-300"
    >
      {children}
    </button>
  );
};
