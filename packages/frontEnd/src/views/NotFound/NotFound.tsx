import type { FC } from "react";
import { ButtonLink } from "components/buttons/ButtonLink";
import { ImHome } from "react-icons/im";

export const NotFound: FC = () => {
  return (
    <div className="bg-gray-chalk flex flex-col items-center py-20">
      <h1 className="text-[10rem] md:text-[22rem] mb-6 leading-none text-dark-blue font-bold">
        404
      </h1>
      <p className="text-3xl md:text-5xl mb-6 font-bold">
        Opps! Something Went Wrong?
      </p>
      <ButtonLink to="/" variant="secondary">
        <ImHome />
        <span>go to homepage</span>
      </ButtonLink>
    </div>
  );
};
