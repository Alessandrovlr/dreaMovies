const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}&page=1`);
  const data = await response.json();
  return data.results;
}
export async function searchSeries(query) {
  const response = await fetch(`${BASE_URL}/search/serie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
  const data = await response.json();
  return data.results;
}