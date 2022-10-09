export const PlanInformation = () => {
  return (
    <div className="w-full p-5 bg-white rounded-lg text-sm mb-5">
      <h2 className="font-bold relative mt-2 text-lg border-b pb-2 before:content-[''] before:absolute before:w-1/6 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]">
        Plan Information
      </h2>
      <ul className="w-full">
        <li className="flex items-center py-4 border-b w-full tablet:flex-col">
          <div className="w-[80%] tablet:w-[100%] tablet:mb-2">
            <h3 className="font-bold mb-3">
              FREE PLAN -
              <span className="font-medium text-xs"> Submit 5 Ad Listings</span>
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
  );
};
