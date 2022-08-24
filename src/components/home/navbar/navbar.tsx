import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setCollapsed } from "../../../slice/collapsed";
import { FiMenu, FiSearch } from "react-icons/fi";
import { Search } from "./search";
import { NotificationCircle } from "./notificationCricle";
import userImage from "assets/images/user.png";
import logo from "assets/images/logo.png";
import { Dropdown } from "./dropdown/dropdown";
import { FaPlusCircle } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const collapsed = useAppSelector((state) => state.config.collapsed);
  const dispatch = useAppDispatch();
  const [isSearchCollapsed, setSearchCollapsed] = useState(false);

  return (
    <>
      <div className="flex max-w-[100%] p-4 justify-between items-center bg-white">
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
        <Dropdown />
        <img className="h-10 ml-10" src={logo} alt="" />
        <div className="ml-10 hidden lg:flex items-center">
          <img className="rounded-full w-10 h-10" src={userImage} alt="" />
          <span className="ml-2 font-bold">Join Me</span>
        </div>
        <Search className="ml-10 hidden lg:flex" />

        <div className="ml-10 hidden lg:flex">
          <NotificationCircle />
          <div className="flex">
            <button className="text-xs leading-6 bg-[#0044bb] hover:bg-blue-900 py-2 px-4 rounded-md text-white font-bold w-[180px] flex flex-row justify-center items-center uppercase">
              <FaPlusCircle className="mr-2" />
              Post Your Ad
            </button>
          </div>
        </div>
        <button
          onClick={() => setSearchCollapsed(!isSearchCollapsed)}
          className="rounded-full bg-[#f5f5fd] lg:hidden h-10 w-10"
        >
          <FiSearch className="w-4 h-4 stroke-current m-auto" />
        </button>
      </div>
      {isSearchCollapsed && <Search className="p-3 lg:hidden" />}
    </>
  );
};
