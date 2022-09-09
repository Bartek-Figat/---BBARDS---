import product1 from "assets/images/product/01.jpg";
import {
  BsClockHistory,
  BsFillLightningFill,
  BsFillTagsFill,
  BsHeart,
} from "react-icons/bs";
import { FaEye, FaMouse, FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoGitCompareOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const TopRatings = () => {
  interface ITopList {
    img: string;
    title: string;
    price: number;
    type: string;
    location: string;
    time: string;
  }

  const topList: ITopList[] = [
    {
      img: product1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: 3000,
      type: "Sale",
      location: "Uttara, Dhaka",
      time: "30 min",
    },
  ];

  return (
    <div className="flex justify-center w-full p-4">
      <div className="grid gap-5 lg:grid-cols-18 md:grid-cols-22 sm:grid-cols-24">
        {Array.from({ length: 8 }).map(() =>
          topList.map(({ img, title, price, type, location, time }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col bg-gray-chalk rounded-md"
              >
                <div className="relative group">
                  <div className="overflow-hidden relative rounded-sm">
                    <img
                      className="group-hover:scale-110 duration-1000 w-full sm:rounded-none"
                      src={img}
                      alt={img}
                    />
                  </div>
                  <div className="badge absolute top-0 bg-dark-blue py-3 px-2 mx-4 text-white">
                    <BsFillLightningFill />
                  </div>
                  <div className="absolute top-0 right-0 bg-red-600 px-2 m-4 rounded-sm">
                    <p className="text-white">{type}</p>
                  </div>
                  <div className="hidden group-hover:flex duration-1000 w-full px-4 pb-4 absolute bottom-0 justify-between bg-gradient-to-t from-black">
                    <div className="flex items-center">
                      <FaEye className="flex items-center text-lime-400" />
                      <p className="text-white">224</p>
                    </div>
                    <div className="flex items-center text-cyan-400">
                      <FaMouse />
                      <p className="text-white">224</p>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <FaStar />
                      <p className="text-white">224</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center flex-col">
                  <ol className="flex items-center mb-3 p-2 m-2 border-b-[1px] border-b-gray-mercury text-gray-dark">
                    <li className="m-1">
                      <BsFillTagsFill />
                    </li>
                    <li className="m-1">
                      <Link to="/">
                        Luxury <span>/</span>
                      </Link>
                    </li>
                    <li className="m-1">resort</li>
                  </ol>
                  <div className="flex text-center w-full">
                    <h5 className="font-medium leading-7 w-[92%] m-auto">
                      {title}
                    </h5>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="flex text-sm mr-4 text-cold-gray font-medium p-1">
                      <span className="flex flex-row justify-center items-center p-1">
                        <GoLocation />
                        {location}
                      </span>
                    </div>
                    <div className="flex flex-col text-sm mr-4 text-cold-gray font-medium p-1">
                      <span className="flex flex-row justify-center items-center p-1">
                        <BsClockHistory />
                        {time}
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-between items-center m-auto border-t-[1px] border-t-gray-mercury p-2 w-[90%]">
                      <h5 className="font-bold">
                        {`$${price}`}{" "}
                        <span className="font-medium text-cold-gray">
                          /per week
                        </span>
                      </h5>
                      <div className="flex justify-center items-center">
                        <div className="border-l-2 border-l-gray-mercury">
                          <IoGitCompareOutline className="m-1  hover:text-dark-blue hover:font-semibold cursor-pointer" />
                        </div>
                        <div className="border-l-2 border-l-light-silver">
                          <BsHeart className="m-1  hover:text-dark-blue hover:font-semibold cursor-pointer border-l-2 border-l-gray-mercury" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
