import {
  getActionsData,
  SelectAction,
  SelectLoader,
} from "@/redux/modules/home/aside/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProgressChart } from "@/components/widgets/molecules/ProgressChart/ProgressChart";

function ProgressChartOffers() {
  const data = useSelector(SelectAction);
  const isLoading = useSelector(SelectLoader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActionsData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div
        role="status"
        className="mt-3 w-full max-w-md animate-pulse space-y-4 divide-y divide-neutra-200 rounded p-4 shadow dark:divide-neutra-700 dark:border-neutra-700 md:p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="mb-2.5 h-12 w-12 rounded-full bg-neutra-300 dark:bg-neutra-600"></div>
          </div>
          <div>
            <div className="mb-2.5 h-12 w-12 rounded-full bg-neutra-300 dark:bg-neutra-600"></div>
          </div>
          <div>
            <div className="mb-2.5 h-12 w-12 rounded-full bg-neutra-300 dark:bg-neutra-600"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-between">
      <ProgressChart value={data.total?.value} text="Ações" color="#A3E2B4" />
      <ProgressChart value={data.final?.value} text="Final" color="#B39243" />
      <ProgressChart
        value={data.defeated?.value}
        text="Vencido"
        color="#F5D98C"
      />
    </div>
  );
}

export { ProgressChartOffers };
