import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import Cities from "../../resources/states-array.json";
import { FiSearch } from "react-icons/fi";
import clsx from "clsx";

export const SearchByCity = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filterCities = query
    ? Cities.filter((city) =>
        city.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  return (
    <div className="flex-1 z-10 max-h-9">
      <Combobox
        onChange={({ name }: { name: string }) => {
          if (name) {
            navigate(`category-details?city=${name}`);
          }
        }}
        className="shadow-2xl ring-1 ring-black/5 rounded mx-auto overflow-hidden"
        as="div"
      >
        <div className="flex items-center px-4 ">
          <FiSearch className="w-4 h-4 stroke-current text-gray-500" />
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search By State..."
            className="p-2 w-full focus:outline-none focus:ring-0 bg-transparent text:sm h-8 text-gray-800 placeholder:gray-400"
          />
        </div>
        {filterCities.length > 0 && (
          <Combobox.Options className="py-4 text-sm max-h-56 overflow-y-auto bg-white">
            {filterCities.map((city) => (
              <Combobox.Option
                key={city.code}
                value={city}
                className="cursor-pointer"
              >
                {({ active }) => (
                  <div
                    className={`px-4 py-2 space-x-1  ${
                      active ? "bg-indigo-600" : "bg-white"
                    }`}
                  >
                    {" "}
                    <span
                      className={`font-medium ${
                        active ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {city.name}
                    </span>
                    <span
                      className={`${
                        active ? "text-indigo-200" : "text-gray-400"
                      }`}
                    >
                      {" "}
                      {city.code}
                    </span>
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
        {query && filterCities.length === 0 && (
          <p className="p-4 text-sm text-gray-500 bg-white">No result found</p>
        )}
      </Combobox>
    </div>
  );
};
