import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/Menu",
        element: <Menu/>
    }
])

export {router};