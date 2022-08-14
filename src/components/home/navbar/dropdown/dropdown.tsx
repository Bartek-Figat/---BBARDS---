import React, { Fragment } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import logo from "../../../../assets/images/logo.png";
import avatar from "assets/images/avatar/01.jpg";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setCollapsed } from "../../../../slice/collapsed";
import { FaPlusCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const Dropdown: React.FC = () => {
  const collapsed = useAppSelector((state) => state.config.collapsed);
  const dispatch = useAppDispatch();
  return (
    <>
      {collapsed && (
        <div className="fixed inset-0 bg-black/30 z-40" aria-hidden="true" />
      )}
      <Transition
        show={collapsed}
        enter="transition ease-in-out duration-13300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-13300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        as={Fragment}
      >
        <Dialog
          className="fixed top-0 bg-white h-full z-50"
          open={collapsed}
          onClose={() =>
            dispatch(
              setCollapsed({
                collapsed: false,
              })
            )
          }
        >
          <Dialog.Panel>
            <Dialog.Title className="flex border-b-[1px] border-[#e8e8e8] justify-between items-center p-4">
              <img className="h-10" src={logo} alt="" />
              <button
                className="h-[40px] w-[40px] rounded-full shadow-xl hover:bg-[#0044bb] hover:text-white"
                onClick={() =>
                  dispatch(
                    setCollapsed({
                      collapsed: false,
                    })
                  )
                }
              >
                <IoClose className="text-xl mx-auto" />
              </button>
            </Dialog.Title>
            <Dialog.Description className="flex flex-col items-center py-4">
              <a className="border-[3px] border-[#0044bb] rounded-full" href="">
                <img
                  className="rounded-full w-[120px] m-[3px]"
                  src={avatar}
                  alt=""
                />
              </a>
              <a className="font-bold mt-2 text-lg" href="">
                Jackon Honson
              </a>
              <div className="flex mt-2">
                <button className="text-xs leading-6 bg-[#0044bb] hover:bg-blue-900 py-2 px-4 rounded-md text-white font-bold w-full flex flex-row justify-center items-center uppercase">
                  <FaPlusCircle className="mr-2" />
                  Post Your Ad
                </button>
              </div>
            </Dialog.Description>

            <Tab.Group>
              <Tab.List>
                <Tab>
                  {({ selected }) => (
                    <button
                      className={`px-9 py-2 text-xs uppercase font-medium leading-6 ${
                        selected
                          ? "bg-[#F5F5F5] text-[#0044bb] border-b-[3px] border-[#0044bb]"
                          : "border-b-[1px] border-[#e8e8e8]"
                      }`}
                    >
                      Main Menu
                    </button>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <button
                      className={`px-9 py-2 text-xs uppercase font-medium leading-6 ${
                        selected
                          ? "bg-[#F5F5F5] text-[#0044bb] border-b-[3px] border-[#0044bb]"
                          : "border-b-[1px] border-[#e8e8e8]"
                      }`}
                    >
                      Author Menu
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <ul>
                    <li className="p-3 border-b-[1px] border-[#e8e8e8]">
                      <a href="">TODO</a>
                    </li>
                    <li className="p-3 border-b-[1px] border-[#e8e8e8]">
                      <a href="">TODO</a>
                    </li>
                    <li className="p-3 border-b-[1px] border-[#e8e8e8]">
                      <a href="">TODO</a>
                    </li>
                  </ul>
                </Tab.Panel>
                <Tab.Panel>TODO</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
};
