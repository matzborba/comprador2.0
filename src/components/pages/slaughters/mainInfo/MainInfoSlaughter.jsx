import { ButtonToggleVision } from "@/components/widgets/atoms/button/toggleVision/ButtonToggleVision";
import { DataPicker } from "@/components/widgets/atoms/datapicker/DataPicker";
import { OxIcon } from "@/assets/icons/Ox";
import { CowIcon } from "@/assets/icons/Cow";
import { MoneyIcon } from "@/assets/icons/Money";
import { ListCheckedIcon } from "@/assets/icons/ListChecked";
import { SlaughterChart } from "./chart/SlaughterChart";

function MainInfoSlaughter() {
  function toggle() {
    console.log("toggleou");
  }

  const abatesData = {
    ox: 130,
    cow: 1200,
    arroba: 256.34,
  };

  abatesData.total = abatesData.ox + abatesData.cow;

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-between">
        <div>
          <h1 className="text-2xl font-semibold leading-10">Meus abates</h1>
        </div>
        <div className="flex w-[20%] max-w-[180px] justify-between gap-3">
          <ButtonToggleVision action={toggle} />
          <DataPicker />
        </div>
      </div>
      <div className="mt-4 flex w-full justify-between gap-5">
        <div className="flex w-full flex-col gap-2 rounded-xl bg-neutra-100 p-5">
          <p className="flex items-center justify-center text-4xl font-bold">
            {abatesData.ox}
          </p>
          <div className="flex items-center justify-center gap-3">
            <p>Abates machos</p>
            <OxIcon />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 rounded-xl bg-neutra-100 p-5">
          <p className="flex items-center justify-center text-4xl font-bold">
            {abatesData.cow}
          </p>
          <div className="flex items-center justify-center gap-3">
            <p>Abates fêmeas</p>
            <CowIcon />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 rounded-xl bg-blue-200 p-5">
          <p className="flex items-center justify-center text-4xl font-bold">
            {abatesData.total}
          </p>
          <div className="flex items-center justify-center gap-3">
            <p className="font-semibold">Abates total</p>
            <ListCheckedIcon />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 rounded-xl bg-gold-300 p-5">
          <p className="flex items-center justify-center text-4xl font-bold">
            R$ {abatesData.arroba}
          </p>
          <div className="flex items-center justify-center gap-3">
            <p className="font-semibold">Abates média</p>
            <MoneyIcon />
          </div>
        </div>
      </div>
      <div className="max-h-[300px]">
        <SlaughterChart />
      </div>
    </div>
  );
}

export { MainInfoSlaughter };
