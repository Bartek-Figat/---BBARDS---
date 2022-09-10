import React from "react";
import { HiPlusSm } from "react-icons/hi";

type Props = {
  options: {
    text: string;
    isAvailable: boolean;
  }[];
};

export const OptionList: React.FC<Props> = ({ options }) => {
  return (
    <ul className="text-gray-dark flex flex-col gap-5 mb-11">
      {options.map(({ text, isAvailable }, idx) => {
        return (
          <li className="flex items-center" key={idx}>
            <HiPlusSm
              className={`text-dark-blue text-2xl ${
                !isAvailable && "rotate-45"
              }`}
            />
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  );
};
