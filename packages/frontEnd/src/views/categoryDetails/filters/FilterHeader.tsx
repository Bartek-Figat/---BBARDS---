import React from "react";

interface Props {
  title: string;
}

export const FilterHeader: React.FC<Props> = ({ title }) => {
  return (
    <p className="py-3.5 uppercase border-b-[1px] border-gray-mercury font-medium">
      {title}
    </p>
  );
};
