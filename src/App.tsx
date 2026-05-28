import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <FavoritesProvider>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={routes} />
    </FavoritesProvider>
  )
}

export default App;