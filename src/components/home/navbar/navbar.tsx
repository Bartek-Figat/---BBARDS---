import React from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { setCollapsed } from "../../../slice/collapsed";
import { FiMenu } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Search } from "./search";
import { NotificationCircle } from "./notificationCricle";
import userImage from "../../../assets/images/user.png";
import logo from "../../../assets/images/logo.png";

export const Navbar: React.FC = () => {
  const collapsed = useAppSelector((state) => state.config.collapsed);
  const dispatch = useAppDispatch();
  return (
    <div className="flex w-full p-4 justify-between items-center bg-white">
      <button
        onClick={() =>
          dispatch(
            setCollapsed({
              collapsed: !collapsed,
            })
          )
        }
        className="bg-[#f5f5f5] p-3 rounded-full"
      >
        <FiMenu size={20} />
      </button>
      <img className="h-10 ml-10" src={logo} alt="" />
      <div className="ml-10 hidden lg:flex items-center">
        <img className="rounded-full w-10 h-10" src={userImage} alt="" />
        <span className="ml-2 font-bold">Join Me</span>
      </div>
      <Search />

      <div className="ml-10 hidden lg:flex">
        <NotificationCircle />
        <div className="flex flx-row w-[10rem]">
          <button className="bg-[#0044bb] hover:bg-blue-700 p-2 rounded-md text-white font-bold w-full flex flex-row justify-center items-center">
            <AiOutlinePlusCircle className="text-xl mr-2" />
            Post Your Ad
          </button>
        </div>
      </div>
    </div>
  );
};
