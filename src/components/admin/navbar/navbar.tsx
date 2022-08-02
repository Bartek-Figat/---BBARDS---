import React from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { setCollapsed } from "../../../slice/collapsed";
import { FiMenu } from "react-icons/fi";
import { Search } from "./search";
import { Dropdown } from "./dropdown";

export const Navbar: React.FC = () => {
  const collapsed = useAppSelector((state) => state.config.collapsed);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-column w-full p-2">
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
  );
};
