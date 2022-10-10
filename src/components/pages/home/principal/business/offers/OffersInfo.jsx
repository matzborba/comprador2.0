import { CowIcon } from "@/assets/icons/Cow";
import { OxIcon } from "@/assets/icons/Ox";
import { ProgressChartOffers } from "./ProgressChart/ProgressChartOffers";

function OffersInfo() {
  return (
    <div className="flex w-[50%] flex-col gap-2">
      <div>
        <p className="text-lg font-semibold">Minhas ofertas</p>
      </div>
      <div className="flex flex-col gap-1 rounded-lg bg-neutra-100 px-4 py-2">
        <div>
          <p className="text-sm font-bold">Total de animais</p>
        </div>
        <div className="flex gap-16">
          <div className="flex items-center gap-3">
            <OxIcon />
            <p className="text-sm font-bold">Macho</p>
            <p>100</p>
          </div>
          <div className="flex items-center gap-3">
            <CowIcon />
            <p className="text-sm font-bold">Fêmea</p>
            <p>500</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-lg bg-neutra-100 px-4 py-2">
        <div>
          <p className="text-sm font-bold">Total ofertas</p>
        </div>
        <div className="flex justify-between">
          <ProgressChartOffers color="#B5E8C3" value="80" text="Abates" />
          <ProgressChartOffers color="#BADFF4" value="60" text="Macho" />
          <ProgressChartOffers color="#F7B4B8" value="20" text="Fêmea" />
        </div>
      </div>
    </div>
  );
}
export { OffersInfo };
