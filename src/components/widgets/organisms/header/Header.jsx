import { LogoFriboi } from "@/assets/icons/LogoFriboi";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../molecules/navbar/NavBar";
import { UserInfo } from "../../molecules/userInfo/UserInfo";

function Header() {
  return (
    <header className="mt-6 mb-8 flex justify-between border-b border-neutra-200 pb-8">
      <div className="h-auto w-28">
        <NavLink to="/inicio">
          <LogoFriboi />
        </NavLink>
      </div>
      <div className="flex flex-col items-end justify-end gap-6">
        <UserInfo />
        <NavBar />
      </div>
    </header>
  );
}
export { Header };
