import { FilmePesquisa } from "../components/filter/FilmePesquisa";
import { useSearch } from "../contexts/SearchContext";


export const Resultado = () => {
  const { searchResults } = useSearch();

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col items-center space-x-4">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
          <i className="fas fa-search text-white text-3xl"></i>
        </div>
        <h1 className="text-3xl text-white font-bold">Resultados da Busca</h1>
      </div>
  
      <FilmePesquisa results={searchResults} />
    </div>
  );
}  
