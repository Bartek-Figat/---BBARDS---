import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: string;
};

const SectionLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link
      className="bg-dark-blue hover:bg-dark-blue-hover ease-in duration-300 text-white px-6 py-4 w-fit rounded-md uppercase font-medium flex justify-center items-center mt-11"
      to={to}
    >
      <BsBoxArrowInRight className="text-xl mr-2" />
      {children}
    </Link>
  );
};

export default SectionLink;
