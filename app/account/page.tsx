import React from "react";
import { Tabs } from "@/components/ui/tabs";
import MenuTabLists from "./_components/MenuTabLists";
import TabsContentsPage from "./_components/TabsContentsPage";

const AccountPage = () => {
  return (
    <Tabs
      defaultValue="account-overview"
      className="flex flex-col lg:flex-row justify-center min-h-[400px]"
    >
      <div className="p-4 lg:w-1/3">
        <MenuTabLists />
      </div>
      <div className="p-4 flex flex-col lg:w-1/3">
        {/* Tab Contents */}
        <TabsContentsPage />
      </div>
    </Tabs>
  );
};

export default AccountPage;
