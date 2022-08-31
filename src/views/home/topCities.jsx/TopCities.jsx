import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CityPart } from "./CityPart";


export const TopCities = () => {
    return (
      <div className="container mt-40">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold">Top Cities by</h2>
          <span className="text-dark-blue italic text-4xl font-bold ml-2">
          Ads
          </span>
        </div>
        <div>
          <p className="text-lg mt-11 max-w-[600px] text-center m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur illum vel sunt libero voluptatum repudiandae veniam maxime tenetur.
          </p>
        </div>
        
        <CityPart />
        <div className="flex justify-center">
          <button className="bg-dark-blue border-2 border-dark-blue hover:bg-dark-blue text-white px-5 py-3 rounded-md uppercase font-medium flex justify-center items-center mt-11">
            <FaEye className="text-xl mr-2" />
            view all cities
          </button>
        </div>
      </div>
    );
  };