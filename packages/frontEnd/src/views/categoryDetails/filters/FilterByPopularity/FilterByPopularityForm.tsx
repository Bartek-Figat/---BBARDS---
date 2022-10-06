import React from "react";
import { FaBroom } from "react-icons/fa";
import { SubmitInput } from "components/buttons/Input/SubmitInput";

export const FilterByPopularityForm = () => {
  return (
    <>
      <form className="mt-4 mb-4 flex flex-col">
        <input
          id="five"
          className="form-search rounded border-[1px] border-gray-mercury p-2 text-cold-gray"
          type="search"
          value="Search"
        />
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="laptop"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="laptop" className="ml-2 flex">
              Laptop
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="camera"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="camera" className="ml-2 flex">
              Camera
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="television"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="television" className="ml-2 flex">
              Television
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="by-cycle"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="by-cycle" className="ml-2 flex">
              By Cycle
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="bike"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="bike" className="ml-2 flex">
              Bike
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
      </form>
      <SubmitInput variant="outlined">
        <FaBroom /> Clear filter
      </SubmitInput>
    </>
  );
};
