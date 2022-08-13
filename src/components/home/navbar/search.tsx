import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";

export const Search: React.FC = () => {
  return (
    <div>
      <div className=" w-full sm:rounded-full flex-1 ml-10 hidden lg:flex">
        <form className="w-full ">
          <div className="relative flex rounded-lg bg-[#f5f5fd] items-center">
            <input
              type="search"
              name="search"
              placeholder="Search, Whatever You Needs..."
              className="w-full h-10 pl-10 text-sm appearance-none focus:outline-none bg-[#f5f5fd] rounded-lg"
            />
            <button type="submit" className="absolute top-0 left-0 mt-3 ml-4">
              <FiSearch className="w-4 h-4 stroke-current" />
            </button>
            <GoSettings className="w-4 h-4 stroke-current mr-4" />
          </div>
        </form>
      </div>
      <div>
        <button
          type="submit"
          className="rounded-full mt-3 ml-4 bg-[#f5f5fd] lg:hidden h-10 w-10"
        >
          <FiSearch className="w-4 h-4 stroke-current m-auto" />
        </button>
      </div>
    </div>
  );
};
