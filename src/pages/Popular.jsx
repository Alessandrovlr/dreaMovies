import { buscarFilmesPopulares } from "../services/api";
import { MovieCard } from "../components/movie/MovieCard";
import { useState, useEffect } from "react";

export const Popular = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {
      const lista = await buscarFilmesPopulares();
      const dadosOrdenados = lista.sort((a, b) => b.vote_average - a.vote_average);
      const filmesUnicos = Array.from(new Map(dadosOrdenados.map(s => [s.id, s])).values());
      setFilmes(filmesUnicos);
    }

    carregarFilmes();
  }, []);

  
  return (
    <div className="p-10">
      <MovieCard filmesVisiveis={filmes} />
    </div>
  );
};
