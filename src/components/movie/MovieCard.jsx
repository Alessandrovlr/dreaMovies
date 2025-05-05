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
            <div className="flex flex-wrap w-[100%] items-start gap-1">
              {filme.genres.map((element) => {
                let cor;
                switch (element) {
                  case "Ação":
                    cor = "bg-orange-500";
                    break;
                  case "Crime":
                    cor = "bg-red-600";
                    break;
                  case "Thriller":
                    cor = "bg-purple-500";
                    break;
                  case "Família":
                    cor = "bg-blue-600";
                    break;
                  case "Aventura":
                    cor = "bg-green-500";
                    break;
                  case "Documentário":
                    cor = "bg-gray-500";
                    break;
                  case "Comédia":
                    cor = "bg-yellow-500";
                    break;
                  case "Fantasia":
                    cor = "bg-pink-500";
                    break;
                  case "Terror":
                    cor = "bg-black";
                    break;
                  case "Faroeste":
                    cor = "bg-orange-900";
                    break;
                  case "Música":
                    cor = "bg-purple-900";
                    break;
                  case "Mistério":
                    cor = "bg-gray-700";
                    break;
                  case "Ficção científica":
                    cor = "bg-blue-400";
                    break;
                  case "Drama":
                    cor = "bg-red-400";
                    break;
                  case "Guerra":
                    cor = "bg-green-900";
                    break;
                  case "Romance":
                    cor = "bg-[#800000]";
                    break;
                  case "Animação":
                    cor = "bg-yellow-600";
                    break;
                }
                return (
                  <p
                    className={`${cor} p-1 rounded w-fit text-white font-bold`}
                  >
                    {element}
                  </p>
                );
              })}
            </div>
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
