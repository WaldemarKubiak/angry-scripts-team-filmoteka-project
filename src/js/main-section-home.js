import API from './api';
import renderMovieCollection from './renderMovieCollection';

API.getTrending()
  .then(data => data.results)
  .then(renderMovieCollection)
  .then(() => {
    const votes = document.querySelectorAll('.movie-data__vote');
    votes.forEach(vote => vote.classList.add('movie-data__vote--is-hidden'));
  })
  .catch(error => console.error(error.message));
