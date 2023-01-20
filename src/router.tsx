import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Profile } from "./Pages/Profile";


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
    }
])

export {router};