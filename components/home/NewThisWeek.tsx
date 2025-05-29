"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NewThisWeekUrl } from "@/constants/constants";
import Image from "next/image";
import SwiperNavButton from "../swiperUi/SwiperNavButton";

const NewThisWeek = () => {
  return (
    <div className="w-full mt-16 max-w-[1280px]">
      <p className="font-bold md:text-2xl lg:text-5xl">NEW</p>
      <p className="font-bold md:text-2xl lg:text-5xl">THIS WEEK</p>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1266: { slidesPerView: 4 },
          }}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          autoHeight={true}
        >
          {NewThisWeekUrl.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center w-full h-full">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={400}
                  quality={100}
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: " 1 / 1" }}
                />
                <div className="w-full px-2">
                  <p className="text-gray-600">{item.title}</p>
                  <div className="flex justify-between text-sm">
                    <p>{item.desc}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
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
