import React from "react";
import { IoHeartCircle } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";

const UserPanel = () => {
  return (
    <div className="flex justify-between items-center gap-2 lg:gap-8 cursor-pointer">
      <IoHeartCircle size={56} className="hidden lg:flex" />
      <div className="relative flex items-center">
        <button className="hidden lg:flex bg-black text-white py-3 px-6 rounded-full cursor-pointer">
          Cart
        </button>
        <div className="bg-black rounded-full lg:absolute lg:-right-8">
          <FiShoppingBag
            size={32}
            className="bg-white p-2 rounded-full m-2  cursor-pointer"
          />
        </div>
      </div>
      <div className="bg-black p-2 rounded-full lg:ml-8 cursor-pointer">
        <LuUserRound size={32} className="text-white" />
      </div>
    </div>
  );
};

export default UserPanel;
