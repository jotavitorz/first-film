import { createContext, useState, useEffect, type ReactNode } from "react";
import type { FavoriteMovieProps } from "../types/movie";
import toast from "react-hot-toast";

interface FavoritesProps {
    addFilm: (filme: FavoriteMovieProps) => void;
    favList: FavoriteMovieProps[];
    deleteFilm: (id: number) => void;
    changeWatched: (watched: boolean, id: number) => void;
}

const FavoritesContext = createContext({} as FavoritesProps);

interface ChildrenProviderProps {
    children: ReactNode;
}

export function FavoritesProvider({ children}: ChildrenProviderProps) {
    const [favList, setFavList] = useState<FavoriteMovieProps[]>(
        () => {
            const storage = localStorage.getItem("@favoritesMovie");
            return storage ? JSON.parse(storage) : [];
        }
    );

    function addFilm(filme: FavoriteMovieProps){
        if(favList.find((favFilm) => favFilm.id === filme.id)){
            toast.error("Esse filme já está na sua lista!", {
                style: {
                    backgroundColor: "#121212",
                    color: "#FAFAFA"
                }
            });

            return;
        }

        setFavList((prev) => [...prev, {...filme, watched: false}]);  
        toast.success("Filme salvo com sucesso!");
    }

    function deleteFilm(id: number){
        const newList = favList.filter(item => item.id !== id);
        setFavList(newList);
        toast.success("Filme removido com sucesso!");
    }

    function changeWatched(watched: boolean, id: number) {

        setFavList((prev) => 
            prev.map((item) =>
                item.id === id ? {...item, watched: watched} : item
            )
        );
    }

    useEffect(() => {
        localStorage.setItem("@favoritesMovie", JSON.stringify(favList));
    }, [favList])

    return (
        <FavoritesContext.Provider value={{ addFilm, favList, deleteFilm, changeWatched }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext };
