import React from "react";
import { HiPlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const SectionLink = () => {
  return (
    <Link
      to="#"
      className="bg-white border-2 border-dark-blue hover:bg-dark-blue hover:text-white px-5 py-3 rounded-md uppercase text-dark-blue font-medium flex justify-center items-center gap-2 duration-300"
    >
      <HiPlusCircle className="text-xl" />
      post your ad
    </Link>
  );
};

export default SectionLink;
