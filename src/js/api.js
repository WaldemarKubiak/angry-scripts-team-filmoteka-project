const API_KEY = '7181a2b710caf29c7153fca4f71ab7d2';
const MAIN_URL = 'https://api.themoviedb.org/3';

//---Przykładowe zapytanie do api---///
//---`${MAIN_URL}/movie/550?api_key=${API_KEY}`;---///

// getTrending() - zaczytuje trendujące filmy z ostatniego tygodnia,
// getMovieByID(id) - zaczytuje dane filmu wg id,
// getMovies(query) - zaczytuje filmy wg wpisanego stringa przekazanego jako parametr,
// getGenres() - zaczytuje tablicę z gatunkami filmów
//
// W następnej wersji do pierwszych dwóch funkcji dodam parametr page (z domyślna wartością = 1)
// tak, aby funkcji można było użyc do paginacji
//
// Aby zaimportować API wpisz:
//
// import API from './api'
//
// Aby wywołąć pojedynczą funkcję wpisz np:
//
// API.getMovies(query)

const getTrending = async () => {
  try {
    const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
    const response = await fetch(TRENDING_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getGenres = async () => {
  try {
    const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
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
    console.log('Data: ', data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getMovies = async query => {
  try {
    const GET_MOVIES_QUERY_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    const response = await fetch(GET_MOVIES_QUERY_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const API = { getTrending, getMovieByID, getMovies, getGenres };
export default API;
