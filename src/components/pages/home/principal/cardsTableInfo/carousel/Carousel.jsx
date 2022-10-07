import { Button } from "@/components/widgets/atoms/button/Button";
import { Card } from "@/components/widgets/molecules/card/Card";
import { Link } from "react-router-dom";

function Carousel() {
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
      orderId: 2132,
      rancher: "Teste Pecuarista",
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
      orderId: 21322,
      rancher: "Teste Pecuarista",
      farm: "Fazenda teste",
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
      <div className="flex h-auto w-full items-end justify-between">
        <Button text="Por linha" />
        <Link to="/pedidos" className="text-md underline">
          Ver todos os pedidos
        </Link>
      </div>
      <div className="w-full">
        <div className="o flex gap-4 pt-2 pb-5" style={{ overflowX: "auto" }}>
          {cardsData.map(order => (
            <Card key={order.orderId}>
              <div className="flex justify-between p-1">
                <p>{order.status}</p>
                <p>{order.date}</p>
              </div>
              <div className=" flex  justify-between ">
                <p className="text-sm font-semibold">Pedido</p>
                <p>{order.orderId}</p>
              </div>
              <div className=" flex  justify-between">
                <p className="text-sm font-semibold">Pecuarista</p>
                <p>{order.rancher}</p>
              </div>
              <div className=" flex  justify-between border-b border-neutra-400">
                <p className="text-sm font-semibold">Fazenda</p>
                <p>{order.farm}</p>
              </div>
              <div className="flex justify-between border-b border-neutra-400">
                <p className="text-sm font-semibold">
                  {order.slaughter.total} abates
                </p>
                <p>{order.slaughter.ox}</p>
                <p>{order.slaughter.cow}</p>
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
      </div>
    </div>
  );
}
export { Carousel };
