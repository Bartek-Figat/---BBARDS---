import React from "react";
import { Link } from "react-router-dom";
import Category from "../Category/Category";

type Props = {
  category: "marketing" | "security" | "advertise" | "safe";
  id: number;
};

const Image: React.FC<Props> = ({ category, id }) => {
  return (
    <div className="relative">
      <div className="h-52 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 duration-500"
          src={require(`assets/images/blog-suggest/0${id}.jpg`)}
          alt="article image"
        />
      </div>
      <Link to="#">
        <img
          className="absolute -bottom-6 left-6 w-14 h-14 border-white border-2 rounded-md"
          src={require(`assets/images/avatar/0${id}.jpg`)}
          alt="author image"
        />
      </Link>
      <Category category={category} />
    </div>
  );
};

export default Image;
