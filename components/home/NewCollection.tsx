"use client";
import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import Image from "next/image";
import { NewCollectionUrl } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

const NewCollection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-4 min-h-[384px] mt-16 max-w-[1280px]">
      <div className="flex flex-col justify-between text-black text-2xl md:w-full h-full">
        <div>
          <p className="font-bold text-5xl">
            NEW
            <br /> COLLECTION
          </p>
          <p className="text-lg text-gray-500">Summer 2025</p>
        </div>
        <Link href={"/products"}>
          <div>
            <button className="relative bg-buttonBg w-full text-lg font-bold py-2 cursor-pointer">
              Go To Shopping
              <LiaArrowRightSolid
                size={32}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </button>
          </div>
        </Link>
      </div>
      <div className="text-black text-2xl">
        <Swiper
          allowTouchMove={false}
          simulateTouch={false}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          autoHeight={true}
        >
          {NewCollectionUrl.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  draggable={false}
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover max-w-[350px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewCollection;
