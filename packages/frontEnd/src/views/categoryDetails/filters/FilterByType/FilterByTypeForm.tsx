import { SaleBadge } from "components/badge/SaleBadge";
import { FC } from "react";
import { FaBroom } from "react-icons/fa";
import { RentalBadge } from "../../../../components/badge/RentalBadge";
import { SubmitInput } from "components/buttons/Input/SubmitInput";
import { UseFormRegister } from "react-hook-form";
import { BookingBadge } from "../../../../components/badge/BookingBadge";

export const FilterByTypeForm: FC<UseFormRegister<any>> = (register) => {
  const typeInputs = [
    { name: "Sale", badge: SaleBadge },
    { name: "Rent", badge: RentalBadge },
    { name: "Booking", badge: BookingBadge },
  ];

  return (
    <>
      <div className="mt-4 mb-4 flex flex-col">
        {typeInputs.map(({ name, badge }, index) => {
          return (
            <div className="flex justify-between mt-2" key={index}>
              <div className="flex items-center">
                <input
                  id={name}
                  className="form-radio rounded"
                  type="radio"
                  {...register("adCategory")}
                  value={name}
                />
                <label htmlFor={name} className="ml-2">
                  {badge()}
                </label>
              </div>
              <p className="text-cold-gray">({15})</p>
            </div>
          );
        })}
      </div>
      <SubmitInput variant="outlined">
        <FaBroom /> Clear filter
      </SubmitInput>
    </>
  );
};
