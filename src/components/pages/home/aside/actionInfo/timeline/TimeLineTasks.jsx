import { DataPicker } from "@/components/widgets/atoms/datapicker/DataPicker";
import { StatusInfo } from "@/components/widgets/atoms/statusInfo/StatusInfo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActionsPerDate,
  ActionsPerDate,
  SelectLoader,
} from "@/redux/modules/home/aside/time-line";
import { useEffect } from "react";

function TimeLineTasks() {
  const timeLineData = useSelector(selectActionsPerDate);
  const loader = useSelector(SelectLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionsPerDate());
  }, [dispatch]);

  if (loader) {
    return (
      <div
        role="status"
        className="mt-3  max-w-md animate-pulse space-y-4 divide-y divide-neutra-200 rounded p-4 shadow dark:divide-neutra-700 dark:border-neutra-700 md:p-6"
      >
        <div className="flex h-[100px] items-center justify-between">
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-neutra-300 dark:bg-neutra-600"></div>
            <div className="h-2 w-32 rounded-full bg-neutra-200 dark:bg-neutra-700"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-neutra-300 dark:bg-neutra-700"></div>
        </div>
        <div className="flex h-[100px] items-center justify-between pt-4">
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-neutra-300 dark:bg-neutra-600"></div>
            <div className="h-2 w-32 rounded-full bg-neutra-200 dark:bg-neutra-700"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-neutra-300 dark:bg-neutra-700"></div>
        </div>
        <div className="flex h-[100px] items-center justify-between pt-4">
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-neutra-300 dark:bg-neutra-600"></div>
            <div className="h-2 w-32 rounded-full bg-neutra-200 dark:bg-neutra-700"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-neutra-300 dark:bg-neutra-700"></div>
        </div>
        <div className="flex h-[100px] items-center justify-between pt-4">
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-neutra-300 dark:bg-neutra-600"></div>
            <div className="h-2 w-32 rounded-full bg-neutra-200 dark:bg-neutra-700"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-neutra-300 dark:bg-neutra-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

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
