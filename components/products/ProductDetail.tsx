"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { products } from "@/constants/constants";

const colors = [
  "bg-white border",
  "bg-black",
  "bg-gray-400",
  "bg-gray-300",
  "bg-emerald-400",
  "bg-blue-200",
];

const sizes = ["XS", "S", "M", "L", "XL", "2X"];

const ProductDetailPage = () => {
  const params = useParams();
  const slug = Number(params.slug);
  const product = products[slug];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full h-auto justify-center mt-32 px-4">
      {/* Main Image */}
      <div className="flex-shrink-0">
        <Image
          src={product.image[selectedImageIndex]}
          width={500}
          height={600}
          quality={100}
          alt="product"
          className="object-contain"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex md:flex-col gap-4 ml-6 my-4 md:my-0">
        {product.image.map((img, index) => {
          const isActive = selectedImageIndex === index;
          return (
            <div
              key={index}
              className={`w-16 h-20 relative cursor-pointer border rounded ${
                isActive ? "border-black" : "opacity-60"
              }`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image
                src={img}
                alt="thumbnail"
                fill
                className="object-cover rounded"
              />
            </div>
          );
        })}
      </div>

      {/* Product Info */}
      <div className="md:ml-8 border border-[#D9D9D9] p-6 w-full max-w-sm">
        <h1 className="text-xl font-bold mb-1">{product.title}</h1>
        <h2 className="text-lg mb-2">{product.price}</h2>
        <p className="text-sm mb-4 text-gray-600">MRP incl. of all taxes</p>
        <p className="text-sm mb-6 text-gray-800">{product.desc}</p>

        <p className="mb-2">Color</p>
        <div className="flex gap-3 mb-6">
          {colors.map((color, index) => (
            <div
              className={`w-10 h-10 ${color} rounded cursor-pointer border`}
              key={index}
            />
          ))}
        </div>

        <p className="mb-1">Size</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {sizes.map((size, index) => (
            <div
              key={index}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center text-sm font-semibold cursor-pointer"
            >
              {size}
            </div>
          ))}
        </div>
        <p className="text-xs mb-8">
          FIND YOUR SIZE |{" "}
          <span className="underline cursor-pointer">MEASUREMENT GUIDE</span>
        </p>

        <Button className="w-full rounded-none bg-[#D9D9D9] text-black hover:text-white cursor-pointer">
          ADD
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
