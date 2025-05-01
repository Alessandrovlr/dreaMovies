import { useState, useEffect } from "react";
import { buscarTodosOsFilmes } from "../services/api";
import { MovieCard } from "../components/movie/MovieCard";

export const Filme = () => {
  const [filmes, setFilmes] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const filmesPorPagina = 15;

  useEffect(() => {
    async function carregarFilmes() {
      const lista = await buscarTodosOsFilmes();
      setFilmes(lista);
    }

    carregarFilmes();
  }, []);

  const totalPaginas = Math.ceil(filmes.length / filmesPorPagina);
  const indiceInicial = (paginaAtual - 1) * filmesPorPagina;
  const filmesVisiveis = filmes.slice(indiceInicial, indiceInicial + filmesPorPagina);

  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  return (
    <div className="p-10">

        <MovieCard filmesVisiveis={filmesVisiveis}/>

      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={paginaAnterior}
          disabled={paginaAtual === 1}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800 disabled:opacity-50"
        >
          ⬅ Anterior
        </button>

        <span className="text-white text-lg">Página {paginaAtual} de {totalPaginas}</span>

        <button
          onClick={proximaPagina}
          disabled={paginaAtual === totalPaginas}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800 disabled:opacity-50"
        >
          Próxima ➡
        </button>
      </div>
    </div>
  );
};
