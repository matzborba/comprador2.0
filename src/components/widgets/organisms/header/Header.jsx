import { LogoFriboi } from "@/assets/icons/LogoFriboi";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../molecules/navbar/NavBar";
import { UserInfo } from "../../molecules/userInfo/UserInfo";

function Header() {
  return (
    <header className="mt-6 mb-8 flex w-full justify-between border-b border-neutra-200 pb-8">
      <div className="h-auto w-auto">
        <NavLink to="/inicio">
          <LogoFriboi className="h-full w-full" />
        </NavLink>
      </div>
      <div className="flex w-[70%] flex-col items-end justify-end gap-6">
        <UserInfo />
        <NavBar />
      </div>
    </header>
  );
}
export { Header };
