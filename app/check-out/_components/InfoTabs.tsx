"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CountrySelect from "../_components/CountrySelect";
import { formatCardNumber, formatCvvNumber, formatString } from "@/lib/utils";

const InfoTabs = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="mt-4">
        <TabsTrigger value="account" className="">
          INFORMATION
        </TabsTrigger>
        <TabsTrigger value="password">SHIPPING</TabsTrigger>
        <TabsTrigger value="payment">PAYMENT</TabsTrigger>
      </TabsList>
      <TabsContent className="mt-4" value="account">
        <div className="w-full flex flex-col gap-3">
          <Label className="font-bold">CONTACT INFO</Label>
          <Input placeholder="Email" className="bg-white" />
          <Input placeholder="Phone" className="bg-white" />
        </div>
      </TabsContent>
      <TabsContent className="mt-4" value="password">
        <div className="w-full flex flex-col gap-3">
          <Label className="font-bold">SHIPPING</Label>
          <div className="flex flex-row gap-3">
            <Input placeholder="First Name" className="bg-white" />
            <Input placeholder="Last Name" className="bg-white" />
          </div>
          <CountrySelect />
          <Input placeholder="State / Region" className="bg-white" />
          <Input placeholder="Address" className="bg-white" />
          <div className="flex flex-row gap-3">
            <Input placeholder="City" className="bg-white" />
            <Input placeholder="Postal Code" className="bg-white" />
          </div>
        </div>
      </TabsContent>
      <TabsContent className="mt-4" value="payment">
        <div className="w-full flex flex-col gap-3">
          <Label>CARD INFO</Label>
          <div className="flex flex-row gap-3">
            <Input placeholder="First Name" className="bg-white" />
            <Input placeholder="Last Name" className="bg-white" />
          </div>
          <Input
            maxLength={19}
            placeholder="Card Number"
            className="bg-white"
            onChange={formatCardNumber}
          />
          <div className="flex flex-row gap-3">
            <Input
              className="bg-white"
              maxLength={5}
              placeholder="MM/YY"
              type="text"
              onChange={formatString}
            />
            <Input
              maxLength={3}
              type="text"
              inputMode="numeric"
              className="bg-white"
              placeholder="CVV"
              onChange={formatCvvNumber}
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default InfoTabs;
