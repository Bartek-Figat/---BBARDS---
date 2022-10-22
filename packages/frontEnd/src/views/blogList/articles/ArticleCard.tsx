import { IoPerson } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

interface ArticleCardProps {
  img: string;
  title: string;
  date: string;
  avatar: string;
  category: string;
  author: string;
  content: string;
}

export const ArticleCard = ({
  img,
  title,
  date,
  avatar,
  category,
  author,
  content,
}: ArticleCardProps) => {
  let colorBadge = function (category: string) {
    switch (category) {
      case "Marketing":
        return "bg-green-600";
      case "Advertise":
        return "bg-purple-blog";
      case "Safety":
        return "bg-red-600";
      case "Security":
        return "bg-yellow-600";
    }
  };

  return (
    <div>
      <div className="relative max-w-lg pb-6 border rounded-lg bg-gray-chalk mx-3  basis-1/2">
        <img src={img} className="rounded-t-lg" />
        <div
          className={`absolute top-0 m-3 px-2 py-1 rounded-md text-white font-semibold ${colorBadge(
            category
          )}`}
        >
          <p>{category}</p>
        </div>
        <div className="px-5">
          <div className=" absolute -mt-8 w-16 h-16 border-4 rounded-xl border-white">
            <img className="rounded-lg" src={avatar} />
          </div>
          <div className="flex pt-11 justify-between pb-3">
            <div className="flex items-center gap-2">
              <IoPerson className="text-dark-blue" />
              <p>{author} </p>
            </div>
            <div className="flex items-center gap-2">
              <MdAccessTimeFilled className="text-dark-blue" />
              <p>{date}</p>
            </div>
          </div>
          <div className="pb-6">
            <h4 className="text-lg text-gray-500 bold font-bold ">{title}</h4>
            <p className="text-md text-gray-600">{content}</p>
          </div>
          <div className="flex items-center gap-3 font-bold">
            <a href="">READ MORE</a>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};
