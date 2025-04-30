import { useParams } from "react-router-dom";
import { mockMovies } from "../banco"; 

export const FilmeEscolhido = () => {
  const { id } = useParams();
  const filme = mockMovies.find((f) => f.id === Number(id));

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
        alt={filme.title}
        className="w-64 rounded shadow mb-4"/>
      <p className="mb-2">Data de lançamento: {filme.release_date}</p>
      <p className="mb-2">Nota: {filme.vote_average}</p>
      <p className="text-gray-300">{filme.overview}</p>
    </div>
  );
};
