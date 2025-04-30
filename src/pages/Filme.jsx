import { Link } from "react-router-dom";
import { mockMovies } from "../banco"

export const Filme = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 p-10">
          {mockMovies.map((filme) => (
             <Link to={`/filmeEscolhido/${filme.id}`}  key={filme.id} >
                <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 transition hover:scale-105 hover:bg-purple-700">
                    <h2 className="text-xl font-bold mb-2">{filme.title}</h2>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                        alt={filme.title}
                        className="w-full h-auto rounded mb-2"/>
                    <p>Data de lançamento: {filme.release_date}</p>
                    <p>Nota: {filme.vote_average}</p>
                    <p className="text-gray-400 text-sm mt-2">{filme.overview}</p>
                </div>
             </Link>
          ))}
        </div>
    );
};
