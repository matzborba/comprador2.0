import { Header } from "../../organisms/header/Header";

function Dashboard({ children }) {
  return (
    <div className="flex h-full w-full flex-col justify-center px-10">
      <Header />
      {children}
    </div>
  );
}

export { Dashboard };
