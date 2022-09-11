import React from "react";

type Props = {
  name: string;
  price: string;
  icon: React.ReactNode;
};

export const Heading: React.FC<Props> = ({ name, price, icon }) => {
  return (
    <div className="font-bold text-left border-b-[1px] border-gray-mercury pb-5 mb-5">
      <div className="text-dark-blue text-6xl absolute top-2 right-3">
        {icon}
      </div>
      <h3 className="text-dark-blue text-4xl mb-5">${price}</h3>
      <h4 className="text-black text-xl uppercase">{name}</h4>
    </div>
  );
};
