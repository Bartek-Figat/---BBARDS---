import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "filled" | "outlined";
  [rest: string]: any;
};

export const Button: FC<Props> = ({ children, variant, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        "w-full px-6 py-3 rounded-md flex justify-center items-center uppercase font-medium duration-300 gap-2",
        variant === "filled" &&
          "bg-dark-blue hover:bg-dark-blue-hover ease-in text-white items-center",
        variant === "outlined" &&
          "border-2 hover:text-white bg-white border-dark-blue text-dark-blue hover:bg-dark-blue"
      )}
    >
      {children}
    </button>
  );
};
