import { Link } from "react-router-dom";
import { citiesContent } from "./cityData";

export const CityPart = () => {
  return (
    <div className="flex justify-center w-full mt-11">
      <div className="grid gap-4 xs:grid-cols-32 sm:grid-cols-30 md:grid-cols-28 lg:grid-cols-26">
        {citiesContent.map(({ city, ads, image, span }) => {
          return (
            <div
              key={city}
              className={`bg-center bg-no-repeat bg-cover h-72 rounded-lg group ${image} ${span}`}
            >
              <div className="flex justify-center w-full h-full">
                <div className="flex items-end">
                  <Link to="/" className="text-white p-4 text-lg font-medium">
                    {city}
                    <p className="text-white p-4 hidden group-hover:flex animate-bounce text-md">
                      {ads} ads
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
