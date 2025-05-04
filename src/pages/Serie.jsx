import { buscarTodasAsSeries } from "../services/api";
import { useState, useEffect } from "react";
import { SerieCard } from "../components/serie/SerieCard";

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

      <SerieCard seriesVisiveis={seriesVisiveis} />

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
