import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import { BsBicycle } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { data } from "../data";

export const BestReliablePricingPlans = () => {
  return (
    <section className="text-white flex flex-col items-center text-center -translate-y-72">
      <h2 className="text-5xl mb-5 font-bold">Best Reliable Pricing Plans</h2>
      <p className="text-lg mb-11 max-w-[600px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur illum
        vel sunt libero voluptatum repudiandae veniam maxime tenetur.
      </p>
      <div className="flex gap-8 justify-center flex-wrap px-4">
        <CardContainer
          icon={<BsBicycle />}
          name={data.free.name}
          price={data.free.price}
          options={data.free.options}
        />
        <CardContainer
          icon={<FaCarSide />}
          name={data.standard.name}
          price={data.standard.price}
          options={data.standard.options}
        />
        <CardContainer
          icon={<GiCommercialAirplane />}
          name={data.premium.name}
          price={data.premium.price}
          options={data.premium.options}
        />
      </div>
    </section>
  );
};
