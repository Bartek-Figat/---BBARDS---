import React from "react";

interface Props {
  children: React.ReactNode;
}

export const FilterItem: React.FC<Props> = ({ children }) => {
  return (
    <div className="mt-4 bg-gray-chalk w-[300px] p-4 border-[1px] border-gray-mercury rounded">
      {children}
    </div>
  );
};
