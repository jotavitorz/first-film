import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export async function getNowPlayingMovie(page: number) {
    const response = await api.get("movie/now_playing", {
        params: {
            api_key: import.meta.env.VITE_API_KEY,
            language: "pt-BR",
            page,
        }
    })

    return response.data.results;
}

export async function searchMovies(name: string) {
    const response = await api.get("search/movie", {
        params: {
            query: name,
            api_key: import.meta.env.VITE_API_KEY,
            language: "pt-BR",
        }
    })

    return response.data.results;
}

export async function getMovieById(id: string){
    const response = await api.get(`movie/${id}`, {
        params: {
            api_key: import.meta.env.VITE_API_KEY,
            language: "pt-BR",
        }
    })

    return response.data;
}

export { api };

