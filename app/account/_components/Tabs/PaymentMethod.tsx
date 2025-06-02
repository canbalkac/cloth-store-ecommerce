import React from "react";
import { BsCreditCard } from "react-icons/bs";
import { RiVisaFill } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@radix-ui/react-tabs";

const PaymentMethod = () => {
  return (
    <TabsContent value="payment-method">
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
            <p className="underline">Delete</p>
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
    </TabsContent>
  );
};

export default PaymentMethod;
