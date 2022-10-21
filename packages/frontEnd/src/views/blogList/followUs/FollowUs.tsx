import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { RiBehanceFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";

export const FollowUs = () => {
  return (
    <div className="flex gap-3 text-dark-blue justify-around ">
      <div className=" flex items-center justify-center w-10 h-10 border bg-white rounded-full ">
        <RiFacebookFill className="w-6 h-6  " />
      </div>
      <div className=" flex items-center justify-center  w-10 h-10 border bg-white rounded-full ">
        <IoLogoTwitter className="w-6 h-6 " />
      </div>
      <div className="flex items-center justify-center  w-10 h-10 border bg-white rounded-full ">
        <RiLinkedinFill className="w-6 h-6 " />
      </div>
      <div className="flex items-center justify-center  w-10 h-10 border bg-white rounded-full ">
        <AiFillYoutube className="w-6 h-6 " />
      </div>
      <div className="flex items-center justify-center  w-10 h-10 border bg-white rounded-full ">
        <RiBehanceFill className="w-6 h-6 " />
      </div>
      <div className="flex items-center justify-center  w-10 h-10 border bg-white rounded-full ">
        <FaPinterestP className="w-6 h-6 " />
      </div>
    </div>
  );
};
