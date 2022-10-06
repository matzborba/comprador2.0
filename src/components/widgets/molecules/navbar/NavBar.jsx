import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  const routes = [
    {
      label: "Início",
      path: "/inicio",
    },
    {
      label: "Meus abates",
      path: "/abates",
    },
    {
      label: "Meus pedidos",
      path: "/pedidos",
    },
    {
      label: "Pecuarista",
      path: "/pecuaristas",
    },
    {
      label: "Minhas ofertas",
      path: "/ofertas",
    },
    {
      label: "Minhas ações",
      path: "/acoes",
    },
  ];
  return (
    <nav className="flex w-full justify-between gap-8">
      {routes.map(route => (
        <NavLink
          to={route.path}
          key={route.label}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
}

export { NavBar };
