import { Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { AdSlide } from "./adSlide";
import { slidesMap } from "./Slides";

export default function SwiperContainer() {
  return (
    <div className="container relative">
      <div className="absolute -bottom-24 w-full">
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            940: {
              slidesPerView: 6,
            },
          }}
          autoplay={{ delay: 3000 }}
        >
          {slidesMap.map(({ img, title }) => {
            return (
              <SwiperSlide>
                <AdSlide img={img} title={title} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
