import { DataPicker } from "@/components/widgets/atoms/datapicker/DataPicker";
import { StatusInfo } from "@/components/widgets/atoms/statusInfo/StatusInfo";
import { Link } from "react-router-dom";

function TimeLineTasks() {
  const tasks = [
    {
      date: "10:30",
      status: "Aguardando",
      farm: "Fazenda Flores",
      label: "Acompanhar Embarque",
      id: 0,
    },
    {
      date: "09:30",
      status: "Vencido",
      farm: "Fazenda Flores",
      label: "Acompanhar Embarque",
      id: 1,
    },
    {
      date: "09:00",
      status: "Finalizada",
      farm: "Fazenda Flores",
      label: "Acompanhar Embarque",
      id: 2,
    },
    {
      date: "08:00",
      status: "Finalizada",
      farm: "Fazenda Flores",
      label: "Acompanhar Embarque",
      id: 3,
    },
  ];

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
            {tasks.map(task => (
              <div
                className="flex w-full gap-4 border-b border-neutra-300 py-4"
                key={task.id}
              >
                <div>
                  <p className=" text-sm font-normal">{task.date}</p>
                </div>
                <div className="flex flex-col items-start ">
                  <p className="font-bold">{task.label}</p>
                  <p className="text-xs">em {task.farm}</p>
                  <div>
                    <StatusInfo status={task.status} />
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
