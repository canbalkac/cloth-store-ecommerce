import React from "react";
import PaymentMethod from "./Tabs/PaymentMethod";
import AccountOverviewTab from "./Tabs/AccountOverviewTab";
import MyOrdersTab from "./Tabs/MyOrdersTab";
import ChangePasswordTab from "./Tabs/ChangePasswordTab";

const TabsContentsPage = () => {
  return (
    <>
      <AccountOverviewTab />
      <MyOrdersTab />
      <ChangePasswordTab />
      <PaymentMethod />
    </>
  );
};

export default TabsContentsPage;
