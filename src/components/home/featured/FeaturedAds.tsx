import { FaEye } from "react-icons/fa";
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Thumbs,
  Controller,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { faker } from "@faker-js/faker";
import product1 from "assets/images/product/01.jpg";
import product2 from "assets/images/product/02.jpg";
import product3 from "assets/images/product/03.jpg";
import product4 from "assets/images/product/04.jpg";
import product5 from "assets/images/product/05.jpg";
import { useEffect, useState } from "react";
import "swiper/css";

export const FeaturedAds = () => {
  const [thumbsSwiper, setThumbsdSwiper] = useState<SwiperCore>();
  const [indexSlide, setIndexSlide] = useState<number | undefined>();

  // const slides = Array.from({ length: 5 }).map((element, i) => {
  //   const fakerImage = `${faker.image.technics()}?random=${Date.now()}`;
  //   console.log(fakerImage);
  //   return (
  //     <>
  //       <SwiperSlide className="p-2" key="product1">
  //         <img className="w-[100%] rounded-xl" src={fakerImage} alt="product" />
  //       </SwiperSlide>
  //       ;
  //     </>
  //   );
  // });

  useEffect(() => {
    console.log("indexSlide", indexSlide);
  }, [indexSlide]);

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
          modules={[Autoplay, A11y, Navigation, Thumbs, Controller]}
          spaceBetween={50}
          loop={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          centeredSlides={true}
          initialSlide={indexSlide || 0}
          autoplay={true}
          className="w-[100%]"
        >
          <SwiperSlide className="p-3">
            <img
              className="w-[100%] rounded-xl object-cover"
              src={product1}
              alt="product1"
            />
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <img
              className="w-[100%] rounded-xl"
              src={product2}
              alt="product1"
            />
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <img
              className="w-[100%] rounded-xl"
              src={product3}
              alt="product1"
            />
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <img
              className="w-[100%] rounded-xl"
              src={product4}
              alt="product1"
            />
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <img
              className="w-[100%] rounded-xl"
              src={product5}
              alt="product1"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsdSwiper}
          slidesPerView={4}
          slidesPerGroup={5}
          spaceBetween={6}
          loop={true}
          watchSlidesProgress
          modules={[Autoplay, A11y, Navigation, Thumbs, Controller]}
          autoplay={true}
          onSlideChangeTransitionEnd={(swiper) =>
            setIndexSlide(swiper.activeIndex)
          }
          className="w-[100%] p-2"
          // onSlideChange={(swiper) => setIndexSlide(swiper.activeIndex)}
        >
          <SwiperSlide className="p-2">
            <img className="w-[100%] rounded-xl m-1" src={product1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img className="w-[100%] rounded-xl m-1" src={product2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img className="w-[100%] rounded-xl m-1" src={product3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img className="w-[100%] rounded-xl m-1" src={product4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img className="w-[100%] rounded-xl m-1" src={product5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
