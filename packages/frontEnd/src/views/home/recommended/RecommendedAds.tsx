import { FaEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import { ProductCard } from "./ProductCard";
import { productsMap } from "./Products";

export const RecommendedAds = () => {
  return (
    <section className="container mt-32  px-12">
      <hgroup>
        <h2 className="text-4xl font-bold text-center">
          Our Recommend
          <span className="text-dark-blue italic"> Ads</span>
        </h2>
        <p className="text-lg text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur
          illum vel sunt libero voluptatum repudiandae veniam maxime tenetur
        </p>
      </hgroup>

      <div className="w-full mt-11">
        <Swiper
          modules={[Autoplay, A11y]}
          slidesPerView={1}
          spaceBetween={36}
          autoplay={true}
          breakpoints={{
            1536: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {productsMap.map(({ img, title, price, type, location, time }) => {
            return (
              <SwiperSlide key={title}>
                <ProductCard
                  img={img}
                  title={title}
                  price={price}
                  type={type}
                  location={location}
                  time={time}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <button className="mx-auto bg-[#0044bb] border-2 border-[#0044bb] hover:bg-[#0044bb] text-white px-5 py-3 rounded-md uppercase font-medium flex justify-center items-center mt-11">
        <FaEye className="text-xl mr-2" />
        view all featured
      </button>
    </section>
  );
};
