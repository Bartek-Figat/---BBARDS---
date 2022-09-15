import { SaleBadge } from "components/badge/SaleBadge";
import React from "react";
import { FaBroom } from "react-icons/fa";
import { SubmitSecondary } from "../../../../components/buttons/Input/SubmitSecondary";
import { BookingBadge } from "../../../../components/badge/BookingBadge";
import { RentalBadge } from "../../../../components/badge/RentalBadge";

export const FilterByTypeForm = () => {
  return (
    <>
      <form className="mt-4 mb-4 flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center">
            <input
              id="sales"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="sales" className="ml-2">
              <SaleBadge />
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <input
              id="rental"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="rental" className="ml-2">
              <RentalBadge />
            </label>
          </div>
          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <input
              id="booking"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="booking" className="ml-2">
              <BookingBadge />
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
