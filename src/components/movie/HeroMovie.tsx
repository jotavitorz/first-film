import type { MovieProps } from "../../types/movie";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { useContext } from "react";

interface HeroMovieProps {
    movie: MovieProps;
}

export function HeroMovie({movie}: HeroMovieProps){

    const { addFilm } = useContext(FavoritesContext);

    return (
        <section className="flex flex-col-reverse items-center md:flex-row md:justify-around h-full">

            <div className="flex-1 flex flex-col mt-10 md:mt-0">

                <h1 className="text-4xl lg:text-5xl font-bold">
                    {movie.title}
                </h1>

                <p className="sm:w-10/12 mt-4 lg:mt-8 mb-2 lg:mb-4 lg:text-lg">
                    {movie.overview}
                </p>
                
                <div className="flex lg:text-lg gap-2">
                    <span>⭐⭐⭐⭐⭐</span>
                    <strong>{movie.vote_average.toFixed(1)} / 10</strong>
                </div>

                <div className="flex gap-8 mt-6 lg:mt-8">

                    <a 
                        rel="external noopener" 
                        target="_blank" 
                        href={`https://www.youtube.com/results?search_query=${movie.title}`} 
                        className="cursor-pointer bg-indigo-500 py-2 px-8 font-bold rounded-md"
                    >
                        Trailer
                    </a>
                    
                    <Link to={`/movie/${movie.id}`} className="cursor-pointer bg-indigo-500 py-2 px-8 font-bold rounded-md">Detalhes</Link>
                </div>                    
            </div>

            <div className="flex-1 w-full h-full text-center overflow-hidden">
                <img 
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="Foto do Filme"
                    className="rounded-tl-md rounded-tr-md object-cover w-full h-full inline hover:scale-104 duration-300 max-w-156.5 max-h-85 overflow-hidden"
                />
                <button 
                    className="bg-indigo-800 cursor-pointer w-full mb-auto py-2 font-bold rounded-bl-md rounded-br-md transition-all hover max-w-156.5"
                    onClick={() => addFilm(movie)}
                >
                    Salvar Filme
                </button>
            </div>

        </section>
    )
}