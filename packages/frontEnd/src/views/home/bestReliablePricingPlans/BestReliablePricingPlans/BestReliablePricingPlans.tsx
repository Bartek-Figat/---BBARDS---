import { BsBicycle } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { Card } from "../Card/Card";
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
        <Card
          icon={<BsBicycle />}
          name={data.free.name}
          price={data.free.price}
          options={data.free.options}
        />
        <Card
          icon={<FaCarSide />}
          name={data.standard.name}
          price={data.standard.price}
          options={data.standard.options}
        />
        <Card
          icon={<GiCommercialAirplane />}
          name={data.premium.name}
          price={data.premium.price}
          options={data.premium.options}
        />
      </div>
    </section>
  );
};
