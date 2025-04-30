import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { buscarTodosOsFilmes } from "../services/api"; // Certifique-se de importar isso

export const FilmeEscolhido = () => {
  const [filmes, setFilmes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function carregarFilmes() {
      const lista = await buscarTodosOsFilmes();
      setFilmes(lista);
    }

    carregarFilmes();
  }, []);

  const filme = filmes.find((f) => f.id === Number(id));

  if (!filme) {
    return <div className="text-white p-6">Carregando filme...</div>;
  }

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
        alt={filme.title}
        className="w-64 rounded shadow mb-4"
      />
      <p className="mb-2">Data de lançamento: {filme.release_date}</p>
      <p className="mb-2">Nota: {filme.vote_average}</p>
      <p className="text-gray-300">{filme.overview}</p>
    </div>
  );
};
