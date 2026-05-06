import { createContext, useState, useEffect, type ReactNode } from "react";
import { api } from "../services/tmdbService";

interface FilmesProps {
    id: number;
    overview: string;
    backdrop_path: string;
    original_title: string;
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    adult: boolean;
    genre_ids: number[];
    original_language: string;
    popularity: number;
    softcore: boolean;
    video: boolean;
    vote_count: number;
}

interface FavoritesProps {
    filmes: FilmesProps[];
    handleLoadMore: () => void;
    loading: boolean;
}

const FavoritesContext = createContext({} as FavoritesProps);

interface ChildrenProviderProps {
    children: ReactNode;
}

export function FavoritesProvider({ children}: ChildrenProviderProps) {
    const [filmes, setFilmes] = useState<FilmesProps[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    async function loadFilms(pageNumber: number) {

        setLoading(true);
        
        try {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: "pt-BR",
                    page: pageNumber,
                }
            })

            const allFilm = response.data.results.slice(0, 10);
            setFilmes([...filmes, ...allFilm]);

        }catch(error) {
            console.log("Error: " + error)
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadFilms(page);
    }, [page])

    function handleLoadMore() {
        const nextPage = page + 1;
        setPage(nextPage);
        loadFilms(nextPage);
    }

    return (
        <FavoritesContext.Provider value={{filmes, handleLoadMore, loading}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext };
