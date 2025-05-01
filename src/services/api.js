import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function buscarFilmesPopulares() {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
        page: 1,
      },
    });

    const filmes = response.data.results;
    return filmes; 
  } catch (error) {
    console.error("Erro ao buscar filmes:", error.message);
    return [];
  }
}

export async function buscarTodosOsFilmes() {
  try {
    const generoResponse = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
      },
    });

    const listaGeneros = generoResponse.data.genres;

    const primeiraResposta = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
        sort_by: "popularity.desc",
        page: 1,
      },
    });

    const totalPages = primeiraResposta.data.total_pages;
    let todosFilmes = primeiraResposta.data.results;

    const LIMITE_PAGINAS = 5;
    const paginasParaBuscar = Math.min(totalPages, LIMITE_PAGINAS);

    const promessas = [];
    for (let page = 2; page <= paginasParaBuscar; page++) {
      promessas.push(
        axios.get(`${BASE_URL}/discover/movie`, {
          params: {
            api_key: API_KEY,
            language: "pt-BR",
            sort_by: "popularity.desc",
            page: page,
          },
        })
      );
    }

    const respostas = await Promise.all(promessas);
    respostas.forEach((res) => {
      todosFilmes = todosFilmes.concat(res.data.results);
    });

    const filmesComGeneros = todosFilmes.map((filme) => {
      const generosDoFilme = filme.genre_ids
        .map((id) => listaGeneros.find((g) => g.id === id)?.name)
        .filter(Boolean); 
      return {
        ...filme,
        genres: generosDoFilme,
      };
    });

    return filmesComGeneros;
  } catch (error) {
    console.error("Erro ao buscar todos os filmes:", error.message);
    return [];
  }
}

export async function buscarTodasAsSeries(paginas = 5) {
  const todasAsSeries = [];

  try {
    for (let page = 1; page <= paginas; page++) {
      const response = await axios.get(`${BASE_URL}/tv/popular`, {
        params: {
          api_key: API_KEY,
          language: 'pt-BR',
          page,
        },
      });

      todasAsSeries.push(...response.data.results);
    }

    return todasAsSeries;
  } catch (error) {
    console.error('Erro ao buscar séries:', error.message);
    return [];
  }
}

export default {buscarFilmesPopulares, buscarTodosOsFilmes, buscarTodasAsSeries};