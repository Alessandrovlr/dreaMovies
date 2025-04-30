import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { buscarTodosOsFilmes } from "../services/api";

export const FilmeEscolhido = () => {
  const [filmes, setFilmes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
    //Deixa o scroll no começo da página quando abre um filme
    async function carregarFilmes() {
      const lista = await buscarTodosOsFilmes();
      setFilmes(lista);
    }

    carregarFilmes();
  }, []);

  const filme = filmes.find((f) => f.id === Number(id));

  if (!filme) {
    return (
      <div className=" flex flex-col justify-center items-center p-6 h-[87vh] gap-5">
        <h1 className="text-white font-mono text-6xl font-bold">Error 404</h1>
        <p className="text-white font-mono text-xl font-thin">
          Filme não encontrado.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-center items-center gap-15">
      <div className="h-[87vh] mt-10 ml-5">
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
          className="h-[75vh] rounded-xl shadow mb-4"
        />
      </div>
      <div className="flex flex-col h-[87vh] w-[50%] mt-15 gap-3">
        <h1 className="text-3xl font-bold mb-4 mt-5">{filme.title}</h1>
        <p className="mb-2 text-lg">
          <span className="font-bold">Data de lançamento:</span>{" "}
          {filme.release_date}
        </p>
        <p className="mb-2 text-lg ">
          <span className="font-bold text-white">Nota: </span>
          {filme.vote_average.toFixed(1) + " "}
          <i className="fa fa-star text-yellow-500"></i>
        </p>
        <p className="text-gray-300 text-lg">
          {filme.overview ? filme.overview : "Descrição não disponível"}
        </p>
      </div>
    </div>
  );
};
