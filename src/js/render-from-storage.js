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
refs.watchedRef.addEventListener('click', showWatched);
refs.queueRef.addEventListener('click', showQueue);
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
    .then(movies => renderMovieCollection(movies))
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
    .then(movies => renderMovieCollection(movies))
    .catch(error => console.log(error));
}
export default { showWatched, showQueue };
showWatched();
