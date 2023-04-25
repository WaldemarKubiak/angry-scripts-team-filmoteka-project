export { API_KEY, MAIN_URL };

const API_KEY = '7181a2b710caf29c7153fca4f71ab7d2';
const MAIN_URL = 'https://api.themoviedb.org/3';

//---Przykładowe zapytanie do api---///
//---`${MAIN_URL}/movie/550?api_key=${API_KEY}`;---///

// getTrending(page) - zaczytuje trendujące filmy z ostatniego tygodnia
//                     (parametr page jest opcjonalny, domyślna wartość = 1);
// getMovies(query, page) - zaczytuje filmy wg wpisanego stringa przekazanego jako parametr
//                     (parametr page jest opcjonalny, domyślna wartość = 1);
// getMovieByID(id) - zaczytuje dane filmu wg id;;
// getGenres() - zaczytuje tablicę z gatunkami filmów
//
// Aby zaimportować API wpisz:
//
// import API from './api'
//
// Aby wywołąć pojedynczą funkcję wpisz np.:
//
// API.getMovies(query)

const getTrending = async page => {
  const response = await fetch(`${MAIN_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`);
  return response.json();
};
const searchMovies = async (query, page) => {
  const response = await fetch(
    `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  );
  return response.json();
};

const getGenres = async () => {
  try {
    const GENRES_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`;
    const response = await fetch(GENRES_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getMovieByID = async id => {
  try {
    const GET_MOVIE_BY_ID_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const response = await fetch(GET_MOVIE_BY_ID_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getMovies = async (query, page = 1) => {
  try {
    const GET_MOVIES_QUERY_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
    const response = await fetch(GET_MOVIES_QUERY_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const API = { getTrending, getMovieByID, getMovies, getGenres, searchMovies };
export default API;
