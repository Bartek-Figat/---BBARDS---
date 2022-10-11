import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  variant: "primary" | "secondary";
  to: string;
  children: React.ReactNode;
};

export const ButtonLink: React.FC<Props> = ({ to, children, variant }) => {
  const LinkClasses = clsx(
    "ease-in duration-300 px-6 w-fit rounded-md uppercase font-medium flex justify-center items-center gap-2",
    {
      "bg-dark-blue hover:bg-dark-blue-hover text-white py-4":
        variant === "primary",
    },
    {
      "bg-white border-2 border-dark-blue hover:bg-dark-blue hover:text-white text-dark-blue py-3":
        variant === "secondary",
    }
  );
  return (
    <Link to={to} className={LinkClasses}>
      {children}
    </Link>
  );
};
