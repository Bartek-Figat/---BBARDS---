import React, { Fragment } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import logo from "assets/images/logo.png";
import avatar from "assets/images/avatar/01.jpg";
import { FaPlusCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Accordion } from "components/accordion/Accordion";
import { AccordionItem } from "components/accordion/AccordionItem";
import { TabButton } from "components/tabs/TabButton";
import { NavigationItem } from "./NavigationItem";

interface Props {
  handleToggle: () => void;
  collapsed: boolean;
}

export const Dropdown: React.FC<Props> = ({ handleToggle, collapsed }) => {
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
          onClose={handleToggle}
        >
          <Dialog.Panel>
            <Dialog.Title className="flex border-b-[1px] border-[#e8e8e8] justify-between items-center p-4">
              <img className="h-10" src={logo} alt="" />
              <button
                className="h-[40px] w-[40px] rounded-full shadow-xl hover:bg-[#0044bb] hover:text-white"
                onClick={handleToggle}
              >
                <IoClose className="text-xl mx-auto" />
              </button>
            </Dialog.Title>
            <Dialog.Description className="flex flex-col items-center py-4">
              <p className="border-[3px] border-[#0044bb] rounded-full">
                <img
                  className="rounded-full w-[120px] m-[3px]"
                  src={avatar}
                  alt=""
                />
              </p>
              <p className="font-bold mt-2 text-lg">Jackon Honson</p>
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
                    <TabButton selected={selected}>Main Menu</TabButton>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <TabButton selected={selected}> Author Menu</TabButton>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <ul>
                    <NavigationItem path="">Home</NavigationItem>
                    <li>
                      <Accordion>
                        <AccordionItem title="Categories">
                          <ul>
                            <NavigationItem path="">
                              Category List
                            </NavigationItem>
                            <NavigationItem path="">
                              Category Details
                            </NavigationItem>
                          </ul>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <Accordion>
                        <AccordionItem title="Advertise List">
                          <ul>
                            <NavigationItem path="">
                              Ad List Column 3
                            </NavigationItem>
                            <NavigationItem path="">
                              Ad List Column 2
                            </NavigationItem>
                            <NavigationItem path="">
                              Ad List Column 1
                            </NavigationItem>
                          </ul>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <Accordion>
                        <AccordionItem title="Advertise Details">
                          <ul>
                            <NavigationItem path="">
                              Ad Details Grid
                            </NavigationItem>
                            <NavigationItem path="">
                              Ad Details Left
                            </NavigationItem>
                            <NavigationItem path="">
                              Ad Details Right
                            </NavigationItem>
                          </ul>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <Accordion>
                        <AccordionItem title="Pages">
                          <ul>
                            <NavigationItem path="">
                              Ad Details Grid
                            </NavigationItem>
                            <NavigationItem path="">
                              Ad Details Left
                            </NavigationItem>
                            <NavigationItem path="">
                              Ad Details Right
                            </NavigationItem>
                          </ul>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <Accordion>
                        <AccordionItem title="Blogs">
                          <ul>
                            <NavigationItem path="">Blog List</NavigationItem>
                            <NavigationItem path="">
                              Blog Details
                            </NavigationItem>
                          </ul>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <NavigationItem path="">Contact</NavigationItem>
                  </ul>
                </Tab.Panel>
                <Tab.Panel>
                  <ul>
                    <NavigationItem path="">Dashboard</NavigationItem>
                    <NavigationItem path="">Profile</NavigationItem>
                    <NavigationItem path="">Ad Post</NavigationItem>
                    <NavigationItem path="">My Ads</NavigationItem>
                    <NavigationItem path="">Settings</NavigationItem>
                    <NavigationItem path="">Bookmark</NavigationItem>
                    <NavigationItem path="">Message</NavigationItem>
                    <NavigationItem path="">Notification</NavigationItem>
                    <NavigationItem path="">Logout</NavigationItem>
                  </ul>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
};
