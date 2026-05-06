import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Link } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";


export function Home() {
    const { filmes } = useContext(FavoritesContext);
    const filmeDestaque = filmes[0];

    if(filmes.length === 0){
        return (
            <div className="w-full min-h-screen bg-linear-to-b to-indigo-950 from-slate-950 from-60%">
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
                                <strong>{filmeDestaque.vote_average} / 10</strong>
                            </div>

                            <div className="flex gap-8 mt-6 lg:mt-8">
                                <button className="cursor-pointer bg-indigo-500 py-2 px-8 font-bold rounded-md">Trailer</button>
                                <Link to="/movie/fordvsferrari" className="cursor-pointer bg-indigo-500 py-2 px-8 font-bold rounded-md">Detalhes</Link>
                            </div>                    
                        </div>

                        <div className="flex-1 w-full h-full text-center">
                            <img 
                                src={`https://image.tmdb.org/t/p/original${filmeDestaque.backdrop_path}`}
                                alt="Foto do Filme"
                                className="rounded-tl-md rounded-tr-md object-cover w-full h-full inline max-w-156.5 max-h-85"
                            />
                            <button 
                                className="bg-indigo-800 cursor-pointer w-full mb-auto py-2 font-bold rounded-bl-md rounded-br-md transition-all hover max-w-156.5"
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

                <section className="grid grid-cols-5 gap-6 text-neutral-200">
                {filmes.map((item) => (
                    

                    <div key={item.id} className="mb-10">
                        <img 
                            className="object-cover h-full min-h-72 w-full rounded-md"
                            src={`https://image.tmdb.org/t/p/original${item.poster_path}`} 
                            alt="Foto do Filme" />
                        <p className="font-bold text-xl mt-0.5">{item.title}</p>
                        <div className="flex justify-between px-0.5">
                            <span>{item.vote_average} / 10</span>
                            <p className="font-bold text-gray-400">{item.release_date}</p>
                        </div>
                    </div>              
                
                ))}
                </section>      
            </main>
        </div>
    )
}