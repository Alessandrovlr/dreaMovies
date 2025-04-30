import { Link } from "react-router-dom";
import { buscarTodasAsSeries } from "../services/api";
import { useState, useEffect } from "react";

export const Serie = () => {

     const [serie, setSerie] = useState([]);
    
      useEffect(() => {
        async function carregarSerie() {
          const lista = await buscarTodasAsSeries();
          setSerie(lista);
        }
    
        carregarSerie();
      }, []);
    
      const seriesUnicas = Array.from(new Map(serie.map(f => [f.id, f])).values());

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-10">
          {seriesUnicas.map((serie) => (
            <Link to={`/filmeEscolhido/${serie.id}`} key={serie.id}>
              <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 transition hover:scale-105 hover:bg-purple-700">
                <h2 className="text-xl font-bold mb-2">{serie.title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.title}
                  className="w-full h-auto rounded mb-2"
                />
                <p>Data: {serie.release_date}</p>
                <p>Nota: {serie.vote_average}</p>
                {/* <p className="text-gray-400 text-sm mt-2">{filme.overview}</p> */}
              </div>
            </Link>
          ))}
        </div>
      );
}