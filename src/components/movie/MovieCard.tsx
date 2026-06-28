import { Link } from "react-router-dom";
import type { MovieProps } from "../../types/movie";

interface MovieCardProps {
    movie: MovieProps;
}

export function MovieCard({movie}: MovieCardProps) {
    return (
        <Link to={`/movie/${movie.id}`} className="bg-linear-to-b to-indigo-950 from-slate-950 from-40% rounded-md w-full h-full hover:scale-105 transition duration-500">

            <div className="p-4 flex flex-col gap-2 cursor-pointer flex-wrap">
                
                <img 
                    className="object-cover h-full w-full rounded-md"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={`Filme ${movie.title}`}
                />

                <p className="text-lg font-bold">{movie.title}</p>
                <div className="flex font-bold text-sm gap-1">
                    <p>⭐ {movie.vote_average.toFixed(1)} / 10 •</p>
                    <span className="text-gray-400">{movie.original_language.toLocaleUpperCase()}</span>
                    <span>•</span>
                    <p className="text-gray-400">{movie.release_date.split("-")[0]}</p>
                </div>

            </div>              
        </Link>
    )
}