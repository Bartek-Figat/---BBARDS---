import React from "react";
import { IconType } from "react-icons";
import profileImage from "assets/images/photo-1599566150163-29194dcaad36.avif";
import { sibarList } from "./sidebar.list";

const NavigationList = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-center cursor-pointer p-4 font-medium text-[#cdd1cf] text-[rgb(229 231 235)] leading-4 hover:bg-purple-hover duration-200 ease-in-out rounded-md">
      {children}
    </li>
  );
};

const Icon = ({ children }: { children: React.ReactNode }) => {
  return <span className="mr-2 text-[24px]">{children}</span>;
};

const HeadreContent = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-[16px]">{children}</h2>;
};

export const LSideBar: React.FC = () => {
  return (
    <div className="flex border-gray-100 h-full w-full justify-center">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col items-center justify-center pt-14 pb-14">
          <img
            className="w-24 h-24 mx-auto rounded-full object-cover"
            src={profileImage}
            alt="Profile"
          />
          <div className="flex flex-col justify-center items-center pt-4">
            <p className="font-medium text-gray-200 leading-4 text-base p-2">
              Frankie Carrillo
            </p>
            <p className="font-medium text-gray-200 leading-4 text-sm">
              carrill@arvinmeritor.info
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-col justify-center w-full m-auto p-3">
            {sibarList.map(
              (list: { id: React.Key; icon: IconType; content: string }) => (
                <NavigationList key={list.id}>
                  <Icon>
                    <list.icon />
                  </Icon>
                  <HeadreContent>{list.content}</HeadreContent>
                </NavigationList>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
