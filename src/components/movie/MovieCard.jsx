import { Link } from "react-router-dom";

export const MovieCard = ({ filmesVisiveis }) => {
  if (!Array.isArray(filmesVisiveis)) {
    return <p className="text-white">Nenhum filme encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
      {filmesVisiveis.map((filme) => (
        <Link to={`/filmeEscolhido/${filme.id}`} key={filme.id}>
          <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 transition hover:scale-105 hover:bg-purple-700">
            <h2 className="text-xl font-bold mb-2">{filme.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              alt={filme.title}
              className="w-full h-auto rounded mb-2"
            />
            <p>
              <span className="font-bold">Gêneros: </span>
              {filme.genres?.join(", ") || "N/A"}
            </p>
            <p>
              <span className="font-bold">Data: </span>
              {filme.release_date}
            </p>
            <p>
              <span className="font-bold">Nota: </span>
              {filme.vote_average?.toFixed(1)}{" "}
              <i className="fa fa-star text-yellow-500"></i>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
