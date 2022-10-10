function Card({ children }) {
  return (
    <div className="flex h-56 min-w-[250px] flex-col rounded-md border border-neutra-400 px-4 py-2 shadow">
      {children}
    </div>
  );
}
export { Card };
