import React from "react";
import { LSideBar } from "./sidebar/sidebar";
import { Content } from "./content";
import { Navbar } from "./navbar/navbar";

const Dasboard: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex w-screen">
        <div className="grow-[0.1] h-screen bg-purple 3">
          <LSideBar />
        </div>
        <div className="grow-[0.9] h-screen overflow-y-auto">
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
