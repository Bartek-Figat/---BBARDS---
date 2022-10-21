import { AiOutlineSearch } from "react-icons/ai";

export const BlogSearch = () => {
  return (
    <div className="bg-gray-chalk rounded-lg w-full border md:max-w-xl p-3.5 mb-9">
      <div className="w-full  border-b mb-4 pb-3.5">
        <p className="text-xl font-bold ">SEARCH</p>
      </div>

      <form className="w-full">
        <div className="relative flex rounded-lg rounded-3xl border-2 border-dark-blue bg-white ">
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="w-full h-14 pl-4 text-ms rounded-3xl"
          />
          <button type="submit" className="right">
            <AiOutlineSearch className="p-2 bg-dark-blue text-white rounded-full w-10 h-10 mr-2" />
          </button>
        </div>
      </form>
    </div>
  );
};
