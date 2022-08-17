import { FaEye } from "react-icons/fa";
import SwiperCore, {
  A11y,
  Autoplay,
  Controller,
  Navigation,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import product1 from "assets/images/product/01.jpg";
import product2 from "assets/images/product/02.jpg";
import product3 from "assets/images/product/03.jpg";
import product4 from "assets/images/product/04.jpg";
import product5 from "assets/images/product/05.jpg";
import { ReactNode, useState } from "react";
import "swiper/css";
import clsx from "clsx";

interface SlideContentProps {
  children: ReactNode;
}

function SlideContent({ children }: SlideContentProps) {
  const swiperSlide = useSwiperSlide();

  return (
    <div
      className={clsx(
        "p-1",
        swiperSlide.isActive && "border-2 border-[#0044bb] rounded-lg"
      )}
    >
      {children}
    </div>
  );
}
export const FeaturedAds = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

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
          spaceBetween={6}
          loop={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          loopedSlides={4}
          autoplay={true}
          className="w-[100%]"
        >
          <SwiperSlide className="">
            <img
              className="w-[100%] rounded-xl"
              src={product1}
              alt="product1"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              className="w-[100%] rounded-xl"
              src={product2}
              alt="product1"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              className="w-[100%] rounded-xl"
              src={product3}
              alt="product1"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              className="w-[100%] rounded-xl"
              src={product4}
              alt="product1"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              className="w-[100%] rounded-xl"
              src={product5}
              alt="product1"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={6}
          loop={true}
          watchSlidesProgress={true}
          modules={[Autoplay, A11y, Navigation, Thumbs, Controller]}
          loopedSlides={4}
          centeredSlides={true}
          autoplay={true}
          className="w-[100%]"
        >
          <SwiperSlide className="p-2">
            <SlideContent>
              <img className="w-[100%] rounded" src={product1} alt="" />
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <SlideContent>
              <img className="w-[100%] rounded" src={product2} alt="" />
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <SlideContent>
              <img className="w-[100%] rounded" src={product3} alt="" />
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <SlideContent>
              <img className="w-[100%] rounded" src={product4} alt="" />
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <SlideContent>
              <img className="w-[100%] rounded" src={product5} alt="" />
            </SlideContent>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
