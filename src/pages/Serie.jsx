import { Link } from "react-router-dom";
import { buscarTodasAsSeries } from "../services/api";
import { useState, useEffect } from "react";

export const Serie = () => {
  const [series, setSeries] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const seriesPorPagina = 10; 

  useEffect(() => {
    async function carregarSerie() {
      const lista = await buscarTodasAsSeries();
      setSeries(lista);
    }

    carregarSerie();
  }, []);

  const seriesUnicas = Array.from(new Map(series.map(s => [s.id, s])).values());

  const totalPaginas = Math.ceil(seriesUnicas.length / seriesPorPagina);
  const indiceInicial = (paginaAtual - 1) * seriesPorPagina;
  const seriesVisiveis = seriesUnicas.slice(indiceInicial, indiceInicial + seriesPorPagina);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {seriesVisiveis.map((serie) => (
          <Link to={`/serieEscolhido/${serie.id}`} key={serie.id}>
            <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 transition hover:scale-105 hover:bg-purple-700">
              <h2 className="text-xl font-bold mb-2">{serie.name || serie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name || serie.title}
                className="w-full h-auto rounded mb-2"
              />
              <p><span className="font-bold">Data:</span> {serie.first_air_date}</p>
              <p><span className="font-bold">Nota:</span> {serie.vote_average.toFixed(1)} <i className="fa fa-star text-yellow-500"></i></p>
            </div>
          </Link>
        ))}
      </div>

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
