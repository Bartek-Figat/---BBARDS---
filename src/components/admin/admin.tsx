import React from "react";
import { useAppSelector } from "../../store/hooks";
import { LSideBar } from "./sidebar/sidebar";
import { Content } from "./content";
import { Navbar } from "./navbar/navbar";
const Dasboard: React.FC = () => {
  const { collapsed } = useAppSelector((state) => state.config);

  return (
<<<<<<< HEAD
    <div className="flex w-full">
      <div className="flex flex-auto sticky h-screen bg-purple lg:w-[15%]  sm:w-[20%]">
        <LSideBar />
      </div>
      <div className="lg:w-[85%] sm:w-[80%] h-screen overflow-y-auto">
        <Navbar />
        <Content />
=======
    <div className="flex h-screen w-scree bg-[#f2f2f4]">
      <div className="flex w-full">
        <div className="flex flex-auto sticky h-screen bg-purple lg:w-[15%]  sm:w-[20%]">
          <LSideBar />
        </div>
        <div className="lg:w-[85%] sm:w-[80%]">
          <Navbar />
          <Content />
        </div>
>>>>>>> 8005ecaa5b96857b27d1188a7e310ace1773efc8
      </div>
    </div>
  );
};

export default Dasboard;
