// @ts-nocheck
import { FaEye } from "react-icons/fa";
import { A11y, Autoplay, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from "assets/images/product/01.jpg";
import product2 from "assets/images/product/02.jpg";
import product3 from "assets/images/product/03.jpg";
import product4 from "assets/images/product/04.jpg";
import product5 from "assets/images/product/05.jpg";
import { useState } from "react";

export const FeaturedAds = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container mt-44 flex">
      <div className="w-1/2">
        <hgroup>
          <h2>Find your needs in our best Featured Ads</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur
            illum vel sunt libero voluptatum repudiandae veniam maxime tenetur
            fugiat eaque alias nobis doloremque culpa nam.
          </p>
        </hgroup>
        <button className="bg-[#0044bb] border-2 border-[#0044bb] hover:bg-[#0044bb] text-white px-5 py-3 rounded-md uppercase font-medium flex justify-center items-center mt-11">
          <FaEye className="text-xl mr-2" />
          Show all ads
        </button>
      </div>
      <div className="w-1/2">
        <Swiper
          modules={[Autoplay, A11y, Navigation, Thumbs]}
          spaceBetween={16}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          centeredSlides={true}
          loop={true}
          className="w-full"
        >
          <SwiperSlide>
            <img className="w-full" src={product1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={product2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={product3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={product4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={product5} alt="" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          loop={true}
          watchSlidesProgress={true}
          modules={[Autoplay, A11y, Navigation, Thumbs]}
          autoplay={true}
          slidesPerGroup={3}
          className=""
        >
          <SwiperSlide className="w-44">
            <img className="w-44 h-20" src={product1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-44">
            <img className="w-44" src={product2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-44">
            <img className="w-44" src={product3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-44">
            <img className="w-44" src={product4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-44">
            <img className="w-44" src={product5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
