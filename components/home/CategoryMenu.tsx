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
    <div className="flex flex-col mt-16 max-w-[1280px]">
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
      <div className="flex items-center bg-buttonBg mt-4 w-full md:w-[300px] px-2">
        <CiSearch className="text-gray-600 text-2xl" />
        <input
          className="placeholder:absolute placeholder:text-gray-600 p-2 placeholder:right-2 placeholder:top-1/2 placeholder:-translate-y-1/2 w-full focus:outline-none focus:shadow-none"
          type="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default CategoryMenu;
