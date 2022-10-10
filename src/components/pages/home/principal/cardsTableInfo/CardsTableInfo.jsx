import { Carousel } from "./carousel/Carousel";
import { HomePageTable } from "./tabela/HomePageTable";

function CardsTableInfo() {
  return (
    <div className="mt-4 flex h-auto w-full gap-6">
      <Carousel />
      <HomePageTable />
    </div>
  );
}
export { CardsTableInfo };
