function PurchaseInfo() {
  const purchaseData = {
    total: 100,
    price: 215,
    macho: {
      value: 80,
      price: 215.0,
    },
    femea: {
      value: 20,
      price: 205.0,
    },
  };

  return (
    <div className="mt-8 flex w-full flex-col gap-2">
      <div>
        <p className="text-lg font-semibold">Minhas Compras</p>
      </div>
      <div className="flex h-full w-full gap-5">
        <div className="flex min-h-[210px] w-full min-w-[130px] flex-col items-center justify-center gap-1 rounded-lg bg-green-100">
          <p className="text-sm font-bold">Volume total</p>
          <p className="text-4xl font-bold">{purchaseData.total}</p>
          <p className="text-sm font-bold">Preço R$</p>
          <p className="text-sm font-bold">{purchaseData.price},00</p>
        </div>
        <div className="flex w-full min-w-[130px] flex-col items-center justify-center gap-1 rounded-lg bg-blue-200">
          <p className="text-sm font-bold">Macho</p>
          <p className="text-4xl font-bold">{purchaseData.macho.value}</p>
          <p className="text-sm font-bold">Preço R$</p>
          <p className="text-sm font-bold">{purchaseData.macho.price},00</p>
        </div>
        <div className="flex w-full  min-w-[130px] flex-col items-center justify-center gap-1 rounded-lg bg-red-100">
          <p className="text-sm font-bold">Fêmea</p>
          <p className="text-4xl font-bold">{purchaseData.femea.value}</p>
          <p className="text-sm font-bold">Preço R$</p>
          <p className="text-sm font-bold">{purchaseData.femea.price},00</p>
        </div>
      </div>
    </div>
  );
}
export { PurchaseInfo };
