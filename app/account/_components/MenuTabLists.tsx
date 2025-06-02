import React from "react";
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
const accountMenus = [
  {
    title: "Account Overview",
    icon: <CiUser size={24} />,
    value: "account-overview",
  },
  { title: "My Orders", icon: <CiCalendar size={24} />, value: "my-orders" },
  {
    title: "Change Password",
    icon: <CiLock size={24} />,
    value: "change-password",
  },
  {
    title: "Payment Method",
    icon: <CiCreditCard1 size={24} />,
    value: "payment-method",
  },
];
const MenuTabLists = () => {
  return (
    <>
      <div className="flex flex-col border-1 bg-white p-4">
        <p className="text-sm text-gray-600">Hi,</p>
        <p className="font-bold text-2xl">Can Balkaç</p>
      </div>
      {accountMenus.map((item, index) => (
        <TabsList key={index} className="w-full">
          <TabsTrigger
            value={item.value}
            className="rounded-none bg-white data-[state=active]:border-1 data-[state=active]:border-black"
          >
            {item.icon}
            <p>{item.title}</p>
          </TabsTrigger>
        </TabsList>
      ))}
      <div className="bg-white m-1 h-auto">
        <Button className="w-full flex gap-1.5 justify-center items-center h-[30px] text-sm font-semibold cursor-pointer hover:bg-gray-600 rounded-xs">
          <PiSignOut size={18} />
          <p>Sign Out</p>
        </Button>
      </div>
    </>
  );
};

export default MenuTabLists;
