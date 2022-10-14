import type { FC, ReactNode } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

type ButtonProps = {
  variant: "primary" | "secondary";
  to: string;
  children: ReactNode;
};

export const ButtonLink: FC<ButtonProps> = ({ to, children, variant }) => {
  const LinkClasses = clsx(
    "ease-in duration-300 px-6 w-fit h-14 rounded-md uppercase font-medium flex justify-center items-center gap-2",
    {
      "bg-dark-blue hover:bg-dark-blue-hover text-white": variant === "primary",
    },
    {
      "bg-white hover:bg-dark-blue text-dark-blue hover:text-white border-2 border-dark-blue":
        variant === "secondary",
    }
  );
  return (
    <Link to={to} className={LinkClasses}>
      {children}
    </Link>
  );
};
