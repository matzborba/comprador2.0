//componente de rotas";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Login } from "@/views/Login";
import { Home } from "@/views/Home";
import { Actions } from "@/views/Actions";
import { Offers } from "@/views/Offers";
import { Orders } from "@/views/Orders";
import { Ranchers } from "@/views/Ranchers";
import { Slaughters } from "@/views/Slaughters";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/inicio",
    element: <Home />,
  },
  {
    path: "/acoes",
    element: <Actions />,
  },
  {
    path: "/ofertas",
    element: <Offers />,
  },
  {
    path: "/pedidos",
    element: <Orders />,
  },
  {
    path: "/pecuaristas",
    element: <Ranchers />,
  },
  {
    path: "/abates",
    element: <Slaughters />,
  },
]);

function RoutesConfig() {
  return <RouterProvider router={router} />;
}

export { RoutesConfig };
