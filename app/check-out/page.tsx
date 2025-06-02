import React from "react";
import InfoTabs from "./_components/InfoTabs";
import Image from "next/image";
import { cart } from "@/constants/constants";
import { Button } from "@/components/ui/button";

const CheckOutPage = () => {
  return (
    <div className="w-full mt-8 flex flex-col sm:flex-row">
      <div className="w-1/2">
        <h1 className="font-bold text-2xl md:text-5xl">CHECKOUT</h1>
        <InfoTabs />
      </div>
      <div className="mt-8 ml-0 sm:mt-0 sm:ml-12 border-2 p-8">
        <p className="font-bold">YOUR ORDER</p>
        <div className="flex flex-col mt-8 gap-3">
          {cart.map((item, index) => (
            <div key={index} className="flex flex-row">
              <Image
                src={item.image}
                alt={"Check Out item " + index + 1}
                width={120}
                height={120}
              />
              <div className="flex flex-col ml-2 w-[200px]">
                <div className="flex flex-row justify-between">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-sm underline cursor-pointer">Change</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-sm text-gray-600">Black/{item.size}</p>
                </div>
                <div className="flex flex-row justify-between mt-18">
                  <p className="text-sm">{"(" + item.count + ")"}</p>
                  <p className="text-sm">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-300 h-0.5 mt-4" />
        <div className="flex justify-between w-full mt-4">
          <p className="font-semibold text-sm">Subtotal</p>
          <p className="font-semibold text-sm">$ 298</p>
        </div>
        <div className="flex justify-between w-full mt-4 text-center">
          <p className="font-semibold text-sm">Shipping</p>
          <p className="text-xs text-gray-600">Calculated at next step</p>
        </div>
        <div className="w-full bg-gray-300 h-0.5 mt-4" />
        <div className="flex justify-between w-full mt-4 text-center">
          <p className="font-semibold text-sm">Total</p>
          <p className="text-xs text-gray-600">$ 298</p>
        </div>
        <div className="w-full bg-gray-300 h-0.5 mt-4" />
        <Button className="w-full rounded-none mt-4 cursor-pointer hover:bg-gray-700">
          CHECK OUT
        </Button>
      </div>
    </div>
  );
};

export default CheckOutPage;
