import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Profile } from "./Pages/Profile";
import { Monetario } from "./Pages/Sistemas/Monetario";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/Profile",
        element: <Profile/>
    },
    {
        path: "/sistema/monetario",
        element: <Monetario/>,

    },
])

export {router};