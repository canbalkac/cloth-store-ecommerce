import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import { CiUser } from "react-icons/ci";

const user = [
  { title: "Name :", value: "CAN BALKAÇ" },
  { title: "Gender :", value: "Male" },
  { title: "Age :", value: "26" },
  { title: "Address :", value: "Turkey/Izmir" },
  { title: "Member Since :", value: "01.01.2025" },
];

const AccountOverviewTab = () => {
  return (
    <TabsContent value="account-overview">
      <div className="flex flex-row gap-2 border-1 bg-white p-4">
        <CiUser size={32} />
        <p className="text-2xl font-bold">ACCOUNT OVERVIEW</p>
      </div>
      <div className="flex flex-col border-1 bg-white p-4 w-full">
        {user.map((item, index) => (
          <div key={index} className="flex justify-between items-center w-full">
            <p className="text-lg font-semibold">{item.title}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

export default AccountOverviewTab;
