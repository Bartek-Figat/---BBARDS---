import React from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: JSX.Element[] | JSX.Element;
};

export const PrimaryLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="bg-dark-blue hover:bg-dark-blue-hover ease-in duration-300 text-white px-6 py-4 w-fit rounded-md uppercase font-medium flex justify-center items-center gap-2"
    >
      {children}
    </Link>
  );
};
