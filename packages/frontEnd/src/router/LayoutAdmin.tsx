import React from "react";
import { Navbar } from "components/navbar/navbar";
import { Footer } from "components/footer/Footer";
import { Banner } from "views/admin/banner/banner";
import { Profile } from "views/admin/profile/profile";
import { Header } from "views/admin/header";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

export const LayoutAdmin = () => {
  return (
    <div className="flex">
      <div className="flex w-screen">
        <div className="grow-[1] h-screen overflow-y-auto">
          <Navbar />
          <Banner />
          <div className="flex flex-col w-[100vw] h-[]justify-center items-center bg-gray-chalk positi">
            <div className="w-[70vw] tablet:w-[95vw] top-[20%] z-10">
              <Header />
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
