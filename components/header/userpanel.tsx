import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import Link from "next/link";

const UserPanel = () => {
  return (
    <div className="flex justify-between items-center gap-2 lg:gap-8 cursor-pointer">
      <Link href={"/cart"} className="relative flex items-center">
        <button className="hidden lg:flex bg-black text-white py-3 px-6 rounded-full cursor-pointer">
          Cart
        </button>
        <div className="bg-black rounded-full lg:absolute lg:-right-8">
          <FiShoppingBag
            size={32}
            className="bg-white p-2 rounded-full m-2  cursor-pointer"
          />
        </div>
      </Link>
      <Link
        href="/account"
        className="bg-black p-2 rounded-full lg:ml-8 cursor-pointer"
      >
        <LuUserRound size={32} className="text-white" />
      </Link>
    </div>
  );
};

export default UserPanel;
