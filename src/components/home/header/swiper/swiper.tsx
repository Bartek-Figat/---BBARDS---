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
  let imgTitleMap = [
    {
      img: electronics,
      title: "Electronics",
    },
    {
      img: hospitality,
      title: "Hospitality",
    },
    {
      img: gadgets,
      title: "Gadgets",
    },
    {
      img: education,
      title: "Education",
    },
    {
      img: software,
      title: "Software",
    },
    {
      img: food,
      title: "Food",
    },
    {
      img: services,
      title: "Services",
    },
    {
      img: animals,
      title: "Animals",
    },
    {
      img: automobile,
      title: "Automobile",
    },
    {
      img: furniture,
      title: "Furniture",
    },
    {
      img: properties,
      title: "Properties",
    },
    {
      img: fashion,
      title: "fashion",
    },
  ];

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
          {imgTitleMap.map(({ img, title }) => {
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
