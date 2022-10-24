import { AiOutlineSearch } from "react-icons/ai";

export const BlogSearch = () => {
  return (
    <div className="bg-gray-chalk rounded-lg w-full border md:max-w-xl px-3.5 mb-9 py-6">
      <div className="w-full  border-b mb-4 pb-3.5">
        <p className="text-xl font-bold ">SEARCH</p>
      </div>

      <form className="w-full">
        <div className="relative flex rounded-full border-2 border-dark-blue bg-white ">
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="w-full h-14 pl-4 text-ms rounded-full outline-0 "
          />
          <button type="submit" className="right ">
            <AiOutlineSearch className=" bg-dark-blue text-white font-light rounded-full w-12 h-12 mr-1 px-3.5 " />
          </button>
        </div>
      </form>
    </div>
  );
};
