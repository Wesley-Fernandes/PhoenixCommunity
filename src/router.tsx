import { createBrowserRouter } from "react-router-dom";
import {DashboardPage} from "./Pages/Layout-Moderation/Dashboard"
import {MOD_Banlist} from "./Pages/Layout-Moderation/Sistemas/Banlist"
import { Home } from "./Pages/Home";
import { Layout } from "./Pages/Layout-Moderation";
import { Menu } from "./Pages/Menu";
import { Profile } from "./Pages/Profile";
import { UserBanlist } from "./Pages/Layout-User/Sistemas/UserBanlist";
import { CreateUser } from "./Pages/Layout-Moderation/Sistemas/Create";
import { Error404 } from "./Pages/error";
import Plataform from "./Pages/Plataform";
import CreatePlataform from "./Pages/CreatePlataform";
import CreateComponentPlataform from "./Pages/CreatePlataform/CreateComponent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/login",
    element: <Home />,
  },{
    path: "/plataform",
    element: <Plataform/>,
  },{
    path: "/createplataform",
    element: <CreatePlataform/>
  },
  {
    path: "/banlist",
    element: <UserBanlist/>
  },
  {
    path: "/Dashboard",
    element: <Layout />,
    children: [
      {
        path: "/Dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/Dashboard/Banlist",
        element: <MOD_Banlist />,
      },
      {
        path: "/Dashboard/Create",
        element: <CreateUser />,
      },
      {
        path: "*",
        element: <Error404/>
      }
    ],
  },
  {
    path: "*",
    element: <Error404/>
  }
]);

export { router };
