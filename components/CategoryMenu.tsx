import React from "react";
import { CiSearch } from "react-icons/ci";

const CategoryMenu = () => {
  const categories = [
    {
      title: "MEN",
    },
    {
      title: "WOMEN",
    },
    {
      title: "KIDS",
    },
  ];
  return (
    <div className="flex flex-col mt-16">
      <div className="max-w-16">
        {categories.map((item, index) => (
          <p
            className="text-gray-700 cursor-pointer hover:underline"
            key={index}
          >
            {item.title}
          </p>
        ))}
      </div>
      <div className="relative mt-4">
        <CiSearch className="absolute text-gray-600 text-2xl top-1/2 left-2 transform -translate-y-1/2" />
        <input
          className="bg-[#D9D9D9] placeholder:absolute placeholder:text-gray-600 p-2 placeholder:right-2 placeholder:top-1/2 placeholder:-translate-y-1/2 min-w-full md:min-w-16"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default CategoryMenu;
