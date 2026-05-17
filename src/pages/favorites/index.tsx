import { FaUserAstronaut } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export function Favorites() {

    return (
        <main className="w-full min-h-screen">
            <section className="bg-indigo-500 max-w-2xl my-16 mx-auto rounded-md py-4 px-6 flex justify-around">
                <FaUserAstronaut className="text-neutral-200" size={68} />

                <div className="flex items-center gap-6 text-neutral-200 font-bold select-none">

                    <div className="text-3xl flex flex-col items-center">
                        <p>10</p>
                        <span>filmes</span>
                    </div>

                    <div className="text-3xl flex flex-col items-center"> 
                        <p>5</p>
                        <span>Assistidos</span>
                    </div>

                    <div className="text-3xl flex flex-col items-center">
                        <p>5</p>
                        <span>Assistir</span>
                    </div>
                </div>

            </section>

            <section className="px-4 flex flex-col gap-2 max-w-5xl mx-auto">

                <div className="rounded-md flex my-2 px-6 text-neutral-200 font-bold justify-between shadow-lg shadow-indigo-200">
                    <div className="flex gap-2 text-xl py-1">
                        <p>Mario Bros |</p>
                        <strong> 8.6 / 10</strong>                        
                    </div>
                    <div className="flex gap-2 text-xl">
                        <button className="cursor-pointer hover:bg-indigo-800 px-2 py-1 rounded-md duration-300">Assistir</button>
                        <button className="cursor-pointer hover:bg-indigo-800 px-2 py-1 rounded-md duration-300">Detalhes</button>
                        <button>
                            <IoClose size={30} className="cursor-pointer text-red-500" />
                        </button>
                    </div>
                </div>

                <div className="rounded-md flex my-2 px-6 text-neutral-200 font-bold justify-between shadow-lg shadow-sky-200">
                    <div className="flex gap-2 text-xl py-1">
                        <p>Mario Bros |</p>
                        <strong> 8.6 / 10</strong>                        
                    </div>
                    <div className="flex gap-2 text-xl">
                        <button className="cursor-pointer hover:bg-indigo-800 px-2 py-1 rounded-md duration-300">Assistir</button>
                        <button className="cursor-pointer hover:bg-indigo-800 px-2 py-1 rounded-md duration-300">Detalhes</button>
                        <button>
                            <IoClose className="cursor-pointer text-red-500" size={30} />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

