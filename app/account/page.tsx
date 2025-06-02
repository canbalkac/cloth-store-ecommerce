import { Button } from "@/components/ui/button";
import React from "react";
import { BsCreditCard } from "react-icons/bs";
import { RiVisaFill } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";

const accountMenus = [
  { title: "Account Overview", icon: <CiUser size={24} /> },
  { title: "My Orders", icon: <CiCalendar size={24} /> },
  { title: "Premium Delivery", icon: <MdOutlineWorkspacePremium size={24} /> },
  { title: "My Details", icon: <FaRegAddressCard size={24} /> },
  { title: "Change Password", icon: <CiLock size={24} /> },
  { title: "Payment Method", icon: <CiCreditCard1 size={24} /> },
  { title: "Sign Out", icon: <PiSignOut size={24} /> },
];

const AccountPage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center">
      <div className="p-4 lg:w-1/3">
        <div className="flex flex-col border-1 bg-white p-4">
          <p className="text-sm text-gray-600">Hi,</p>
          <p className="font-bold text-2xl">Can Balkaç</p>
        </div>
        {accountMenus.map((item, index) => (
          <div
            key={index}
            className="flex w-full items-center gap-2 mt-2 bg-white p-4"
          >
            {item.icon}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="p-4 flex flex-col lg:w-1/3">
        <div className="flex flex-col border-1 bg-white p-4">
          <BsCreditCard size={28} />
          <p className="text-2xl font-bold">PAYMENT METHOD</p>
          <Button variant={"outline"} className="cursor-pointer">
            ADD NEW PAYMENT METHOD
          </Button>
        </div>
        <div className="flex flex-col border-1 bg-white p-4 mt-1">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-3">
              <RiVisaFill size={24} />
              <p>VISA Debit (9333)</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p>Delete</p>
              <RiDeleteBinLine />
            </div>
          </div>
          <div>
            <p>Exp: 08/28</p>
          </div>
          <div>
            <p>CAN BALKAÇ</p>
          </div>
          <div>
            <p className="text-gray-500">This is your default payment method</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
