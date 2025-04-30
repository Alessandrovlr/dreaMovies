import { buscarFilmesPopulares } from "../services/api";
import { useState, useEffect } from "react";

export const Popular = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {
      const lista = await buscarFilmesPopulares();
      setFilmes(lista);
    }

    carregarFilmes();
  }, []);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-6 p-10">
      {filmes.map((filme) => (
        <li key={filme.id}>
          <strong>{filme.title}</strong>
          <br />
          <img
            src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`}
            alt={filme.title}
          />
          <p>{filme.vote_average}</p>
        </li>
      ))}
    </ul>
  );
};
