import React, { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { Search } from "components/search/search";
import { NotificationCircle } from "./notificationCricle";
import userImage from "assets/images/user.png";
import logo from "assets/images/logo.png";
import { Dropdown } from "./dropdown/dropdown";
import { FaPlusCircle } from "react-icons/fa";
import { PrimaryButton } from "components/buttons/PrimaryButton";
import { useCollapsed } from "util/useReduxToggle";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [handleToggle, collapsed] = useCollapsed();
  const [isSearchCollapsed, setSearchCollapsed] = useState(false);

  return (
    <>
      <div className="flex max-w-[100%] p-4 justify-between items-center bg-white">
        <button
          onClick={handleToggle}
          className="bg-[#f5f5f5] p-3 rounded-full"
        >
          <FiMenu size={20} />
        </button>
        <Dropdown handleToggle={handleToggle} collapsed={collapsed} />
        <img className="h-10 ml-10" src={logo} alt="" />
        <div className="ml-10 hidden lg:flex">
          <Link className="flex items-center" to="/login">
            <img className="rounded-full w-10 h-10" src={userImage} alt="" />
            <span className="ml-2 font-bold">Join Me</span>
          </Link>
        </div>
        <Search className="ml-10 hidden lg:flex" />

        <div className="ml-10 hidden lg:flex">
          <NotificationCircle />
          <PrimaryButton
            render={() => (
              <>
                <FaPlusCircle className="mr-2" />
                Post Your Ad
              </>
            )}
          />
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
