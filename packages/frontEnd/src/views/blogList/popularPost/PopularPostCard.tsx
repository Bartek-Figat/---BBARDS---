import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";

interface ArticleCardProps {
  img: string;
  title: string;
  date: string;
  comments: string;
}

export const PopularPostCard = ({
  img,
  title,
  date,
  comments,
}: ArticleCardProps) => {
  return (
    <div className="flex  mb-6 md:max-w-xl">
      <img className="w-[100px] rounded-lg object-cover" src={img} />
      <div className="ml-3.5">
        <p className="font-bold text-black-heading hover:text-dark-blue transition duration-300">
          {title}
        </p>
        <div className="flex gap-6 pt-2 ">
          <div className="flex items-center gap-2 text-gray-light">
            <FaRegCalendarAlt />
            <p>{date}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-light">
            <FaRegComments />
            <p>{comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
