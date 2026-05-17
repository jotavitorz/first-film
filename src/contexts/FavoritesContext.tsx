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
    original_language: string;
}

interface FavoritesFilmProp {
    title: string;
    id: number;
    vote_average: number;
    watched?: boolean;
}

interface GenresProps {
    id: number;
    name: string;
}

interface FilmeProps {
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
    vote_count: number;
    genres: GenresProps[];
}

interface FavoritesProps {
    filmes: FilmesProps[];
    handleLoadMore: () => void;
    loading: boolean;
    loadFilm: (id: string) => void; 
    filme: FilmeProps | undefined;
    addFilm: (filme: FavoritesFilmProp) => void;
    favList: FavoritesFilmProp[];
    deleteFilm: (id: number) => void;
    changeWatched: (watched: boolean, id: number) => void;
}

const FavoritesContext = createContext({} as FavoritesProps);

interface ChildrenProviderProps {
    children: ReactNode;
}

export function FavoritesProvider({ children}: ChildrenProviderProps) {
    const [filmes, setFilmes] = useState<FilmesProps[]>([]);
    const [filme, setFilme] = useState<FilmeProps | undefined>();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [favList, setFavList] = useState<FavoritesFilmProp[]>(
        () => {
            const storage = localStorage.getItem("@favoritesMovie");
            return storage ? JSON.parse(storage) : [];
        }
    );

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

    async function loadFilm(id: string) {
        setLoading(true);

        try {
            const response = await api.get(`movie/${id}`, {
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: "pt-br",
                }
            })
            console.log(response.data);
            setFilme(response.data);       
        }catch(error){
            console.log("Error: " + error);
            
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
    }

    function addFilm(filme: FavoritesFilmProp){
        if(favList.find((favFilm) => favFilm.id === filme.id)){
            alert("filme salvo");
            return;
        }

        setFavList((prev) => [...prev, {...filme, watched: false}]);  
    }

    function deleteFilm(id: number){
        const newList = favList.filter(item => item.id !== id);
        setFavList(newList);
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
        <FavoritesContext.Provider value={{filmes, handleLoadMore, loading, loadFilm, filme, addFilm, favList, deleteFilm, changeWatched}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext };
