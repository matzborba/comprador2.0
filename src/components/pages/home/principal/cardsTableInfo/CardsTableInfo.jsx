import { Carousel } from "./carousel/Carousel";
import { HomePageTable } from "./tabela/HomePageTable";

function CardsTableInfo() {
  return (
    <div className="flex h-auto w-[100%] gap-6 py-6">
      <Carousel />
      <HomePageTable />
    </div>
  );
}
export { CardsTableInfo };
