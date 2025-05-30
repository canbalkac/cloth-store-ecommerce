import Link from "next/link";
import React from "react";

import { RxHamburgerMenu } from "react-icons/rx";
const Menu = () => {
  return (
    <div className="flex gap-12 justify-center items-center">
      <RxHamburgerMenu className="cursor-pointer" size={32} />
      <div className="hidden lg:flex gap-12 justify-center items-center">
        <Link href={"/"} className="text-xl cursor-pointer hover:underline">
          Home
        </Link>
        <Link
          href={"/products"}
          className="text-xl cursor-pointer hover:underline"
        >
          Products
        </Link>
      </div>
    </div>
  );
};

export default Menu;
