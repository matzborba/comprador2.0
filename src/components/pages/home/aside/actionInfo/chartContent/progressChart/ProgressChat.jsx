import { useEffect, useState } from "react";
import ProgressBar from "react-customizable-progressbar";
import styles from "./ProgressChart.module.css";

function ProgressChart() {
  function getColorByStatus(status) {
    if (status === "Ações") {
      return "#A3E2B4";
    }
    if (status === "Final") {
      return "#B39243";
    }
    if (status === "Vencido") {
      return "#F5D98C";
    }
  }

  const taskData = [
    {
      status: "Ações",
      value: 90,
      id: 1,
    },
    {
      status: "Final",
      value: 60,
      id: 2,
    },
    {
      status: "Vencido",
      value: 20,
      id: 3,
    },
  ];
  return (
    <div className="flex w-full justify-between">
      {taskData.map(task => (
        <ProgressBar
          key={task.id}
          className={styles.RCP}
          progress={task.value}
          radius={100}
          strokeWidth={18}
          strokeColor={getColorByStatus(task.status)}
          strokeLinecap="round"
          trackStrokeWidth={18}
          trackStrokeColor="white"
        >
          <div className="absolute top-4 my-auto mx-0 h-full w-full justify-center text-center">
            <p className="font-semibold">{task.value}</p>
            <p className="text-xs font-normal">{task.status}</p>
          </div>
        </ProgressBar>
      ))}
    </div>
  );
}

export { ProgressChart };
