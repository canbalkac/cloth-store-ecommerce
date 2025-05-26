import React from "react";

import { RxHamburgerMenu } from "react-icons/rx";
const Menu = () => {
  return (
    <div className="flex gap-12 justify-center items-center">
      <RxHamburgerMenu className="cursor-pointer" size={32} />
      <div className="hidden lg:flex gap-12 justify-center items-center">
        <p className="text-xl cursor-pointer hover:underline">Home</p>
        <p className="text-xl cursor-pointer hover:underline">Collections</p>
        <p className="text-xl cursor-pointer hover:underline">New</p>
      </div>
    </div>
  );
};

export default Menu;
