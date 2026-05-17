import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Link } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export function Favorites() {
    const { favList, deleteFilm, changeWatched } = useContext(FavoritesContext);
    const watched = favList.filter(item => item.watched === true);

    return (
        <main className="w-full min-h-screen">
            <section className="bg-indigo-500 max-w-2xl my-16 mx-auto rounded-md py-4 px-6 flex justify-around">
                <FaUserAstronaut className="text-neutral-200" size={68} />

                <div className="flex items-center gap-6 text-neutral-200 font-bold select-none">

                    <div className="text-3xl flex flex-col items-center">
                        <p>{favList.length}</p>
                        <span>filmes</span>
                    </div>

                    <div className="text-3xl flex flex-col items-center"> 
                        <p>{watched.length}</p>
                        <span>Assistidos</span>
                    </div>

                    <div className="text-3xl flex flex-col items-center">
                        <p>{favList.length - watched.length}</p>
                        <span>Assistir</span>
                    </div>
                </div>

            </section>

            <section className="px-4 flex flex-col gap-2 max-w-5xl mx-auto text-indigo-200">

                {favList.map((movie) => (
                    <div 
                        className={`rounded-md flex my-2 px-6 text-neutral-200 font-bold justify-between shadow-lg ${movie.watched ? "shadow-indigo-600" : "shadow-indigo-200"}`}
                    >

                        <div className="flex gap-2 text-xl py-1">
                            <p>{movie.title} |</p>
                            <strong> {movie.vote_average.toFixed(1)} / 10</strong>                        
                        </div>
                        <div className="flex gap-2 text-xl">

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

