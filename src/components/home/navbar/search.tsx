import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import clsx from "clsx";

export const Search: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={clsx("w-full sm:rounded-full flex-1", className)}>
      <form className="w-full">
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
  );
};
