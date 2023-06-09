import nothing from '../images/nothing.jpg';
import renderMovieCollection from './renderMovieCollection';
import { getWatchedLocalStorage, getQueueLocalStorage } from './local-storage';
import API from './api';
import './movie-modal';
import './modal_team/footer-modal';
const refs = {
  watchedRef: document.querySelector('#watched-btn'),
  queueRef: document.querySelector('#queue-btn'),
  movieCollectionDOM: document.querySelector('.movie-collection'),
};
if (refs.watchedRef) {
  refs.watchedRef.addEventListener('click', showWatched);
}
if (refs.watchedRef) {
  refs.queueRef.addEventListener('click', showQueue);
}

function showWatched() {
  const watched = getWatchedLocalStorage();
  if (watched.length === 0) {
    refs.movieCollectionDOM.innerHTML = `
      <li class="nothing">
        <img src="${nothing}" alt="There's nothing to see here" />
      </li>`;
    return;
  }
  Promise.all(watched.map(id => API.getMovieByID(id)))
    .then(movies => {
      movies.forEach(movie => (movie.genre_ids = movie.genres.map(genre => genre.id)));
      renderMovieCollection(movies);
    })
    .catch(error => console.log(error));
}
function showQueue() {
  const queue = getQueueLocalStorage();
  if (queue.length === 0) {
    refs.movieCollectionDOM.innerHTML = `
      <li class="nothing">
        <img src="${nothing}" alt="There's nothing to see here" />
      </li>`;
    return;
  }
  Promise.all(queue.map(id => API.getMovieByID(id)))
    .then(movies => {
      movies.forEach(movie => (movie.genre_ids = movie.genres.map(genre => genre.id)));
      renderMovieCollection(movies);
    })
    .catch(error => console.log(error));
}
showWatched();
export default { showWatched, showQueue };
