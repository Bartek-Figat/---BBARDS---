import React from "react";
import logo from "assets/images/logo.png";
import { TabButton } from "../../components/tabs/TabButton";
import { Tab } from "@headlessui/react";
import { FaUnlock } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden sm:block relative bg-cover bg-no-repeat bg-center w-3/5 h-screen bg-low-poly ">
        <div className="bg-gradient-to-r from-[#012154] via-transparent to-[#146bff] h-screen w-full" />
        <div className="fixed z-10 top-12 left-12 w-[50px] h-[50px] rounded-full bg-white p-6 flex items-center justify-center">
          <Link to="/">
            <FaArrowLeft className="text-dark-blue" />
          </Link>
        </div>
        <div className="absolute top-2/4 left-2/4 flex flex-col items-center md:w-[280px] lg:w-[460px] xl:w-[600px] -translate-y-2/4 -translate-y-2/4 -translate-x-2/4 -translate-x-2/4">
          <img src={logo} alt="" />
          <hgroup className="text-center flex flex-col items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold text-white mt-6">
              Advertise your assets Buy what are you needs.
            </h1>
            <p className="text-white mt-6">
              Biggest Online Advertising Marketplace in the World.
            </p>
          </hgroup>
        </div>
      </div>
      <div className="w-full md:w-3/6 xl:w-2/5 bg-[#fbfbfb]">
        <Tab.Group>
          <Tab.List className="flex w-full">
            <Tab className="w-full">
              {({ selected }) => (
                <TabButton
                  className="px-0 py-4 font-semibold text-sm"
                  selected={selected}
                >
                  Sign In
                </TabButton>
              )}
            </Tab>
            <Tab className="w-full">
              {({ selected }) => (
                <TabButton
                  className="px-0 py-4 font-semibold text-sm"
                  selected={selected}
                >
                  Sign Up
                </TabButton>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="m-12">
                <hgroup className="flex flex-col items-center w-full">
                  <h2 className="text-4xl font-bold">Welcome!</h2>
                  <p className="mt-2">
                    Use credentials to access your account.
                  </p>
                </hgroup>
                <input
                  className="mt-11 w-full border-b-[2px] border-gray-mercury focus:border-dark-blue focus:outline-none py-2.5 pl-5"
                  type="text"
                  placeholder="Phone number"
                />
                <input
                  className="mt-5 w-full border-b-[2px] border-gray-mercury focus:border-dark-blue focus:outline-none py-2.5 pl-5"
                  type="text"
                  placeholder="Password"
                />

                <div className="mt-5 flex justify-between">
                  <div className="flex flex-row-reverse items-center">
                    <label className="ml-2" htmlFor="remember">
                      Remember me
                    </label>
                    <input
                      className="form-checkbox w-4 h-4 text-dark-blue rounded border-[#adb5bd]"
                      type="checkbox"
                      id="remember"
                    />
                  </div>

                  <Link to="/">Forget password?</Link>
                </div>

                <button
                  className="w-full bg-dark-blue text-white mt-5 py-2 font-medium uppercase rounded-lg flex justify-center items-center"
                  type="submit"
                  value="Enter your account"
                >
                  <FaUnlock />
                  <p className="ml-2">Enter your account</p>
                </button>

                <p className="mt-12 text-center text-lg w-[290px] m-auto">
                  Don't have an account? click on the{" "}
                  <span className="text-dark-blue font-medium">
                    ( sign up )
                  </span>{" "}
                  button above.
                </p>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="m-12">
                <hgroup className="flex flex-col items-center w-full">
                  <h2 className="text-4xl font-bold">Register</h2>
                  <p className="mt-2">Setup a new account in a minute.</p>
                </hgroup>
                <input
                  className="mt-11 w-full border-b-[2px] border-gray-mercury focus:border-dark-blue focus:outline-none py-2.5 pl-5"
                  type="text"
                  placeholder="Phone number"
                />
                <input
                  className="mt-5 w-full border-b-[2px] border-gray-mercury focus:border-dark-blue focus:outline-none py-2.5 pl-5"
                  type="text"
                  placeholder="Password"
                />
                <input
                  className="mt-5 w-full border-b-[2px] border-gray-mercury focus:border-dark-blue focus:outline-none py-2.5 pl-5"
                  type="text"
                  placeholder="Repeat Password"
                />

                <div className="mt-5 flex justify-between">
                  <div className="flex flex-row-reverse items-center">
                    <label className="ml-2" htmlFor="remember">
                      I agree to the all{" "}
                      <Link className="text-[#007bff]" to="/">
                        terms & consitions
                      </Link>{" "}
                      of bebostha.
                    </label>
                    <input
                      className="form-checkbox w-4 h-4 text-dark-blue rounded border-[#adb5bd]"
                      type="checkbox"
                      id="remember"
                    />
                  </div>
                </div>

                <button
                  className="w-full bg-dark-blue text-white mt-5 py-2 font-medium uppercase rounded-lg flex justify-center items-center"
                  type="submit"
                  value="Enter your account"
                >
                  <FaUserCheck />
                  <p className="ml-2">Create new account</p>
                </button>

                <p className="mt-12 text-center text-lg w-[290px] m-auto">
                  Already have an account? click on the{" "}
                  <span className="text-dark-blue font-medium">
                    ( sign in )
                  </span>{" "}
                  button above.
                </p>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Login;
