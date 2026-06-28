import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
    onWantedMovie: string;
    onSetWantedMovie: (movie: string) => void;
    onSearch: () => void;
}

export function SearchBar({ onSearch, onSetWantedMovie, onWantedMovie}: SearchBarProps){


    return (
        <div className="my-20 w-full max-w-xl mx-auto flex shadow-lg shadow-indigo-500">

            <input
                value={onWantedMovie}
                onChange={e => onSetWantedMovie(e.target.value)}
                type="text" 
                placeholder="Buscar filme..."
                className="bg-linear-to-r to-indigo-700 from-slate-900 from-80% h-12 w-full text-neutral-200 px-4 py-2 font-bold rounded-tl-md rounded-bl-md outline-none" 
            />
            
            <button onClick={onSearch}>
                <IoSearchOutline  
                    className="bg-indigo-700 cursor-pointer text-neutral-200 px-2 h-12 text-3xl rounded-tr-md rounded-br-md" 
                    size={50} 
                />
            </button>

        </div>        
    )
}