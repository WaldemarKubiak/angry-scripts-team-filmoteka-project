import API from './api';
import renderMovieCollection from './renderMovieCollection';
let page = 1;
API.getTrending(page)
  .then(data => data.results)
  .then(renderMovieCollection)
  .then(() => {
    const votes = document.querySelectorAll('.movie-data__vote');
    votes.forEach(vote => vote.classList.add('movie-data__vote--is-hidden'));
  })
  .catch(error => console.error(error.message));
