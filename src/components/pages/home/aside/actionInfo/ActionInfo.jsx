import { ChartContent } from "./chartContent/ChartContent";
import { TimeLineTasks } from "./timeline/TimeLineTasks";

function ActionInfo() {
  return (
    <div className="flex w-full flex-col justify-between gap-3 rounded-2xl bg-neutra-100 p-3">
      <div className="w-full">
        <h3 className="text-lg font-medium text-red">Minhas ações</h3>
        <div>
          <ChartContent />
        </div>
        <div>
          <TimeLineTasks />
        </div>
      </div>
    </div>
  );
}
export { ActionInfo };
