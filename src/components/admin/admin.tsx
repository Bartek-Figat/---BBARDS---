import React from "react";
import { useAppSelector } from "../../store/hooks";
import { LSideBar } from "./sidebar";
import { Content } from "./content";
import { Navbar } from "./navbar/navbar";
const Dasboard: React.FC = () => {
  const collapsed = useAppSelector((state) => state.config.collapsed);

  return (
    <div className="flex h-screen w-scree">
      <div
        className={`h-scree bg-gray-300 , ${
          !collapsed ? "grow-[0.12]" : "grow-[0.04] "
        } ease-in-out duration-300`}
      >
        <LSideBar />
      </div>
      <div
        className={`h-scree duration-300, ${
          !collapsed ? " grow-[0.88]" : "grow-[0.96]"
        } ease-in-out duration-300`}
      >
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default Dasboard;
