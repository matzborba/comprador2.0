import { ProgressChartOffers } from "@/components/pages/home/aside/actionInfo/chartContent/progressChart/ProgressChatOffers";
import { useState, useEffect } from "react";

function ChartContent() {
  return (
    <div className="flex h-full w-full">
      <ProgressChartOffers />
    </div>
  );
}

export { ChartContent };
