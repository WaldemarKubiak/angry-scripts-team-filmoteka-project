import API from './api';
import renderMovieCollection from './renderMovieCollection';

API.getTrending()
  .then(data => data.results)
  .then(renderMovieCollection)
  .catch(error => console.error(error.message));
