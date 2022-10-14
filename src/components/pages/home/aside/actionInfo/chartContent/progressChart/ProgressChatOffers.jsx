import {
  getActionsData,
  SelectAction,
} from "@/redux/modules/home/aside/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProgressChart } from "@/components/widgets/molecules/ProgressChart/ProgressChart";

function ProgressChartOffers() {
  const data = useSelector(SelectAction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActionsData());
  }, [dispatch]);

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
