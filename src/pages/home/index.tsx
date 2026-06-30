import { useEffect, useState } from "react";
import { getNowPlayingMovie, searchMovies } from "../../services/tmdbService";
import type { MovieProps } from "../../types/movie";
import toast from "react-hot-toast";
import { HeroMovie } from "../../components/movie/HeroMovie";
import { MovieCard } from "../../components/movie/MovieCard";
import { SearchBar } from "../../components/movie/SearchBar";

export function Home() {
    const [filmes, setFilmes] = useState<MovieProps[]>([]);
    const [loading, setLoading] = useState(false);
    const filmeDestaque =  filmes[0];
    const [wantedMovie, setWantedMovie] = useState("");
    const [page, setPage] = useState(1);

    function pageMovies() {
        const nextPage = page + 1;
        setPage(nextPage);      
    }

    async function loadMoreMovies(pageNumber: number): Promise<void> {
        setLoading(true);
        console.log("Carregando página:", pageNumber);

        try {
            const movies = await getNowPlayingMovie(pageNumber);
            const allmovies = movies.slice(0, 10);
            setFilmes((prev) => {
            const newMovies = allmovies.filter(
                (movie: MovieProps) => !prev.some((item) => item.id === movie.id)
            );

            return [...prev, ...newMovies];
            });
        }catch(error){
            console.log("Error: " + error);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadMoreMovies(page);
    }, [page])


    async function search() {

        try {
            const movies = await searchMovies(wantedMovie);
            console.log(movies);
            setFilmes(movies);
        }catch(error){
            console.log(error);
            toast.error("Erro ao buscar filme");
        }
    }

    console.table(filmes);

    return (
        <div className="w-full min-h-screen bg-linear-to-b to-indigo-950 from-slate-950 from-60%">

            <main className="text-neutral-200 max-w-7xl py-8 sm:py-16 mx-auto px-4">
                
                {filmeDestaque ? (
                    <HeroMovie
                        movie={filmeDestaque}
                    />
                ) : (
                    <div></div>
                )}

                <SearchBar
                    onSearch={search}
                    onSetWantedMovie={setWantedMovie}
                    onWantedMovie={wantedMovie}
                />



                {
                    filmes.length > 0 ? (
                        <h2 className="text-neutral-200 text-4xl font-bold mb-4">Filmes</h2>                            
                    ) : (
                        <div>
                            <p className="text-center font-bold text-2xl">Filme não encontrado! 😢</p>
                        </div>
                    )
                }


                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-neutral-200">
                {filmes.map((item) => (
                    <MovieCard
                        movie={item}
                        key={item.id}
                    />
                ))}
                </section>

                {wantedMovie === "" && (
                    <div className="flex items-center justify-end-safe">
                        <button 
                            onClick={pageMovies} 
                            disabled={loading} 
                            className="mt-10 font-bold cursor-pointer bg-indigo-500 py-2 px-4 rounded-md">
                            {loading ? "Carregando..." : "Carregar mais"}
                        </button>  
                    </div> 
                )}
                
            </main>
        </div>
    )
}