import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="w-full min-h-screen text-neutral-200 flex flex-col items-center justify-center">
            <h2 className="text-9xl font-bold select-none">
                404
            </h2>
            <p className="my-4 font-bold text-xl"> Página não encontrada</p>
            <Link to="/" className="cursor-pointer font-bold bg-gray-500 px-4 py-2 rounded-md" >Ir para Home</Link>
        </div>
    )
}

