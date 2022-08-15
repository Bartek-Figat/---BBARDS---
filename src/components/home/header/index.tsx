import React from "react";
import { Navbar } from "../navbar/navbar";
import { FaEye } from "react-icons/fa";
import SwiperContainer from "./swiper/swiper";

export function Header() {
  return (
    <header className="w-screen bg-gray-400 relative">
      <Navbar />
      <div className="bg-cover bg-no-repeat bg-center bg-hero-image bg-gray-400 w-full">
        <div className="bg-[#0044bb]/50 w-full h-full pt-20 pb-44">
          <div className="md:container mx-4 flex flex-wrap justify-center">
            <hgroup className="text-center text-white">
              <h1 className="text-4xl font-bold">
                You can #Buy, #Rent, #Booking anything from here.
              </h1>
              <p className="text-lg mt-5 lg:mx-48">
                Buy and sell everything from used cars to mobile phones and
                computers, or search for property, jobs and more in the world.
              </p>
            </hgroup>
            <button className="bg-white border-2 border-[#0044bb] hover:bg-[#0044bb] hover:text-white px-5 py-3 rounded-md uppercase text-[#0044bb] font-medium flex justify-center items-center mt-11">
              <FaEye className="text-xl mr-2" />
              Show all ads
            </button>
          </div>
        </div>
      </div>

      <SwiperContainer />
    </header>
  );
}
