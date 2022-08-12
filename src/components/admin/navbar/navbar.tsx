import React from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { setCollapsed } from "../../../slice/collapsed";
import { FiMenu } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Search } from "./search";
import { NotificationCircle } from "./notificationCricle";
import { Dropdown } from "./dropdown/dropdown";

export const Navbar: React.FC = () => {
  const collapsed = useAppSelector((state) => state.config.collapsed);
  const dispatch = useAppDispatch();
  return (
    <div className="flex w-full p-4 justify-between items-center">
      <div className="flex">
        <button
          onClick={() =>
            dispatch(
              setCollapsed({
                collapsed: !collapsed,
              })
            )
          }
          className="mx-4"
        >
          <FiMenu size={20} />
        </button>
        <Search />
        <Dropdown />
      </div>

      <div className="flex">
        <NotificationCircle />
        <div className="flex flx-row w-[10rem]">
          <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white font-bold w-full flex flex-row justify-center items-center">
            <AiOutlinePlusCircle className="text-xl mr-2" />
            Post Your Ad
          </button>
        </div>
      </div>
    </div>
  );
};
