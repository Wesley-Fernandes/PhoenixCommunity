import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NewUser } from "./Pages/NewUser";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/newUser",
        element: <NewUser/>
    }
])

export {router};