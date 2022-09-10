import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import { CgArrowLongRight } from "react-icons/cg";

type Props = {
  author: string;
  category: "marketing" | "security" | "advertise" | "safe";
  date: string;
  text: string;
  title: string;
  id: number;
};

const Card: React.FC<Props> = ({ author, category, date, text, title, id }) => {
  return (
    <div className="w-full bg-gray-chalk rounded-xl overflow-hidden hover:bg-white hover:shadow-gray-400 hover:shadow-xl duration-500 group">
      <Image id={id} category={category} />
      <div className="p-4">
        <div className="flex justify-between mt-10">
          <Link to="#" className="flex items-center gap-2">
            <BsFillPersonFill className="text-dark-blue" />
            {author}
          </Link>
          <div className="flex items-center gap-2">
            <MdWatchLater className="text-dark-blue" />
            {date}
          </div>
        </div>
        <h4 className="text-xl text-gray mt-4 font-bold hover:text-dark-blue-hover duration-300">
          <Link to="#">{title}</Link>
        </h4>
        <p className="my-4">{text}</p>
        <Link
          to="#"
          className="uppercase flex items-center gap-4 hover:text-dark-blue duration-300"
        >
          <span className="font-bold">read more</span>
          <CgArrowLongRight />
        </Link>
      </div>
    </div>
  );
};
export default Card;
