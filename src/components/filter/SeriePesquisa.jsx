import { Link } from "react-router-dom";

export const SeriePesquisa = ({ results = [] }) => {
  if (results.length === 0) {
    return <p className="text-white">Nenhuma série encontrada.</p>;
  }

  const seriesUnicas = Array.from(
    new Map(results.map((s) => [s.id, s])).values()
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-10">
      {seriesUnicas.map((serie) => (
        <Link to={`/serieEscolhido/${serie.id}`} key={serie.id}>
          <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 transition hover:scale-105 hover:bg-purple-700">
            <h2 className="text-xl font-bold mb-2">{serie.name}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              alt={serie.name}
              className="w-full h-auto rounded mb-2"
            />
            <div className="flex flex-col">
              <p className="text-gray-300">Data: {serie.first_air_date}</p>
              <p className="text-gray-300">
                Nota: {serie.vote_average?.toFixed(1)}
                <i className="fa fa-star text-yellow-500 ml-1"></i>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
