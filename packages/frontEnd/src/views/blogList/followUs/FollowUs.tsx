import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { RiBehanceFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";

export const FollowUs = () => {
  return (
    <div className="flex gap-3 text-dark-blue justify-around  ">
      <div className=" flex items-center justify-center w-10 h-10 border bg-white rounded-full hover:bg-dark-blue hover:text-white">
        <RiFacebookFill className="w-6 h-6  " />
      </div>
      <div className=" flex items-center justify-center  w-10 h-10 border bg-white rounded-full hover:bg-dark-blue hover:text-white">
        <IoLogoTwitter className="w-6 h-6 " />
      </div>
      <div className="flex items-center justify-center  w-10 h-10 border bg-white rounded-full hover:bg-dark-blue hover:text-white">
        <RiLinkedinFill className="w-6 h-6 " />
      </div>
      <div className="flex items-center justify-center  w-10 h-10 border bg-white rounded-full hover:bg-dark-blue hover:text-white">
        <AiFillYoutube className="w-6 h-6 " />
      </div>
      <div className="flex items-center justify-center  w-10 h-10 border bg-white rounded-full hover:bg-dark-blue hover:text-white">
        <RiBehanceFill className="w-6 h-6 " />
      </div>
      <div className="flex items-center justify-center  w-10 h-10 border bg-white rounded-full hover:bg-dark-blue hover:text-white">
        <FaPinterestP className="w-6 h-6 " />
      </div>
    </div>
  );
};
