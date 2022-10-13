import { Button } from "@/components/widgets/atoms/button/Button";
import { Aside } from "./aside/Aside";
import { BusinessInfo } from "./principal/business/BusinessInfo";
import { CardsTableInfo } from "./principal/cardsTableInfo/CardsTableInfo";
import { ChartComponent } from "./principal/chart/ChartComponent";

function HomeContent() {
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
