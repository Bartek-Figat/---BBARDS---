import { FiSearch } from "react-icons/fi";

export const Search: React.FC = () => {
  return (
    <form className="w-full max-w-xs mr-2">
      <div className="relative">
        <input
          type="search"
          name="search"
          placeholder="Search..."
          className="w-full h-10 pl-10 pr-5 text-sm rounded-lg appearance-none focus:outline-none border"
        />
        <button type="submit" className="absolute top-0 left-0 mt-3 ml-4">
          <FiSearch className="w-4 h-4 stroke-current" />
        </button>
      </div>
    </form>
  );
};
