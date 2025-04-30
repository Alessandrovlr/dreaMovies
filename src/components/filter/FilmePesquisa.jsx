import { Link } from "react-router-dom";

export const FilmePesquisa = ({ results = [] }) => {
  if (results.length == 0) {
    return <p className="text-white">Nenhum resultado encontrado.</p>;
  }

  const filmesUnicos = Array.from(
    new Map(results.map((f) => [f.id, f])).values()
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-10">
      {filmesUnicos.map((filme) => (
        <Link to={`/filmeEscolhido/${filme.id}`} key={filme.id}>
          <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 transition hover:scale-105 hover:bg-purple-700">
            <h2 className="text-xl font-bold mb-2">{filme.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              alt={filme.title}
              className="w-full h-auto rounded mb-2"
            />
            <div className="flex flex-col">
              <p className="text-gray-300">Data: {filme.release_date}</p>
              <p className="text-gray-300">
                Nota: {filme.vote_average.toFixed(1)}
                <i className="fa fa-star text-yellow-500"></i>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
