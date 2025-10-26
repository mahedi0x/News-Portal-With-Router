import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import About from "../Pages/About/About";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../Components/utils/loading";

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
                loader: ()=> fetch("/categoriesnews.json"),
                hydrateFallbackElement: <Loading></Loading>,
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children:[
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path: "/auth/register",
                Component: Register
            }
        ]


    },
    {
        path: "/news-details/:id",
        element: 
        <PrivateRoute>
          <NewsDetails/>,
        </PrivateRoute>,
        loader: ()=> fetch("/categoriesnews.json"),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: "/*",
       Component: PageNotFound
    },
])

export default router;