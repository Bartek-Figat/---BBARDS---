import React from "react";
import SectionLink from "../SectionLink/SectionLink";

export const PostAd = () => {
  return (
    <section className=" w-full bg-gradient-to-r from-dark-blue to-[#080229] text-white mt-28">
      <div className="flex flex-col items-center text-center bg-add-post bg-cover bg-center bg-no-repeat pt-14 pb-96 lg:pt-28">
        <h2 className="text-5xl mb-5 font-bold">
          Do you have something to advertise?
        </h2>
        <p className="text-lg mb-11 max-w-[600px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur
          illum vel sunt libero voluptatum repudiandae veniam maxime tenetur.
        </p>
        <SectionLink />
      </div>
    </section>
  );
};
