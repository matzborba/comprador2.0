import { useSelector } from "react-redux";
import {
  getPurchaseData,
  SelectLoader,
  SelectPurchases,
} from "@/redux/modules/home/principal/purchases";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function PurchaseInfo() {
  const data = useSelector(SelectPurchases);
  const isLoading = useSelector(SelectLoader);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPurchaseData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex w-full animate-pulse flex-col gap-2  divide-neutra-200 rounded  dark:divide-neutra-700">
        <div>
          <p className="text-lg font-semibold">Minhas Compras</p>
        </div>
        <div className="flex h-[210px] w-full gap-5">
          <div className="flex  w-full flex-col rounded-lg bg-neutra-500"></div>
          <div className="flex  w-full flex-col rounded-lg bg-neutra-500"></div>
          <div className="flex  w-full flex-col rounded-lg bg-neutra-500"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col gap-2">
      <div>
        <p className="text-lg font-semibold">Minhas Compras</p>
      </div>
      <div className="flex h-full w-full gap-5">
        <div className="flex min-h-[210px] w-full min-w-[130px] flex-col items-center justify-center gap-1 rounded-lg bg-green-100">
          <p className="text-sm font-bold">Volume total</p>
          <p className="text-4xl font-bold">{data.total}</p>
          <p className="text-sm font-bold">Preço R$</p>
          <p className="text-sm font-bold">{data.price},00</p>
        </div>
        <div className="flex min-h-[210px] w-full min-w-[130px] flex-col items-center justify-center gap-1 rounded-lg bg-blue-200">
          <p className="text-sm font-bold">Macho</p>
          <p className="text-4xl font-bold">{data.ox?.value}</p>
          <p className="text-sm font-bold">Preço R$</p>
          <p className="text-sm font-bold">{data.ox?.price},00</p>
        </div>
        <div className="flex min-h-[210px] w-full min-w-[130px] flex-col items-center justify-center gap-1 rounded-lg bg-red-100">
          <p className="text-sm font-bold">Fêmea</p>
          <p className="text-4xl font-bold">{data.cow?.value}</p>
          <p className="text-sm font-bold">Preço R$</p>
          <p className="text-sm font-bold">{data.cow?.price},00</p>
        </div>
      </div>
    </div>
  );
}
export { PurchaseInfo };
