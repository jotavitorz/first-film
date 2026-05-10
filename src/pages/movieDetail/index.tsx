import { useContext, useEffect} from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { useParams, useNavigate } from "react-router-dom";

export function MovieDetail() {
    const { loadFilm, filme, loading } = useContext(FavoritesContext);
    const { id } = useParams();
    const navigate = useNavigate();

    if(!id){
        return navigate("/", { replace: true});
    } 

    useEffect(() => {
        loadFilm(id);
    }, [id])
   

    if(loading){
        return (
            <div>
                <h2 className="pt-10 text-center text-neutral-200 text-3xl font-bold">Carregando Filme...</h2>
            </div>
        )
    }

    return (
        <main className="w-full min-h-dvh">

        </main>
    )
}