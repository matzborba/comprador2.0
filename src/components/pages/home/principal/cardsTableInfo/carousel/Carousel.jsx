import { Button } from "@/components/widgets/atoms/button/Button";
import { StatusInfo } from "@/components/widgets/atoms/statusInfo/StatusInfo";
import { Card } from "@/components/widgets/molecules/card/Card";
import { useState } from "react";
import { Link } from "react-router-dom";

function Carousel() {
  const [viewTable, setViewTable] = useState(false);

  function changeView() {
    setViewTable(!viewTable);
  }

  const cardsData = [
    {
      status: "Disponivel",
      orderId: 33331,
      rancher: "Mateus Borba",
      farm: "Fazenda teste",
      slaughter: {
        total: 150,
        ox: 75,
        cow: 75,
      },
      date: "08/09/2022",
    },
    {
      status: "Disponivel",
      orderId: 3331,
      rancher: "Mateus Borba",
      farm: "Fazenda teste",
      slaughter: {
        total: 150,
        ox: 75,
        cow: 75,
      },
      date: "08/09/2022",
    },
    {
      status: "Em producao",
      orderId: 21322,
      rancher: "Andre Ferreira",
      farm: "Fazenda 1",
      slaughter: {
        total: 300,
        ox: 150,
        cow: 150,
      },
      date: "08/09/2022",
    },
    {
      status: "Disponivel",
      orderId: 2132,
      rancher: "Borba Teste 213",
      farm: "Fazenda 2",
      slaughter: {
        total: 200,
        ox: 100,
        cow: 100,
      },
      date: "08/09/2022",
    },
    {
      status: "Disponivel",
      orderId: 21832,
      rancher: "Pecuarista Novo",
      farm: "Fazenda 3",
      slaughter: {
        total: 50,
        ox: 25,
        cow: 25,
      },
      date: "08/09/2022",
    },
    {
      status: "Disponivel",
      orderId: 21532,
      rancher: "Sem nome",
      farm: "Fazenda 4",
      slaughter: {
        total: 150,
        ox: 75,
        cow: 75,
      },
      date: "08/09/2022",
    },
  ];

  return (
    <div className="flex h-full w-[50%] flex-col">
      <div className="flex h-auto w-full items-baseline justify-between">
        <Button text="Por linha" onClick={changeView} />
        <Link to="/pedidos" className="text-md underline">
          Ver todos os pedidos
        </Link>
      </div>
      <div className="w-full">
        {viewTable && (
          <div className="o flex gap-4 pt-2 pb-5" style={{ overflowX: "auto" }}>
            {cardsData.map(order => (
              <Card key={order.orderId}>
                <div className="flex items-center justify-between">
                  <StatusInfo status={order.status} />
                  <p className="text-xs font-normal text-neutra-500">
                    {order.date}
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-sm font-semibold">Pedido</p>
                  <p className="text-sm font-normal text-neutra-400">
                    {order.orderId}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm font-semibold">Pecuarista</p>
                  <p className="text-sm font-normal text-neutra-400">
                    {order.rancher}
                  </p>
                </div>
                <div className="flex justify-between border-b border-neutra-400 pb-1">
                  <p className="text-sm font-semibold">Fazenda</p>
                  <p className="text-sm font-normal text-neutra-400">
                    {order.farm}
                  </p>
                </div>
                <div className="flex justify-between border-b border-neutra-400 pb-1">
                  <p className="text-sm font-semibold">
                    {order.slaughter.total} abates
                  </p>
                  <p className="text-sm font-normal text-neutra-400">
                    {order.slaughter.ox}
                  </p>
                  <p className="text-sm font-normal text-neutra-400">
                    {order.slaughter.cow}
                  </p>
                </div>
                <div className="flex h-full w-full items-center justify-center">
                  <button>
                    <p className="text-xs font-bold text-blue-900">
                      Refazer pedido
                    </p>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
        {!viewTable && (
          <div className="relative my-2 w-full overflow-auto">
            <table className="relative h-full min-w-[120%]">
              <tbody>
                <tr className="w-full bg-neutra-200">
                  <th className="rounded-tl-lg p-1 text-sm font-semibold leading-6 text-neutra-700">
                    Status
                  </th>
                  <th className="p-1 text-sm font-semibold leading-6 text-neutra-700">
                    Pecuarista
                  </th>
                  <th className="p-1  text-sm font-semibold leading-6 text-neutra-700">
                    Pedido
                  </th>
                  <th className="p-1 text-sm font-semibold leading-6 text-neutra-700">
                    Fazenda
                  </th>
                  <th className="p-1 text-sm font-semibold leading-6 text-neutra-700">
                    Macho
                  </th>
                  <th className="p-1 text-sm font-semibold leading-6 text-neutra-700">
                    Fêmea
                  </th>
                  <th className="rounded-tr-lg p-1 text-sm font-semibold leading-6 text-neutra-700">
                    Total
                  </th>
                </tr>
                {cardsData.map(order => (
                  <tr key={order.orderId}>
                    <td className="w-[100px] border border-neutra-300 px-2">
                      <StatusInfo status={order.status} />
                    </td>
                    <td className="border border-neutra-300 text-center text-sm font-normal leading-6">
                      {order.rancher}
                    </td>
                    <td className="border border-neutra-300 text-center text-sm font-normal leading-6">
                      {order.orderId}
                    </td>
                    <td className="border border-neutra-300 text-center text-sm font-normal leading-6">
                      {order.farm}
                    </td>
                    <td className="border border-neutra-300 text-center text-sm font-normal leading-6">
                      {order.slaughter.ox}
                    </td>
                    <td className="border border-neutra-300 text-center text-sm font-normal leading-6">
                      {order.slaughter.cow}
                    </td>
                    <td className="border border-l-0 border-neutra-300 text-center text-sm font-normal leading-6">
                      {order.slaughter.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
export { Carousel };
