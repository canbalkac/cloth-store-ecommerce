"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { XIVCollectionsURL } from "@/constants/constants";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const XIVCollections = () => {
  return (
    <div className="w-full mt-16 max-w-[1280px]">
      <p className="font-bold md:text-2xl lg:text-5xl">XIV</p>
      <p className="font-bold md:text-2xl lg:text-5xl">COLLECTIONS</p>
      <p className="font-bold md:text-2xl lg:text-5xl">23-24</p>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          autoHeight={true}
        >
          {XIVCollectionsURL.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center w-full h-full">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={366}
                  height={376}
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
        </Swiper>
      </div>
      <Link href="#" className="flex flex-col items-center justify-center mt-6">
        <p>More</p>
        <IoIosArrowDown />
      </Link>
    </div>
  );
};

export default XIVCollections;
