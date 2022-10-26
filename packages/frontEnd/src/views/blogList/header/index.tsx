import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="bg-gray-400 relative bg-cover bg-no-repeat bg-center bg-hero-image  w-full">
      <div className="bg-[#0044bb]/50 w-full h-full pt-20 pb-44">
        <div className="md:container mx-4 flex flex-col items-center">
          <h1 className="text-white text-4xl font-bold uppercase">Blog List</h1>

          <div className="mt-4">
            <Link className="text-white" to="/">
              Home
            </Link>
            <span className="text-blue-300"> / </span>
            <Link className="text-blue-300" to="/">
              Blog-List
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
