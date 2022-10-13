import { Button } from "@/components/widgets/atoms/button/Button";
import { useDispatch } from "react-redux";
import { Aside } from "./aside/Aside";
import { BusinessInfo } from "./principal/business/BusinessInfo";
import { CardsTableInfo } from "./principal/cardsTableInfo/CardsTableInfo";
import { ChartComponent } from "./principal/chart/ChartComponent";
import { useEffect } from "react";
import { getActionsPerDate } from "@/redux/modules/home/aside/time-line";
import { getActionsData } from "@/redux/modules/home/aside/actions";
import { getOrdersData } from "@/redux/modules/home/principal/carousel";
import { getPurchase } from "@/redux/modules/home/principal/purchases";
function HomeContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActionsPerDate());
    dispatch(getActionsData());
    dispatch(getOrdersData());
    dispatch(getPurchase());
  }, []);

  return (
    <div className="flex w-full gap-4">
      <div className="w-[20%]">
        <Aside />
      </div>
      <div className="w-[80%]">
        <Button text="Unidade" />
        <ChartComponent />
        <BusinessInfo />
        <CardsTableInfo />
      </div>
    </div>
  );
}

export { HomeContent };
