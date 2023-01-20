import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu/>
    },
    {
        path: "/home",
        element: <Home/>
    }
])

export {router};