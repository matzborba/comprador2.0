import { StatusInfo } from "@/components/widgets/atoms/statusInfo/StatusInfo";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTable,
  SelectLoader,
} from "@/redux/modules/home/principal/table";
import { useEffect } from "react";
import { getTableData } from "@/redux/modules/home/principal/table";

function HomePageTable() {
  const data = useSelector(selectTable);
  const isLoading = useSelector(SelectLoader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="w-full animate-pulse flex-col gap-2 divide-neutra-200 rounded dark:divide-neutra-700">
        <div className="flex h-[312px] flex-col rounded bg-neutra-500"></div>
      </div>
    );
  }
  return (
    <div className="flex w-[50%] flex-col">
      <div className="flex items-baseline justify-between">
        <p className="text-lg font-semibold">Últimas ofertas</p>
        <Link to="/ofertas" className="underline">
          Ver todas as ofertas
        </Link>
      </div>
      <table className="relative my-2 h-[268px]">
        <thead>
          <tr className="relative w-full bg-neutra-200">
            <th className="top-0 border-collapse rounded-tl-lg p-1 text-sm font-semibold leading-6 text-neutra-700">
              Status
            </th>
            <th className="border-collapse p-1 text-sm font-semibold leading-6 text-neutra-700">
              UNI
            </th>
            <th className="border-collapse p-1 text-sm font-semibold leading-6 text-neutra-700">
              Macho
            </th>
            <th className="border-collapse p-1 text-sm font-semibold leading-6 text-neutra-700">
              Fêmea
            </th>
            <th className="border-collapse rounded-tr-lg p-1 text-sm font-semibold leading-6 text-neutra-700">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(offer => (
            <tr key={offer.id}>
              <td className="w-[100px] border border-neutra-300 px-2">
                <StatusInfo status={offer.status} />
              </td>
              <td className="border border-neutra-300 text-center text-sm font-normal leading-6">
                {offer.unity}
              </td>
              <td className="border border-neutra-300 text-center text-sm font-normal leading-6">
                {offer.ox}
              </td>
              <td className="border border-neutra-300 text-center text-sm font-normal leading-6">
                {offer.cow}
              </td>
              <td className="border border-neutra-300 text-center text-sm font-normal leading-6">
                {offer.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export { HomePageTable };
