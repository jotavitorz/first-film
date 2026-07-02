import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/index";
import { Home } from "../pages/home";
import { Favorites } from "../pages/favorites";
import { MovieDetail } from "../pages/movieDetail";
import { NotFound } from "../pages/notFound";

export const routes = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />                
            },
            {
                path: "/favorites",
                element: <Favorites />                
            },
            {
                path: "/movie/:id",
                element: <MovieDetail />                
            },
        ],
    },
    {
        path: "/*",
        element: <NotFound />
    }
])
