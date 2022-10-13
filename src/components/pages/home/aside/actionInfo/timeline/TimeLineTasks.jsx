import { DataPicker } from "@/components/widgets/atoms/datapicker/DataPicker";
import { StatusInfo } from "@/components/widgets/atoms/statusInfo/StatusInfo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActionsPerDate,
  ActionsPerDate,
} from "@/redux/modules/home/aside/time-line";
import { useEffect } from "react";

function TimeLineTasks() {
  const timeLineData = useSelector(selectActionsPerDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionsPerDate());
  }, [dispatch]);

  return (
    <div className="mt-3 flex w-full flex-col justify-center gap-2">
      <div className="flex w-full justify-center gap-2">
        <DataPicker />
        <button className=" h-10 w-full rounded-md bg-red transition hover:bg-red-700 focus:bg-red-600">
          <span className="text-md font-semibold text-white">Nova ação</span>
        </button>
      </div>
      <div>
        <h3>
          Hoje
          <div>
            {timeLineData.map(action => (
              <div
                className="flex w-full gap-4 border-b border-neutra-300 py-4"
                key={action.id}
              >
                <div>
                  <p className=" text-sm font-normal">{action.date}</p>
                </div>
                <div className="flex flex-col items-start ">
                  <p className="font-bold">{action.label}</p>
                  <p className="text-xs">em {action.farm}</p>
                  <div>
                    <StatusInfo status={action.status} />
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/acoes"
              className="flex w-full items-center justify-end text-sm underline"
            >
              Ver todas as tarefas
            </Link>
          </div>
        </h3>
      </div>
    </div>
  );
}
export { TimeLineTasks };
