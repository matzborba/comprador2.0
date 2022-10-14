import { CowIcon } from "@/assets/icons/Cow";
import { OxIcon } from "@/assets/icons/Ox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOffer } from "@/redux/modules/home/principal/offers";
import { getOffersData } from "@/redux/modules/home/principal/offers";
import { ProgressChart } from "@/components/widgets/molecules/ProgressChart/ProgressChart";

function OffersInfo() {
  const data = useSelector(selectOffer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffersData());
  }, [dispatch]);

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
            <p>{data.ox}</p>
          </div>
          <div className="flex items-center gap-3">
            <CowIcon />
            <p className="text-sm font-bold">Fêmea</p>
            <p>{data.cow}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-lg bg-neutra-100 px-4 py-2">
        <div>
          <p className="text-sm font-bold">Total ofertas</p>
        </div>
        <div className="flex justify-between">
          <ProgressChart
            color="#B5E8C3"
            value={data.chart?.total}
            text="Abates"
          />
          <ProgressChart color="#BADFF4" value={data.chart?.ox} text="Macho" />
          <ProgressChart color="#F7B4B8" value={data.chart?.cow} text="Fêmea" />
        </div>
      </div>
    </div>
  );
}
export { OffersInfo };
