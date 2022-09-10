import React from "react";
import Heading from "../Heading/Heading";
import OptionList from "../OptionList/OptionList";
import SectionLink from "../SectionLink/SectionLink";

type Props = {
  name: string;
  price: string;
  icon: React.ReactNode;
  options: {
    text: string;
    available: boolean;
  }[];
};

const CardContainer: React.FC<Props> = ({ name, price, icon, options }) => {
  return (
    <div className="w-80 lg:w-96 px-12 py-14 border-2 border-white hover:border-dark-blue bg-white relative rounded-lg shadow-2xl">
      <Heading icon={icon} name={name} price={price} />
      <OptionList options={options} />
      <SectionLink to="#">register now</SectionLink>
    </div>
  );
};

export default CardContainer;
