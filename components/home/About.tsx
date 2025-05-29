"use client";
import Image from "next/image";
import React from "react";

const images = [
  "/about/look1.png",
  "/about/look2.png",
  "/about/look3.png",
  "/about/look4.png",
];
const About = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mt-16 px-4">
        <h1 className="text-xl md:text-2xl xl:text-5xl text-center">
          OUR APPROACH TO FASHION DESIGN
        </h1>
        <p className="max-w-[685px] mt-6 text-center leading-loose tracking-wide text-gray-700">
          at elegant vogue, we blend creativity with craftsmanship to create
          fashion that transcends trends and stands the test of time each design
          is meticulosly crafted, ensuring the highest quality exquisite finish
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 px-4">
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative w-full h-[400px] md:h-[500px] ${
              i % 2 === 0 ? "mt-0" : "mt-12"
            }`}
          >
            <Image
              src={src}
              alt={`Look ${i + 1}`}
              fill
              quality={100}
              className="object-cover"
              sizes="(max-width: 768px) 100dvw, 300px"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
