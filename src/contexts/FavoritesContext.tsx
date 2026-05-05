import { createContext, useState, type ReactNode } from "react";

interface FavoritesProps {
    filmes: string[];
}

const FavoritesContext = createContext({} as FavoritesProps);

interface ChildrenProviderProps {
    children: ReactNode;
}

export function FavoritesProvider({ children}: ChildrenProviderProps) {
    const [filmes, setFilmes] = useState([]);


    return (
        <FavoritesContext.Provider value={{filmes}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext };
