import { SeriePesquisa } from "../components/filter/SeriePesquisa";
import { useSearch } from "../contexts/SearchContext";

export const ResultadosSerie = () => {
  const { searchResults } = useSearch();

  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
          <i className="fas fa-search text-white text-3xl"></i>
        </div>
        <h1 className="text-3xl text-white font-bold">Resultados da Busca de serie</h1>
      </div>
      <SeriePesquisa results={searchResults} />
    </div>
  );
};
