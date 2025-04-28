import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_KEY = '3e7d1c2d67ec5a9d0736a049b463a373';

function MovieDetails() {
  const { id } = useParams();  // pegar o :id da URL
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="p-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-purple-500 hover:underline">← Voltar</button>
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="mb-4" />
      <p className="text-gray-300">{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
