import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

function AsideSection() {
  return (
    <div className="hidden sm:block relative bg-cover bg-no-repeat bg-center w-3/5 h-screen bg-low-poly ">
      <div className="bg-gradient-to-r from-[#012154] via-transparent to-[#146bff] h-screen w-full" />

      <div className="fixed z-10 top-12 left-12 w-[50px] h-[50px] rounded-full bg-white p-6 flex items-center justify-center">
        <Link to="/">
          <FaArrowLeft className="text-dark-blue" />
        </Link>
      </div>

      <div className="absolute top-2/4 left-2/4 flex flex-col items-center md:w-[280px] lg:w-[460px] xl:w-[600px] -translate-y-2/4 -translate-x-2/4">
        <img src={logo} alt="" />

        <hgroup className="text-center flex flex-col items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold text-white mt-6">
            Advertise your assets Buy what are you needs.
          </h1>
          <p className="text-white mt-6">
            Biggest Online Advertising Marketplace in the World.
          </p>
        </hgroup>
      </div>
    </div>
  );
}

export default AsideSection;
