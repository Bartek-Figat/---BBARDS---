import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  variant: "filled" | "outlined";
  onClick?: () => React.MouseEvent<HTMLElement>;
};

export const SubmitInput: React.FC<Props> = ({ children, variant }) => {
  return (
    <button
      type="submit"
      className={clsx(
        "w-full px-6 py-3 rounded-md flex justify-center items-center uppercase font-medium duration-300 gap-2",
        variant === "filled" &&
          "bg-dark-blue hover:bg-dark-blue-hover ease-in text-white w-fit items-center",
        variant === "outlined" &&
          " border-2 hover:text-white bg-white border-dark-blue text-dark-blue hover:bg-dark-blue"
      )}
    >
      {children}
    </button>
  );
};
