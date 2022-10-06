import { Header } from "../../organisms/header/Header";

function Dashboard({ children }) {
  return (
    <div className="mx-auto h-full w-full max-w-[1072px] ">
      <Header />
      {children}
    </div>
  );
}

export { Dashboard };
