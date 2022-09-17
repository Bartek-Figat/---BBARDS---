import { SubmitSecondary } from "components/buttons/Input/SubmitSecondary";
import React from "react";
import { FaBroom, FaRegStar, FaStar } from "react-icons/fa";

export const FilterByRatingForm = () => {
  const getStars = (rate: number) => {
    return [1, 2, 3, 4, 5].map((item) => {
      return item > rate ? (
        <FaRegStar className="text-orange-400 mr-2" key={item} />
      ) : (
        <FaStar className="text-orange-400 mr-2" key={item} />
      );
    });
  };

  return (
    <>
      <form className="mt-4 mb-4 flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center">
            <input
              id="five"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="five" className="ml-2 flex">
              {getStars(5)}
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
      </form>
      <SubmitSecondary>
        <FaBroom /> Clear filter
      </SubmitSecondary>
    </>
  );
};
