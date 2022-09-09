import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Search } from "components/search/search";
import { NotificationCircle } from "./notificationCricle";
import { PrimaryButton } from "components/buttons/PrimaryButton";

export const Navbar: React.FC = () => {
  return (
    <div className="flex p-4 justify-between">
      <div className="flex">
        <button className="mx-4">
          <FiMenu size={20} />
        </button>
        <Search className="ml-10 hidden lg:flex" />
      </div>

      <div className="flex">
        <NotificationCircle />
        <PrimaryButton
          render={() => (
            <>
              <AiOutlinePlusCircle className="text-xl mr-2" />
              Post Your Ad
            </>
          )}
        />
      </div>
    </div>
  );
};
