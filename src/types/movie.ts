
interface BaseMovie {
    id: number;
    overview: string;
    backdrop_path: string;
    original_title: string;
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    original_language: string;
}

export interface MovieProps extends BaseMovie {};

export interface FavoriteMovieProps {
    title: string;
    id: number;
    vote_average: number;
    watched?: boolean;
}

export interface GenresProps {
    id: number;
    name: string;
}

export interface MovieDetails extends BaseMovie{
    adult: boolean;
    genre_ids: number[];
    popularity: number;
    vote_count: number;
    genres: GenresProps[];
}
