import { API_KEY, MAIN_URL } from './api';
const searchInput = document.querySelector('.header-input');
const searchForm = document.querySelector('.header-form');
const movieList = document.querySelector('.movie-list');

import renderMovieCollection from './renderMovieCollection.js';

const searchByKeyword = query => {
  fetch(`${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      renderMovieCollection(data.results);
    })
    .catch(error => console.error(error));
};

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchInput.value;
  if (query === '') return;

  searchByKeyword(query);
});
