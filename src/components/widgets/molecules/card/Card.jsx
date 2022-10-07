function Card({ children }) {
  return (
    <div className="flex h-52 min-w-[250px] flex-col gap-1.5 rounded-md border border-neutra-400 px-4 py-2 shadow">
      {children}
    </div>
  );
}
export { Card };
