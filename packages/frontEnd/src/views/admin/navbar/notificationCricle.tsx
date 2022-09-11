import { AiFillHeart } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { GoBell } from "react-icons/go";

export const NotificationCircle: React.FC = () => {
  return (
    <div className="flex-row hidden sm:flex">
      <ul className="flex">
        <div className="flex justify-center justify-items-stretch">
          <li className="p-3 bg-slate-200 drop-shadow-md rounded-full text-gray-600 hover:bg-blue-500 hover:text-white">
            <AiFillHeart />
          </li>
          <span className="flex justify-center items-center relative bottom-1 right-3 bg-blue-500 text-white rounded-full w-[21px] h-[21px]">
            0
          </span>
        </div>
        <div className="flex justify-center justify-items-stretch">
          <li className="p-3 bg-slate-200 drop-shadow-md rounded-full text-gray-600">
            <GrMail />
          </li>
          <span className="flex justify-center items-center relative bottom-1 right-3 bg-blue-500 text-white rounded-full w-[21px] h-[21px]">
            0
          </span>
        </div>
        <div className="flex justify-center justify-items-stretch">
          <li className="p-3 bg-slate-200 drop-shadow-md rounded-full text-gray-600">
            <GoBell />
          </li>
          <span className="flex justify-center items-center relative bottom-1 right-3 bg-blue-500 text-white rounded-full w-[21px] h-[21px]">
            0
          </span>
        </div>
      </ul>
    </div>
  );
};
