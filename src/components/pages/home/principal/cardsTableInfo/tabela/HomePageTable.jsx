import { StatusInfo } from "@/components/widgets/atoms/statusInfo/StatusInfo";
import { Link } from "react-router-dom";

function HomePageTable() {
  const tableData = [
    {
      status: "Aguardando",
      unity: "AMS",
      ox: 300,
      cow: 150,
      total: 450,
      id: 0,
    },
    {
      status: "Aceito",
      unity: "PDP",
      ox: 20,
      cow: 10,
      total: 30,
      id: 1,
    },
    {
      status: "Recusado",
      unity: "CLR",
      ox: 25,
      cow: 25,
      total: 50,
      id: 2,
    },
    {
      status: "Aguardando",
      unity: "PDP",
      ox: 2,
      cow: 3,
      total: 5,
      id: 3,
    },
  ];

  return (
    <div className="flex w-[50%] flex-col">
      <div className="flex items-baseline justify-between">
        <p className="text-lg font-semibold">Últimas ofertas</p>
        <Link to="/ofertas" className="underline">
          Ver todas as ofertas
        </Link>
      </div>
      <table className="relative my-2 h-full w-full">
        <tbody>
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
          {tableData.map(offer => (
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
