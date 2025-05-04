import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { buscarTodosOsFilmes, buscarTodasAsSeries } from "../services/api";
import { useSearch } from "../contexts/SearchContext";

export const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [series, setSeries] = useState([]);
  const { searchResults, setTipoDeBusca } = useSearch();

  useEffect(() => {
    async function carregarDados() {
      const filmesData = await buscarTodosOsFilmes();
      const seriesData = await buscarTodasAsSeries();
      setFilmes(filmesData);
      setSeries(seriesData);
      setTipoDeBusca("home");
    }

    carregarDados();
  }, []);

  const setinha = <i className="fas fa-arrow-circle-right text-3xl"></i>;

  return (
    <div className="flex flex-col justify-center w-[100%] min-h-[87vh]">
      <main className="flex flex-col justify-center gap-[5%] items-center mx-auto px-4 py-8">
        <h1 className="text-6xl font-bold mb-4">Bem-vindo à DreaMovies</h1>
        <p className="text-2xl text-gray-300 mb-8">
          Descubra, explore e divirta-se no mundo do cinema
        </p>

        <Link
          to="/filme"
          className="p-[2.5%] font-bold decoration-0 rounded-2xl bg-[rgb(117,47,163)] text-3xl text-white"
        >
          Buscar Filmes {setinha}
        </Link>
      </main>
    </div>
  );
};
