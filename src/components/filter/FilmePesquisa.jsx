import { Link } from "react-router-dom";

export const FilmePesquisa = ({ results = [] }) => {
    if (results.length == 0) {
      return <p className="text-white">Nenhum resultado encontrado.</p>;
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {results.map((filme) => (

          <Link to={`/filmeEscolhido/${filme.id}`}  key={filme.id} >
            <div 
             
              className="bg-gray-800 text-white rounded-lg shadow-md p-4 transition hover:scale-105 hover:bg-purple-700">
              <h2 className="text-xl font-bold mb-2">{filme.title}</h2>
              <div className="flex justify-between">
                <p className="text-gray-300">{filme.release_date}</p>
                <p className="text-gray-300">{filme.vote_average}</p>
              </div>
            </div>
          </Link>

        ))}
      </div>
    );
  };
  