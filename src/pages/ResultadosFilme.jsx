import { FilmePesquisa } from "../components/filter/FilmePesquisa";
import { useSearch } from "../contexts/SearchContext";

export const ResultadosFilme = () => {
  const { searchResults } = useSearch();

  return (
    <div className="flex flex-col justify-center items-center min-h-[87vh] overflow-auto">
      <div className="flex flex-col items-center mt-10">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
          <i className="fas fa-search text-white text-3xl"></i>
        </div>
        <h1 className="text-3xl text-white font-bold">Resultados da Busca de filmes</h1>
      </div>
      <FilmePesquisa results={searchResults} />
    </div>
  );
};
