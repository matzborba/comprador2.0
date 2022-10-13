import {
  getActionsData,
  SelectAction,
} from "@/redux/modules/home/aside/actions";
import { useEffect } from "react";
import ProgressBar from "react-customizable-progressbar";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProgressChart.module.css";

function ProgressChart() {
  const actions = useSelector(SelectAction);

  useEffect(() => {
    console.log(actions);
  }, []);

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

  return (
    <div className="flex w-full justify-between">
      {actions.map(action => (
        <ProgressBar
          key={action.status}
          className={styles.RCP}
          progress={action.value}
          radius={100}
          strokeWidth={18}
          strokeColor={getColorByStatus(action.status)}
          strokeLinecap="round"
          trackStrokeWidth={18}
          trackStrokeColor="white"
        >
          <div className="absolute top-4 my-auto mx-0 h-full w-full justify-center text-center">
            <p className="font-semibold">{action.value}</p>
            <p className="text-xs font-normal">{action.status}</p>
          </div>
        </ProgressBar>
      ))}
    </div>
  );
}

export { ProgressChart };
