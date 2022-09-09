import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Card from "../Card/Card";
import { data } from "../data";

export const ReadOurRecentArticles = () => {
  return (
    <section className="container max-w-[1100px] mx-auto px-10 mt-32">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={40}
        breakpoints={{
          1100: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {data.map(({ author, category, date, id, text, title }) => {
          return (
            <SwiperSlide key={id}>
              <Card
                author={author}
                category={category}
                date={date}
                text={text}
                title={title}
                id={id}
              ></Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
