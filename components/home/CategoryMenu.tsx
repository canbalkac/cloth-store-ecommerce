import React from "react";
import Search from "../ui/Search";

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
      <Search />
    </div>
  );
};

export default CategoryMenu;
