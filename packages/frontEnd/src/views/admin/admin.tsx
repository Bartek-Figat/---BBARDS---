import React from "react";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="w-[70vw] py-3 px-3 bg-white rounded-lg">
        <div className="w-full relative">
          <h4 className="font-bold mt-2 text-lg border-b pb-3 before:content-[''] before:absolute before:w-[10%] before:h-0.5 before:bg-dark-blue before:bottom-[-1px]">
            Newsletter
          </h4>
        </div>
        <div className="pt-5">
          <p className="text-cold-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            aspernatur quis quo reiciendis maxime dolores eveniet sit asperiores
            labore, necessitatibus reprehenderit accusantium excepturi hic
            accusamus provident optio culpa doloremque facere!
          </p>
        </div>
      </div>
      <div className="w-[70vw] py-3 px-3 bg-white rounded-lg my-5">
        <div className="w-full relative">
          <h4 className="font-bold mt-2 text-lg border-b pb-3 before:content-[''] before:absolute before:w-[10%] before:h-0.5 before:bg-dark-blue before:bottom-[-1px]">
            Reviews
          </h4>
        </div>
        <div className="pt-5">
          <p className="text-cold-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            aspernatur quis quo reiciendis maxime dolores eveniet sit asperiores
            labore, necessitatibus reprehenderit accusantium excepturi hic
            accusamus provident optio culpa doloremque facere!
          </p>
        </div>
      </div>
    </div>
  );
};
