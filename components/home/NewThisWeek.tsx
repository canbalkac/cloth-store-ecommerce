"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { NewThisWeekUrl } from "@/constants/constants";
import Image from "next/image";
import SwiperNavButton from "../swiperUi/SwiperNavButton";

const NewThisWeek = () => {
  return (
    <div className="mt-16 max-w-[1280px]">
      <p className="font-bold md:text-2xl lg:text-5xl">NEW</p>
      <p className="font-bold md:text-2xl lg:text-5xl">THIS WEEK</p>
      <div>
        <Swiper
          autoHeight={true}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper mt-4"
        >
          {NewThisWeekUrl.map((item, index) => (
            <SwiperSlide key={index} className="flex flex-col">
              <Image
                src={item.image}
                alt={item.alt}
                width={300}
                height={250}
                className="mx-auto"
              />
              <div>
                <p className="ml-3 text-gray-600">{item.title}</p>
              </div>
              <div className="flex mx-3 text-sm justify-between">
                <p>{item.desc}</p>
                <p>{item.price}</p>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButton />
        </Swiper>
      </div>
    </div>
  );
};

export default NewThisWeek;
