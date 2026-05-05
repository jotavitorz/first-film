import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { FavoritesProvider } from "./contexts/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={routes} />
    </FavoritesProvider>
  )
}

export default App;