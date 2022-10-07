import { FaEye } from "react-icons/fa";
import { ProductCard } from "./ProductCard";
import { productsMap } from "./Products";

export const TrendingAds = () => {
  return (
    <section className="container mt-32 px-16">
      <hgroup>
        <h2 className="text-4xl font-bold text-center">
          Popular Trending
          <span className="text-dark-blue italic"> Ads</span>
        </h2>
        <p className="text-lg text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur
          illum vel sunt libero voluptatum repudiandae veniam maxime tenetur
        </p>
      </hgroup>

      <div className="flex flex-col items-center xl:columns-2 xl:block mt-11">
        {productsMap.map(({ img, title, price, type, location, time }) => {
          return (
            <ProductCard
              key={title}
              img={img}
              title={title}
              price={price}
              type={type}
              location={location}
              time={time}
            />
          );
        })}
      </div>

      <button className="mx-auto bg-[#0044bb] border-2 border-[#0044bb] hover:bg-[#0044bb] text-white px-5 py-3 rounded-md uppercase font-medium flex justify-center items-center mt-11">
        <FaEye className="text-xl mr-2" />
        view all trend
      </button>
    </section>
  );
};
