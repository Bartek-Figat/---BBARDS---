import React from "react";
import { useAppSelector } from "../../store/hooks";
import { LSideBar } from "./sidebar/sidebar";
import { Content } from "./content";
import { Navbar } from "./navbar/navbar";
const Dasboard: React.FC = () => {
  const { collapsed } = useAppSelector((state) => state.config);

  return (
    <div className="flex w-full">
      <div className="flex flex-auto sticky h-screen bg-purple lg:w-[15%]  sm:w-[20%]">
        <LSideBar />
      </div>
      <div className="lg:w-[85%] sm:w-[80%] h-screen overflow-y-auto">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default Dasboard;
