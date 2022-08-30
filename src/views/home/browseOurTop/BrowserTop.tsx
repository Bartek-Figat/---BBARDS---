import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TopRatings } from "./topRatings";

export const BrowseOurTop = () => {
  return (
    <div className="container mt-40">
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold">Browse Our Top</h2>
        <span className="text-dark-blue italic text-4xl font-bold ml-2">
          Niche
        </span>
      </div>
      <div>
        <p className="text-lg mt-11 max-w-[600px] text-center m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur
          illum vel sunt libero voluptatum repudiandae veniam maxime tenetur
          fugiat eaque alias nobis doloremque culpa nam.
        </p>
      </div>
      <div className="flex justify-center mt-11">
        <nav className="flex">
          <ul className="flex items-center justify-center p-2">
            <li className="bg-gray-chalk p-4  lg:w-80 md:w-64 sm:w-60 text-center text-dark-blue border-b-2 border-b-blue-500">
              <Link
                to="/"
                className="text-center tracking-wide uppercase font-medium"
              >
                top ratings
              </Link>
            </li>
            <li className="hover:bg-gray-chalk p-4 lg:w-80 md:w-64 sm:w-60 text-center text-dark-blue">
              <Link to="/" className="tracking-wide uppercase font-medium">
                top advertiser
              </Link>
            </li>
            <li className="hover:bg-gray-chalk p-4 lg:w-80 md:w-64 sm:w-60 text-center text-dark-blue">
              <Link to="/" className="tracking-wide uppercase font-medium">
                top engaged
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <TopRatings />
      <div className="flex justify-center">
        <button className="bg-[#0044bb] border-2 border-[#0044bb] hover:bg-[#0044bb] text-white px-5 py-3 rounded-md uppercase font-medium flex justify-center items-center mt-11">
          <FaEye className="text-xl mr-2" />
          view all ads
        </button>
      </div>
    </div>
  );
};
