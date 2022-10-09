export const AddPost = () => {
  return (
    <div className="w-100%">
      <div className="w-full p-5 bg-white rounded-lg text-sm mb-5">
        <h2 className="font-bold relative mt-2 text-lg border-b pb-2 before:content-[''] before:absolute before:w-1/6 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]">
          Ad Information
        </h2>
        <form className="my-5">
          <div className="mb-4">
            <label className="block text-cold-gray text-sm font-bold mb-2">
              Product Name
            </label>
            <input
              className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
              id="username"
              type="text"
              placeholder="Type Your Product Title Here"
            />
          </div>
          <div className="mb-4">
            <label className="block text-cold-gray text-sm font-bold mb-2">
              Product Image
            </label>
            <input
              className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
              id="username"
              type="file"
              placeholder="Wybierz plik"
            />
          </div>
          <div className="mb-4">
            <label className="block text-cold-gray text-sm font-bold mb-2">
              Product Name
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
              >
                <option>Select Category</option>
                <option>property</option>
                <option>electronics</option>
                <option>automobiles</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-cold-gray text-sm font-bold mb-2">
              Product Name
            </label>
            <input
              className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
              id="username"
              type="number"
              placeholder="0"
            />
          </div>
          <div className="flex justify-between mb-4 tablet:flex-col">
            <div className="tablet:mb-4">
              <label className="block text-cold-gray text-sm font-bold mb-2">
                Price Condition
              </label>
              <ul>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label>Fixed</label>
                </li>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label>Negotibale</label>
                </li>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label>Daily</label>
                </li>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label>Weekly</label>
                </li>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label>Monthly</label>
                </li>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label>Yearly</label>
                </li>
              </ul>
            </div>
            <div className="tablet:mb-4">
              <label className="block text-cold-gray text-sm font-bold mb-2">
                Ad Category
              </label>
              <ul>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label className="bg-[#dc3545] text-white py-[1px] px-[2px] rounded mb-2">
                    Sale
                  </label>
                </li>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label className="bg-[#03a70c] text-white py-[1px] px-[2px] rounded mb-2">
                    Rent
                  </label>
                </li>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label className="bg-[#7209af] text-white py-[1px] px-[2px] rounded">
                    Booking
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <label className="block text-cold-gray text-sm font-bold mb-2">
                Product Condition
              </label>
              <ul>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label>Used</label>
                </li>
                <li className="flex items-center">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <label>New</label>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <label className="block text-cold-gray text-sm font-bold mb-2">
              Ad Description
            </label>
            <textarea
              placeholder="Describe Your Meassage"
              className="bg-gray-chalk appearance-none w-full h-[20vh] p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-cold-gray text-sm font-bold mb-2">
              Ad Tag
            </label>
            <textarea
              placeholder="Maximum Of 15 Keywords"
              className="bg-gray-chalk appearance-none w-full h-[20vh] p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="w-full p-5 bg-white rounded-lg text-sm mb-5">
        <h2 className="font-bold relative mt-2 text-lg border-b pb-2 before:content-[''] before:absolute before:w-1/6 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]">
          Author Information
        </h2>
        <form className="my-5">
          <div className="mb-4">
            <label className="block text-cold-gray text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-cold-gray text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-cold-gray text-sm font-bold mb-2">
              Number
            </label>
            <input
              className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
              id="number"
              type="number"
              placeholder="Your Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-cold-gray text-sm font-bold mb-2">
              Product Name
            </label>
            <input
              className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
              id="adress"
              type="text"
              placeholder="Your Adress"
            />
          </div>
        </form>
      </div>
      <div className="w-full p-5 bg-white rounded-lg text-sm mb-5">
        <h2 className="font-bold relative mt-2 text-lg border-b pb-2 before:content-[''] before:absolute before:w-1/6 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]">
          Plan Information
        </h2>
        <ul className="w-full">
          <li className="flex items-center py-4 border-b w-full tablet:flex-col">
            <div className="w-[80%] tablet:w-[100%] tablet:mb-2">
              <h3 className="font-bold mb-3">
                FREE PLAN -
                <span className="font-medium text-xs">
                  {" "}
                  Submit 5 Ad Listings
                </span>
              </h3>
              <p className="text-cold-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus
                minus Eaque corporis accusantium incidunt officiis deleniti.
              </p>
            </div>
            <div className="w-[20%] flex flex-col items-end tablet:w-[100%] tablet:items-start">
              <h3 className="font-bold text-lg">$00.00</h3>
              <button className="border-[1.5px] py-1 px-2 rounded border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white duration-500">
                SELECT
              </button>
            </div>
          </li>
          <li className="flex items-center py-4 border-b w-full tablet:flex-col">
            <div className="w-[80%] tablet:w-[100%] tablet:mb-2">
              <h3 className="font-bold mb-3">
                SSTANDERD PLAN -
                <span className="font-medium text-xs">
                  {" "}
                  Submit 10 Ad Listings
                </span>
              </h3>
              <p className="text-cold-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus
                minus Eaque corporis accusantium incidunt officiis deleniti.
              </p>
            </div>
            <div className="w-[20%] flex flex-col items-end tablet:w-[100%] tablet:items-start">
              <h3 className="font-bold text-lg">$23.00</h3>
              <button className="border-[1.5px] py-1 px-2 rounded border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white duration-500">
                SELECT
              </button>
            </div>
          </li>
          <li className="flex items-center py-4 w-full tablet:flex-col">
            <div className="w-[80%] tablet:w-[100%] tablet:mb-2">
              <h3 className="font-bold mb-3">
                PREMMIUM PLAN -
                <span className="font-medium text-xs">
                  {" "}
                  Unlimited Ad Listings
                </span>
              </h3>
              <p className="text-cold-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus
                minus Eaque corporis accusantium incidunt officiis deleniti.
              </p>
            </div>
            <div className="w-[20%] flex flex-col items-end tablet:w-[100%] tablet:items-start">
              <h3 className="font-bold text-lg">$43.00</h3>
              <button className="border-[1.5px] py-1 px-2 rounded border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white duration-500">
                SELECT
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
