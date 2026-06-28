import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Link } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export function Favorites() {
    const { favList, deleteFilm, changeWatched } = useContext(FavoritesContext);
    const watched = favList.filter(item => item.watched === true);

    return (
        <main className="w-full min-h-screen px-4 mb-16">
            <section className="sm:bg-indigo-500 max-w-2xl my-16 mx-auto rounded-md py-4 px-6 flex flex-col items-center gap-4 sm:flex-row justify-around">
                <FaUserAstronaut className="text-neutral-200 text-6xl sm:text-7xl" />

                <div className="bg-indigo-500 rounded-md px-4 py-2 sm:px-0 sm:py-0 flex items-center gap-6 text-neutral-200 font-bold select-none">

                    <div className="text-2xl sm:text-3xl flex flex-col items-center">
                        <p>{favList.length}</p>
                        <span>filmes</span>
                    </div>

                    <div className="text-2xl sm:text-3xl flex flex-col items-center"> 
                        <p>{watched.length}</p>
                        <span>Assistidos</span>
                    </div>

                    <div className="text-2xl sm:text-3xl flex flex-col items-center">
                        <p>{favList.length - watched.length}</p>
                        <span>Assistir</span>
                    </div>
                </div>

            </section>

            <section className="flex flex-col gap-4 sm:gap-2 max-w-5xl mx-auto text-indigo-200">

                {favList.map((movie) => (
                    <div
                        key={movie.id}
                        className={`rounded-md flex flex-col md:flex-row my-2 px-6 text-neutral-200 font-bold md:justify-between shadow-lg ${movie.watched ? "shadow-indigo-600" : "shadow-indigo-200"}`}
                    >

                        <div className="flex gap-2 text-lg sm:text-xl py-1">
                            <p>{movie.title} </p>
                            <strong className="hidden sm:block">| {movie.vote_average.toFixed(1)} / 10</strong>                        
                        </div>

                        <div className="flex justify-between gap-2 text-xl">

                            <button 
                                onClick={() => changeWatched(!movie.watched, movie.id)} 
                                className="cursor-pointer hover:bg-indigo-800 px-2 py-1 rounded-md duration-300"
                            >
                                {movie.watched ? "Assisti" : "Assistir"}
                            </button>

                            <Link to={`/movie/${movie.id}`} className="cursor-pointer hover:bg-indigo-800 px-2 py-1 rounded-md duration-300">Detalhes</Link>

                            <button onClick={() => {deleteFilm(movie.id)}}>
                                <IoClose size={30} className="cursor-pointer text-red-500" />
                            </button>
                        </div>
                    </div>
                ))}

            </section>
        </main>
    )
}

