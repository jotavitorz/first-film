import { useContext, useEffect} from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { useParams, useNavigate } from "react-router-dom";

export function MovieDetail() {
    const { loadFilm, filme, loading, addFilm } = useContext(FavoritesContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(!id){
            navigate("/", { replace: true });
            return;
        }

        loadFilm(id);

    }, [id]);
   

    if(loading){
        return (
            <div>
                <h2 className="pt-10 text-center text-neutral-200 text-3xl font-bold">Carregando Filme...</h2>
            </div>
        )
    }

    return (
        <main className="w-full h-full min-h-dvh">

            <div className="flex flex-col-reverse lg:flex-row w-full h-full overflow-hidden">
                <section className="bg-neutral-950 w-full lg:w-10/12 flex lg:min-h-dvh pt-2 pb-14 md:py-16 overflow-hidden">
                    {filme && (
                        <div className="w-full px-1 h-full flex items-center pl-4 lg:pl-8 md:flex-row md:justify-around text-neutral-200 overflow-hidden">

                            <div className="flex-1 flex flex-col mt-10 md:mt-0">

                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    {filme.title}
                                </h3>

                                <p className="w-11/12 mt-4 lg:mt-8 mb-2 lg:mb-4 lg:text-lg xl:text-xl">
                                    {filme.overview}
                                </p>
                                
                                <div className="flex lg:text-lg gap-2">
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <strong>{filme.vote_average.toFixed(1)} / 10</strong>
                                </div>

                                <div className="flex gap-2 w-fit font-bold mt-4 text-center">
                                    {filme.genres.length > 0 && filme.genres.map((genre) => (
                                        <span key={genre.id} className="rounded-md border-indigo-500 border-2 px-1.5 text-neutral-200" >
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-8 mt-6 lg:mt-8">
                                    <a 
                                        rel="external noopener" 
                                        target="_blank" 
                                        href={`https://www.youtube.com/results?search_query=${filme.title}`} 
                                        className="cursor-pointer bg-indigo-500 py-2 px-8 font-bold rounded-md"
                                    >
                                            Trailer
                                    </a>
                                    <button 
                                        className="cursor-pointer bg-indigo-500 py-2 px-8 font-bold rounded-md"
                                        onClick={() => addFilm(filme)}
                                    >
                                        Salvar
                                    </button>
                                </div>

                            </div>

                        </div>
                        )
                    }
                </section>

                <section className="w-full h-96 md:w-full md:min-h-dvh bg-no-repeat bg-cover bg-center hover:scale-102 duration-300 overflow-hidden"
                    style={{backgroundImage: filme?.backdrop_path && `url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`}}
                >
                    <div className="w-full md:min-h-dvh bg-linear-to-l to-neutral-950 from-white-950 from-60%"></div>
                </section>
            </div>
            
        </main>
    )
}