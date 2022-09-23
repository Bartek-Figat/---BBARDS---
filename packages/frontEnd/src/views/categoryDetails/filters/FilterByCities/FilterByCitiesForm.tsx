import { ChangeEvent, useState } from "react";
import { FaBroom } from "react-icons/fa";
import { SubmitInput } from "components/buttons/Input/SubmitInput";
import { useSearchParams } from "react-router-dom";

export const FilterByCitiesForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentCheckbox, setCurrentCheckbox] = useState("");

  const onChange = (
    event: ChangeEvent<HTMLInputElement>,
    city: "Los Angeles" | "San Francisco"
  ) => {
    let value = event.target.checked;
    if (value) {
      searchParams.set("city", city);
      setSearchParams(searchParams);
      setCurrentCheckbox(city);
    } else {
      searchParams.delete("city");
      setSearchParams(searchParams);
      setCurrentCheckbox("");
    }
  };
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
              id="los-angeles"
              className="form-checkbox rounded"
              type="checkbox"
              onChange={(event) => onChange(event, "Los Angeles")}
              checked={currentCheckbox === "Los Angeles"}
            />
            <label htmlFor="los-angeles" className="ml-2 flex">
              Los Angeles
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="san-francisco"
              className="form-checkbox rounded"
              type="checkbox"
              onChange={(event) => onChange(event, "San Francisco")}
              checked={currentCheckbox === "San Francisco"}
            />
            <label htmlFor="san-francisco" className="ml-2 flex">
              San Francisco
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="california"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="california" className="ml-2 flex">
              California
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="manhattan"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="manhattan" className="ml-2 flex">
              Manhattan
            </label>
          </div>

          <p className="text-cold-gray">({15})</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              id="baltimore"
              className="form-checkbox rounded"
              type="checkbox"
            />
            <label htmlFor="baltimore" className="ml-2 flex">
              Baltimore
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
