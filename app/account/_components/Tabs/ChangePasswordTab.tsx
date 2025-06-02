import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import { CiLock } from "react-icons/ci";

const ChangePasswordTab = () => {
  return (
    <TabsContent value="change-password">
      <div className="flex flex-row gap-2 border-1 bg-white p-4">
        <CiLock size={32} />
        <p className="text-2xl font-bold">CHANGE PASSWORD</p>
      </div>
      <div className="flex flex-col gap-3 border-1 bg-white p-4 w-full">
        <div className="flex flex-col w-full gap-1.5">
          <Label>Old Password</Label>
          <Input placeholder="New Password" />
        </div>
        <div className="flex flex-col w-full gap-1.5">
          <Label>New Password</Label>
          <Input placeholder="New Password" />
        </div>
        <div className="flex flex-col w-full gap-1.5">
          <Label>New Password Confirm</Label>
          <Input placeholder="New Password" />
        </div>
        <Button className="hover:bg-gray-600 cursor-pointer">
          CHANGE PASSWORD
        </Button>
      </div>
    </TabsContent>
  );
};

export default ChangePasswordTab;
