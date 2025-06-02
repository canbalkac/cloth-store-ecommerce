import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import { CiCalendar } from "react-icons/ci";

const MyOrdersTab = () => {
  return (
    <TabsContent value="my-orders">
      <div className="flex flex-row gap-2 border-1 bg-white p-4">
        <CiCalendar size={32} />
        <p className="text-2xl font-bold">MY ORDERS</p>
      </div>
      <div className="flex flex-col border-1 bg-white p-4 w-full">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-semibold text-gray-600">
            YOU DON&apos;T HAVE ANY ORDER.
          </p>
        </div>
      </div>
    </TabsContent>
  );
};

export default MyOrdersTab;
