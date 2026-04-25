import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { MovieDetail } from "../pages/MovieDetail";

export const routes = createBrowserRouter([
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
    }
])
