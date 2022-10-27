import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TopRatings } from "./topRatings";

export const BrowseOurTop = () => {
  return (
    <div className="container mt-40 lg:px-0 lg:mx-0 lg:max-w-full">
      <div className="flex justify-center ">
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
      <div className="flex justify-center mt-11 ">
        <nav className="flex">
          <div className="grid gap-0 lg:grid-cols-27 md:grid-cols-27 sm:grid-cols-27 tablet:flex">
            <div className="bg-gray-chalk p-4 w-full text-center text-dark-blue border-b-2 border-b-blue-500 ">
              <Link
                to="/"
                className="text-center tracking-wide uppercase font-medium"
              >
                top ratings
              </Link>
            </div>
            <div className="hover:bg-gray-chalk p-4 w-full text-center text-[#2F3946] border-b-2 border-gray-mercury-100">
              <Link to="/" className="tracking-wide uppercase font-medium">
                top advertiser
              </Link>
            </div>
            <div className="hover:bg-gray-chalk p-4 w-full text-center text-[#2F3946] border-b-2 border-gray-mercury-100">
              <Link to="/" className="tracking-wide uppercase font-medium">
                top engaged
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <TopRatings />
      <div className="flex justify-center ">
        <button className="bg-dark-blue border-2 border-dark-blue hover:bg-dark-blue text-white px-5 py-3 rounded-md uppercase font-medium flex justify-center items-center mt-11">
          <FaEye className="text-xl mr-2" />
          view all ads
        </button>
      </div>
    </div>
  );
};
