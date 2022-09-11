import React from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: JSX.Element[] | JSX.Element;
};

export const SecondaryLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="bg-white border-2 border-dark-blue hover:bg-dark-blue hover:text-white px-6 py-3 rounded-md uppercase text-dark-blue font-medium flex justify-center items-center gap-2 duration-300"
    >
      {children}
    </Link>
  );
};
