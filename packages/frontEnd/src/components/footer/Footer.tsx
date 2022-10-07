import logo from "assets/images/logo.png";
import master from "assets/images/pay-cards/01.jpg";
import visa from "assets/images/pay-cards/02.jpg";
import express from "assets/images/pay-cards/03.jpg";
import payPal from "assets/images/pay-cards/04.jpg";
import store from "assets/images/app-store.png";
import play from "assets/images/play-store.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaDribbble,
  FaTwitter,
} from "react-icons/fa";
export const Footer = () => {
  const aClass = `hover:text-white hover:underline easy-in duration-700`;
  const h3Class = `text-gray-chalk relative border-b border-cold-gray pb-3.5 mb-5 text-2xl font-semibold before:content-[''] before:absolute before:w-1/3 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]`;
  const quickLinks = [
    {
      name: "Store Location",
      href: "/",
    },
    {
      name: "Order Tracking",
      href: "/",
    },
    {
      name: "My Account",
      href: "/",
    },
    {
      name: "Size Guide",
      href: "/",
    },
    {
      name: "Faq",
      href: "/",
    },
  ];
  const information = [
    {
      name: "About Us",
      href: "/",
    },
    {
      name: "Delivery System",
      href: "/",
    },
    {
      name: "Secure Payment",
      href: "/",
    },
    {
      name: "Contact Us",
      href: "/",
    },
    {
      name: "Sitemap",
      href: "/",
    },
  ];
  const icons = [
    {
      name: <FaFacebookF />,
      href: "/",
    },
    {
      name: <FaLinkedinIn />,
      href: "/",
    },
    {
      name: <FaGooglePlusG />,
      href: "/",
    },
    {
      name: <FaYoutube />,
      href: "/",
    },
    {
      name: <FaPinterestP />,
      href: "/",
    },
    {
      name: <FaInstagram />,
      href: "/",
    },
    {
      name: <FaDribbble />,
      href: "/",
    },
    {
      name: <FaTwitter />,
      href: "/",
    },
  ];
  return (
    <div className="flex flex-col items-center bg-black-blue w-full sm:text-xs lg:text-lg md:text-base ">
      <div className="container items-center pt-10 ">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mb-16 px-3">
          <div className="w-full">
            <h2 className="text-white text-4xl font-bold">
              Subscribe for Latest Offers
            </h2>
            <p className="text-cold-gray mt-5 text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, aliquid reiciendis! Exercitationem soluta provident
              non.
            </p>
          </div>
          <div className="w-full">
            <form className="w-full bg-white rounded flex justify-between items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="overflow-hidden outline-none mx-2 h-14 w-3/5"
              />
              <button className="bg-dark-blue text-white py-2.5 w-1/3 rounded mx-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-4 border-b border-cold-gray mx-10">
          <div className="w-full">
            <h3 className={h3Class}>Contact us</h3>
            <ul className="text-cold-gray">
              <li className="mb-5">
                <p>1420 West Jalkuri Fatullah,</p>
                <p>Narayanganj, BD</p>
              </li>
              <li className="mb-5">
                <p>support@classicads.com</p>
                <p> info@classicads.com</p>
              </li>
              <li className="mb-5">
                <p>+8801838288389</p>
                <p>+8801941101915</p>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className={h3Class}>Quick links</h3>
            <ul className="text-gray-dark">
              {quickLinks.map((links, index) => (
                <li className="mb-5" key={index}>
                  <Link to={links.href} className={aClass}>
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h3 className={h3Class}>Information</h3>
            <ul className="text-gray-dark">
              {information.map((info, index) => (
                <li className="mb-5" key={index}>
                  <Link to={info.href} className={aClass}>
                    {info.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full ">
            <Link to="/">
              <div className="w-3/4 tablet:w-[40%] xs:w-[40%]">
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <ul className="text-cold-gray">
              <li className="mb-6 mt-5">
                <h5 className="text-white">929,238</h5>
                <p>Registered Users</p>
              </li>
              <li>
                <h5 className="text-white">242,789</h5>
                <p>Community Ads</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap my-12 flex-col sm:flex-row m-4 md:m-14 sm:justify-center sm:m-12 sm:justify-items-center ">
          <div className="flex  sm:flex-wrap lg:flex-row justify-center space-x-2 sm:gap-3 sm:w-1/3 sm:space-x-0 lg:space-x-2 w-4/4 ">
            <Link to="/">
              <img src={master} alt="Master Card" />
            </Link>
            <Link to="/">
              <img src={visa} alt="Visa" />
            </Link>
            <Link to="/">
              <img src={express} alt="American Express" />
            </Link>
            <Link to="/">
              <img src={payPal} alt="PayPal" />
            </Link>
          </div>
          <div className="flex lg:flex-row sm:flex-wrap sm:flex-col  justify-center sm:content-center space-x-2 sm:space-x-0 sm:justify-evenly  text-gray-dark sm:w-1/3  sm:px-4 py-3 sm:py-0 md:space-y-2 lg:space-y-0 lg:gap-2  ">
            <button className=" border p-2 rounded-md border-gray-dark  duration-500 hover:border-white hover:text-white sm:w-4/5  w-1/5 lg:w-1/3">
              English
            </button>
            <button className="border p-2 rounded-md border-gray-dark duration-500 hover:border-white hover:text-white sm:w-4/5 w-1/5 lg:w-1/3 ">
              USD
            </button>
          </div>
          <div className="flex lg:flex-row sm:flex-wrap sm:flex-col sm:justify-center justify-center space-x-2 sm:space-x-0 sm:px-4 sm:w-1/3 sm:space-y-2 lg:space-y-0 lg:gap-2">
            <Link to="/">
              <img src={play} alt="Google Play" />
            </Link>
            <Link to="/">
              <img src={store} alt="App Store" />
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full py-4 bg-purple-blue">
        <div className="container flex lg:flex-row xs:flex-col xs:items-center">
          <p className="text-cold-gray w-1/2  xs:text-center xs:mb-5">
            All Copyrights Reserved © 2021 - Developed by
            <Link to="/" className="text-dark-blue">
              &nbsp;Mironcoder
            </Link>
          </p>
          <ul className="flex text-gray-dark justify-around w-1/2 sm:text-center">
            {icons.map((icon, index) => (
              <li key={index}>
                <Link to={icon.href}>{icon.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
