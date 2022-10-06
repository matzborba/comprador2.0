function ActionCardAside() {
  return (
    <div className="flex w-64 flex-col justify-between gap-3 rounded-2xl bg-neutra-100 p-4">
      <h3 className="text-lg font-medium text-red">Criar</h3>
      <p>Pecuarista</p>
      <div className="relative flex">
        <input
          type="text"
          className="relative w-full rounded-lg border border-neutra-400 py-2.5 px-4 shadow outline-none placeholder:text-neutra"
          placeholder="Pecuarista"
        />
        {/*  imagem input */}
      </div>
      <div className="flex w-full justify-between gap-2">
        <button className=" h-10 w-full rounded-md bg-red transition hover:bg-red-700 focus:bg-red-600">
          <span className="text-md font-semibold text-white">Novo Pedido</span>
        </button>
        <button className=" h-10 w-full rounded-md bg-red transition hover:bg-red-700 focus:bg-red-600">
          <span className="text-md font-semibold text-white">Nova Oferta</span>
        </button>
      </div>
    </div>
  );
}

export { ActionCardAside };
