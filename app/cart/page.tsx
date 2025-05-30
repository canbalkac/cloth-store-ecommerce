"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cart } from "@/constants/constants";
import { Plus, Minus, RefreshCcw, X } from "lucide-react";

const CartPage = () => {
  return (
    <div className="flex flex-col mt-16 px-4">
      <div className="flex items-center">
        <p className="text-2xl font-bold">SHOPPING BAG</p>
        <div className="flex items-center justify-center gap-1 ml-4 text-gray-500">
          <div className="bg-white p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.657 0-3.104.81-4 2.027A4.978 4.978 0 008 3.75c-2.761 0-5 2.015-5 4.5 0 4.5 5 7.5 8.25 11.25C16 15.75 21 12.75 21 8.25z"
              />
            </svg>
          </div>
          <p>FAVOURITES</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-2/3 gap-6 mt-6 border-t-2 py-4 px-2">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-row border rounded shadow-md p-4 gap-6 relative"
            >
              <X className="absolute right-3 top-3 cursor-pointer text-gray-600" />
              <Image
                src={item.image}
                width={180}
                height={220}
                alt={`Cart item ${index}`}
                className="rounded object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <h2 className="text-lg font-semibold">{item.desc}</h2>
                </div>
                <div className="flex items-center gap-4">
                  <p className="w-8 text-center">L</p>
                  <div
                    className={`w-8 h-8 ${item.color} border border-gray-400`}
                  />
                  <div className="flex flex-col items-center gap-1">
                    <button className="w-8 h-8 border flex items-center justify-center">
                      <Plus size={16} />
                    </button>
                    <span>1</span>
                    <button className="w-8 h-8 border flex items-center justify-center">
                      <Minus size={16} />
                    </button>
                  </div>
                  <div className="ml-auto">
                    <RefreshCcw size={20} className="cursor-pointer" />
                  </div>
                </div>
                <div className="text-right font-semibold mt-2">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3 mt-6 px-4 py-4">
          <div className="border p-6 text-sm space-y-4 shadow-sm">
            <h2 className="text-base font-semibold">ORDER SUMMARY</h2>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$ 298</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$ 10</span>
            </div>
            <div className="border-t border-gray-500 my-2" />
            <div className="flex justify-between font-semibold">
              <span>
                TOTAL <span className="text-sm text-gray-500">(TAX INCL.)</span>
              </span>
              <span>$ 308</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-gray-500">
                I aggree to the Terms and Conditions
              </label>
            </div>
            <Button className="rounded-none bg-[#d9d9d9] w-full text-black hover:text-white cursor-pointer">
              CONTINUE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
