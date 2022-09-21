import { SaleBadge } from "components/badge/SaleBadge";
import React from "react";
import { FaBroom } from "react-icons/fa";
import { BookingBadge } from "../../../../components/badge/BookingBadge";
import { RentalBadge } from "../../../../components/badge/RentalBadge";
import { SubmitInput } from "components/buttons/Input/SubmitInput";
import { useFormContext } from "react-hook-form";

export const FilterByTypeForm = () => {
  const { register } = useFormContext();

  return (
    <>
      <div className="mt-4 mb-4 flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center">
            <input
              id="sales"
              className="form-checkbox rounded"
              type="checkbox"
              {...register("sales")}
              defaultValue="saaa"
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
              {...register("rental")}
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
              {...register("booking")}
            />
            <label htmlFor="booking" className="ml-2">
              <BookingBadge />
            </label>
          </div>
          <p className="text-cold-gray">({15})</p>
        </div>
      </div>
      <SubmitInput variant="outlined">
        <FaBroom /> Clear filter
      </SubmitInput>
    </>
  );
};
