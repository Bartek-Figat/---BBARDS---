import { AiFillHeart } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { GoBell } from "react-icons/go";

export const NotificationCircle: React.FC = () => {
  return (
    <div className="flex-row hidden sm:flex ml-10">
      <ul className="flex">
        <div className="flex justify-center justify-items-stretch">
          <li className="p-3 bg-[#f5f5f5] drop-shadow-md rounded-full text-gray-600">
            <AiFillHeart />
          </li>
          <span className="flex justify-center items-center relative bottom-1 right-3 bg-[#0044bb] text-white rounded-full w-[21px] h-[21px]">
            0
          </span>
        </div>
        <div className="flex justify-center justify-items-stretch">
          <li className="p-3 bg-[#f5f5f5] drop-shadow-md rounded-full text-gray-600">
            <GrMail />
          </li>
          <span className="flex justify-center items-center relative bottom-1 right-3 bg-[#0044bb] text-white rounded-full w-[21px] h-[21px]">
            0
          </span>
        </div>
        <div className="flex justify-center justify-items-stretch">
          <li className="p-3 bg-[#f5f5f5] drop-shadow-md rounded-full text-gray-600">
            <GoBell />
          </li>
          <span className="flex justify-center items-center relative bottom-1 right-3 bg-[#0044bb] text-white rounded-full w-[21px] h-[21px]">
            0
          </span>
        </div>
      </ul>
    </div>
  );
};
