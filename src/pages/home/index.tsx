import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Link } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";

export function Home() {
    const { filmes, handleLoadMore, loading, addFilm } = useContext(FavoritesContext);
    const filmeDestaque = filmes[0];

    if(filmes.length === 0){
        return (
            <div>
                <h2 className="pt-10 text-center text-neutral-200 text-3xl font-bold">Carregando Filmess...</h2>
            </div>
        )
    }

    return (
        <div className="w-full min-h-screen bg-linear-to-b to-indigo-950 from-slate-950 from-60%">

            <main className="text-neutral-200 max-w-7xl py-8 sm:py-16 mx-auto px-4">
                
                {filmeDestaque && (
                    <section className="flex flex-col-reverse items-center md:flex-row md:justify-around h-full">

                        <div className="flex-1 flex flex-col mt-10 md:mt-0">

                            <h1 className="text-4xl lg:text-5xl font-bold">
                                {filmeDestaque.title}
                            </h1>

                            <p className="sm:w-10/12 mt-4 lg:mt-8 mb-2 lg:mb-4 lg:text-lg">
                                {filmeDestaque.overview}
                            </p>
                            
                            <div className="flex lg:text-lg gap-2">
                                <span>⭐⭐⭐⭐⭐</span>
                                <strong>{filmeDestaque.vote_average.toFixed(1)} / 10</strong>
                            </div>

                            <div className="flex gap-8 mt-6 lg:mt-8">

                                <a 
                                    rel="external noopener" 
                                    target="_blank" 
                                    href={`https://www.youtube.com/results?search_query=${filmeDestaque.title}`} 
                                    className="cursor-pointer bg-indigo-500 py-2 px-8 font-bold rounded-md"
                                >
                                    Trailer
                                </a>
                                
                                <Link to={`/movie/${filmeDestaque.id}`} className="cursor-pointer bg-indigo-500 py-2 px-8 font-bold rounded-md">Detalhes</Link>
                            </div>                    
                        </div>

                        <div className="flex-1 w-full h-full text-center overflow-hidden">
                            <img 
                                src={`https://image.tmdb.org/t/p/original${filmeDestaque.backdrop_path}`}
                                alt="Foto do Filme"
                                className="rounded-tl-md rounded-tr-md object-cover w-full h-full inline hover:scale-104 duration-300 max-w-156.5 max-h-85 overflow-hidden"
                            />
                            <button 
                                className="bg-indigo-800 cursor-pointer w-full mb-auto py-2 font-bold rounded-bl-md rounded-br-md transition-all hover max-w-156.5"
                                onClick={() => {addFilm(filmeDestaque)}}
                            >
                                Salvar Filme
                            </button>
                        </div>

                    </section>
                )}


                <div className="my-20 w-full max-w-xl mx-auto flex shadow-lg shadow-indigo-500">
                    <input 
                        type="text" 
                        placeholder="Buscar filme..."
                        className="bg-linear-to-r to-indigo-700 from-slate-900 from-80% h-12 w-full text-neutral-200 px-4 py-2 font-bold rounded-tl-md rounded-bl-md outline-none" 
                    />
                    <IoSearchOutline className="bg-indigo-700 cursor-pointer text-neutral-200 px-2 h-12 text-3xl rounded-tr-md rounded-br-md" size={50} />
                </div>

                <h2 className="text-neutral-200 text-4xl font-bold mb-4">Filmes</h2>

                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-neutral-200">
                {filmes.map((item) => (
                    <Link to={`/movie/${item.id}`} key={item.id} className="bg-linear-to-b to-indigo-950 from-slate-950 from-40% rounded-md w-full h-full hover:scale-105 transition duration-500">

                        <div className="p-4 flex flex-col gap-2 cursor-pointer flex-wrap">

                            <img 
                                className="object-cover h-full w-full rounded-md"
                                src={`https://image.tmdb.org/t/p/original${item.poster_path}`} 
                                alt={`Filme ${item.title}`}
                            />

                            <p className="text-lg font-bold">{item.title}</p>
                            <div className="flex font-bold text-sm gap-1">
                                <p>⭐ {item.vote_average.toFixed(1)} / 10 •</p>
                                <span className="text-gray-400">{item.original_language.toLocaleUpperCase()}</span>
                                <span>•</span>
                                <p className="text-gray-400">{item.release_date.split("-")[0]}</p>
                            </div>

                        </div>              
                    </Link>
                ))}
                </section>
                
                <div className="flex items-center justify-end-safe">
                    <button 
                        onClick={handleLoadMore} 
                        disabled={loading} 
                        className="mt-10 font-bold cursor-pointer bg-indigo-500 py-2 px-4 rounded-md">
                        {loading ? "Carregando..." : "Carregar mais"}
                    </button>  
                </div>    
            </main>
        </div>
    )
}