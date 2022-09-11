import React from "react";

type PrimaryButtonProps = {
  render: () => JSX.Element;
};

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <button className="text-xs leading-6 bg-[#0044bb] hover:bg-blue-900 py-2 px-4 rounded-md text-white font-bold w-[180px] flex flex-row justify-center items-center uppercase">
      {props.render()}
    </button>
  );
};
