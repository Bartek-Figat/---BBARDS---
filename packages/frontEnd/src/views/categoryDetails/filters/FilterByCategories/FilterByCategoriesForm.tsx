import { SubmitSecondary } from "components/buttons/Input/SubmitSecondary";
import React from "react";
import { FaBroom } from "react-icons/fa";

export const FilterByCategoriesForm = () => {
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
              id="electronics"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="electronics" className="ml-2 flex">
              Electronics
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="automobiles"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="automobiles" className="ml-2 flex">
              Automobiles
            </label>
          </div>
          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="properties"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="properties" className="ml-2 flex">
              Properties
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="fashion"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="fashion" className="ml-2 flex">
              Fashion
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="gadgets"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="gadgets" className="ml-2 flex">
              Gadgets
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
