import { Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { AdSlide } from "./adSlide";
import electronics from "assets/images/suggest/electronics.png";
import hospitality from "assets/images/suggest/hospitality.png";
import gadgets from "assets/images/suggest/gadgets.png";
import education from "assets/images/suggest/education.png";
import software from "assets/images/suggest/software.png";
import food from "assets/images/suggest/food.png";
import services from "assets/images/suggest/services.png";
import animals from "assets/images/suggest/animals.png";
import automobile from "assets/images/suggest/automobile.png";
import furniture from "assets/images/suggest/furniture.png";
import properties from "assets/images/suggest/properties.png";
import fashion from "assets/images/suggest/fashion.png";

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
          <SwiperSlide>
            <AdSlide img={electronics} title={"Electronics"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={hospitality} title={"Hospitality"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={gadgets} title={"Gadgets"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={education} title={"Education"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={software} title={"Software"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={food} title={"Food"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={services} title={"Services"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={animals} title={"Animals"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={automobile} title={"Automobile"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={furniture} title={"Furniture"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={properties} title={"Properties"} />
          </SwiperSlide>
          <SwiperSlide>
            <AdSlide img={fashion} title={"Fashion"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
