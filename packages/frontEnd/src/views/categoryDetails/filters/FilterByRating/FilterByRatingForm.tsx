import { ChangeEvent, useState } from "react";
import { FaBroom, FaRegStar, FaStar } from "react-icons/fa";
import { SubmitInput } from "components/buttons/Input/SubmitInput";
import { useSearchParams } from "react-router-dom";

export const FilterByRatingForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentCheckbox, setCurrentCheckbox] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>, rate: "5") => {
    let value = event.target.checked;
    if (value) {
      searchParams.set("rate", rate);
      setSearchParams(searchParams);
      setCurrentCheckbox(rate);
    } else {
      searchParams.delete("rate");
      setSearchParams(searchParams);
      setCurrentCheckbox("");
    }
  };

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
              onChange={(event) => onChange(event, "5")}
              checked={currentCheckbox === "5"}
            />
            <label htmlFor="five" className="ml-2 flex">
              {getStars(5)}
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
