import React from "react";

type SecondaryButtonProps = {
  render: () => JSX.Element;
};

export const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <button className="w-full bg-white border-2 border-dark-blue hover:bg-dark-blue hover:text-white px-6 py-3 rounded-md uppercase text-dark-blue font-medium flex justify-center items-center gap-2 duration-300">
      {props.render()}
    </button>
  );
};
