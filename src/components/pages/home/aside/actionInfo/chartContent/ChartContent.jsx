import { ProgressChart } from "@/components/pages/home/aside/actionInfo/chartContent/progressChart/ProgressChat";
import { useState, useEffect } from "react";

function ChartContent() {
  return (
    <div className="flex h-full w-full">
      <ProgressChart />
    </div>
  );
}

export { ChartContent };
