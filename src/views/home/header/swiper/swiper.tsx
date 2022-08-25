import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ISlideImages } from "./Slides";
import "swiper/css";

interface Props {
  images: ISlideImages[];
}

export function SwiperContainer({ images }: Props) {
  return (
    <div className="md:container relative">
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
          {Object.values(images).map(({ img, title }) => {
            return (
              <SwiperSlide key={title}>
                <div className="bg-[#dffbff] flex flex-col justify-center items-center rounded-lg border-b-[2px] border-[#0044bb] py-7">
                  <img className="h-[50px]" src={img} alt={title} />
                  <p className="text-base mt-5 font-medium">{title}</p>
                  <p className="text-[#0044bb] text-sm mt-1 font-medium">
                    (4,521) ads
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
