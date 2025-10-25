import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import About from "../Pages/About/About";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: ()=> fetch("/public/categoriesnews.json"),
            }
        ]
    },
    {
        path: "/auth",
        element: "This is Auth"
    },
    {
        path: "/news",
        element: "This is News"
    },
    {
        path: "/*",
       Component: PageNotFound
    },
])

export default router;