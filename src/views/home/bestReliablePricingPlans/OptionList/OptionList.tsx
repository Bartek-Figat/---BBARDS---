import React from "react";
import { HiPlusSm } from "react-icons/hi";

type Props = {
  options: {
    text: string;
    available: boolean;
  }[];
};

const OptionList: React.FC<Props> = ({ options }) => {
  return (
    <ul className="text-gray-dark flex flex-col gap-5">
      {options.map(({ text, available }, i) => {
        return (
          <li className="flex items-center" key={i}>
            <HiPlusSm
              className={`text-dark-blue text-2xl ${!available && "rotate-45"}`}
            />
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default OptionList;
