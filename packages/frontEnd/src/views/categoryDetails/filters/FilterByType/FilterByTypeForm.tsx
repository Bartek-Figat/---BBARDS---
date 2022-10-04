import { SaleBadge } from "components/badge/SaleBadge";
import { ChangeEvent, useState } from "react";
import { FaBroom } from "react-icons/fa";
import { BookingBadge } from "../../../../components/badge/BookingBadge";
import { RentalBadge } from "../../../../components/badge/RentalBadge";
import { SubmitInput } from "components/buttons/Input/SubmitInput";
import { useSearchParams } from "react-router-dom";

export const FilterByTypeForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentCheckbox, setCurrentCheckbox] = useState("");

  const onChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: "Sale" | "Rent" | "Booking"
  ) => {
    let value = event.target.checked;
    if (value) {
      searchParams.set("type", type);
      setSearchParams(searchParams);
      setCurrentCheckbox(type);
    } else {
      searchParams.delete("type");
      setSearchParams(searchParams);
      setCurrentCheckbox("");
    }
  };

  return (
    <>
      <div className="mt-4 mb-4 flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center">
            <input
              id="sales"
              className="form-checkbox rounded"
              type="checkbox"
              onChange={(event) => onChange(event, "Sale")}
              checked={currentCheckbox === "Sale"}
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
              onChange={(event) => onChange(event, "Rent")}
              checked={currentCheckbox === "Rent"}
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
              onChange={(event) => onChange(event, "Booking")}
              checked={currentCheckbox === "Booking"}
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
