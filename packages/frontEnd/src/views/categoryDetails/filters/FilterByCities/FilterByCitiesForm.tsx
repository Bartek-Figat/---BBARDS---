import { FC } from "react";
import { FaBroom } from "react-icons/fa";
import { SubmitInput } from "components/buttons/Input/SubmitInput";
import { UseFormRegister } from "react-hook-form";

export const FilterByCitiesForm: FC<UseFormRegister<any>> = (register) => {
  const cityInputs = [
    { name: "Los Angeles" },
    { name: "San Francisco" },
    { name: "California" },
    { name: "Manhattan" },
    { name: "Baltimore" },
  ];

  return (
    <>
      <form className="mt-4 mb-4 flex flex-col">
        <input
          id="five"
          className="form-search rounded border-[1px] border-gray-mercury p-2 text-cold-gray"
          type="search"
          value="Search"
        />
        {cityInputs.map(({ name }, index) => {
          return (
            <div className="flex justify-between mt-2" key={index}>
              <div className="flex items-center">
                <input
                  id={name}
                  className="form-checkbox rounded"
                  type="radio"
                  {...register("city")}
                  value={name}
                />
                <label htmlFor={name} className="ml-2">
                  {name}
                </label>
              </div>
              <p className="text-cold-gray">({15})</p>
            </div>
          );
        })}
      </form>
      <SubmitInput variant="outlined">
        <FaBroom /> Clear filter
      </SubmitInput>
    </>
  );
};
