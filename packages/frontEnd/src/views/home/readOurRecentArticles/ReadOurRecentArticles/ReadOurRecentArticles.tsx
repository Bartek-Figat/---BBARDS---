import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Card from "../Card/Card";
import LinkSection from "../LinkSection/LinkSection";
import { data } from "../data";

export const ReadOurRecentArticles = () => {
  return (
    <section className="flex flex-col justify-center  -translate-y-40">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Read Our <span className="text-dark-blue">Recent Articles</span>
      </h2>
      <p className="w-full sm:w-[600px] mx-auto mb-10 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur illum
        vel sunt libero voluptatum repudiandae veniam maxime tenetur.
      </p>
      <div className="container max-w-[1100px] mx-auto px-10">
        <Swiper
          className="px-5 pb-9"
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
            550: {
              slidesPerView: 1.5,
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
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <LinkSection to="#">view all blogs</LinkSection>
    </section>
  );
};
