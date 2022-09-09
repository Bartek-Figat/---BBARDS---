import logo from "assets/images/logo.png";
import master from "assets/images/pay-cards/01.jpg";
import visa from "assets/images/pay-cards/02.jpg";
import express from "assets/images/pay-cards/03.jpg";
import payPal from "assets/images/pay-cards/04.jpg";
import store from "assets/images/app-store.png";
import play from "assets/images/play-store.png";
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
  return (
    <div className="bg-black-blue w-full sm:text-sm">
      <div className="container py-10">
        <div className="grid grid-cols-2 gap-4 mb-16">
          <div className="w-full">
            <h2 className="text-white text-4xl font-bold">
              Subscribe for Latest Offers
            </h2>
            <p className="text-cold-gray">
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
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 border-b border-cold-gray border-0">
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
              <li className="mb-5">
                <a href="#" className={aClass}>
                  Store Location
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className={aClass}>
                  Order Tracking
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className={aClass}>
                  My Account
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className={aClass}>
                  Size Guide
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className={aClass}>
                  Faq
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className={h3Class}>Information</h3>
            <ul className="text-gray-dark">
              <li className="mb-5">
                <a href="#" className={aClass}>
                  About Us
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className={aClass}>
                  Delivery System
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className={aClass}>
                  Secure Payment
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className={aClass}>
                  Contact Us
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className={aClass}>
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
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
        <div className="grid grid-cols-3 py-12 gap-4">
          <div className="">
            <div className="flex justify-around">
              <a href="#">
                <img src={master} />
              </a>
              <a href="#">
                <img src={visa} />
              </a>
              <a href="#">
                <img src={express} />
              </a>
              <a href="#">
                <img src={payPal} />
              </a>
            </div>
          </div>
          <div className="flex justify-around text-gray-dark">
            <button className="border w-2/5 rounded-md border-gray-dark duration-500 hover:border-white hover:text-white">
              English
            </button>
            <button className="border w-2/5 rounded-md border-gray-dark duration-500 hover:border-white hover:text-white">
              USD
            </button>
          </div>
          <div className="flex justify-around">
            <a href="#">
              <img src={play} />
            </a>
            <a href="#">
              <img src={store} />
            </a>
          </div>
        </div>
      </div>
      <div className=" w-full py-4 bg-purple-blue">
        <div className="container grid grid-cols-2 justify-between">
          <p className="text-cold-gray">
            All Copyrights Reserved © 2021 - Developed by
            <a href="#" className="text-dark-blue">
              &nbsp;Mironcoder
            </a>
          </p>
          <ul className="flex text-gray-dark justify-around w-full">
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGooglePlusG />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="#">
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaDribbble />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
