import { Link } from "react-router-dom"
import { FaUserAstronaut, FaFilm } from "react-icons/fa";

export function Header(){

    return (
        <div className="h-20 w-full px-4 bg-linear-to-b from-indigo-950 to-slate-950 from-60%">
            <header className="h-20 w-full max-w-7xl flex items-center gap-2 justify-between mx-auto">

                <div className="flex items-center gap-2">
                    <FaFilm className="text-indigo-500 text-3xl sm:text-[40px]" />
                    <Link to="/" className="text-neutral-200 text-2xl font-bold sm:text-3xl">
                        FIRST  
                        <span className="text-indigo-500"> FILM</span>
                    </Link>
                </div>

                <nav>   
                    <Link to="/favorites" className="text-neutral-200 flex items-center gap-2">
                        <FaUserAstronaut className="text-2xl md:text-[42px]" />
                        <span className="font-bold text-indigo-500">User</span>
                    </Link>
                </nav>

            </header>
        </div>
    )
}