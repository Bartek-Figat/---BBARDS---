import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/Footer";
import { Home } from "views/home/homePage";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};
