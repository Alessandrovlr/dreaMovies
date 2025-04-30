import { Link } from "react-router-dom";
import { buscarTodosOsFilmes } from "../services/api";
import { useState, useEffect } from "react";

export const Filme = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {
      const lista = await buscarTodosOsFilmes();
      setFilmes(lista);
    }

    carregarFilmes();
  }, []);

  const filmesUnicos = Array.from(
    new Map(filmes.map((f) => [f.id, f])).values()
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
            <p>
              <span className="font-bold">Data: </span> {filme.release_date}
            </p>
            <p>
              <span className="font-bold">Nota: </span>
              {filme.vote_average.toFixed(1)}{" "}
              <i className="fa fa-star text-yellow-500"></i>
            </p>
            {/* <p className="text-gray-400 text-sm mt-2">{filme.overview}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};
