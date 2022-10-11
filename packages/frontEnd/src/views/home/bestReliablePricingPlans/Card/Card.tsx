import React from "react";
import { Heading } from "../Heading/Heading";
import { OptionList } from "../OptionList/OptionList";
import { BsBoxArrowInRight } from "react-icons/bs";
import { ButtonLink } from "components/buttons/ButtonLink";

type Props = {
  name: string;
  price: string;
  icon: React.ReactNode;
  options: {
    text: string;
    isAvailable: boolean;
  }[];
};

export const Card: React.FC<Props> = ({ name, price, icon, options }) => {
  return (
    <div className="w-80 lg:w-96 px-12 py-14 border-2 border-white hover:border-dark-blue bg-white relative rounded-lg shadow-2xl">
      <Heading icon={icon} name={name} price={price} />
      <OptionList options={options} />
      <ButtonLink to="#" variant="secondary">
        <>
          <BsBoxArrowInRight className="text-xl" />
          register now
        </>
      </ButtonLink>
    </div>
  );
};
