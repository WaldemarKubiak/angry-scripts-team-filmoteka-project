import { API_KEY, MAIN_URL } from './api';
import renderMovieCollection from './renderMovieCollection.js';

const searchInput = document.querySelector('.header-input');
const searchForm = document.querySelector('.header-form');
const noResults = document.querySelector('.no-results');

const searchByKeyword = query => {
  fetch(`${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      if (data.results.length === 0) {
        noResults.classList.add('active');
      } else {
        noResults.classList.remove('active');
        renderMovieCollection(data.results);
      }
    })
    .catch(error => console.error(error));
};

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchInput.value;
  if (query === '') return;

  searchByKeyword(query);
});
