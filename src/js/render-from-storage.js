import nothing from '../images/nothing.jpg';
import renderMovieCollection from './renderMovieCollection';
import { watched, queue } from './local-storage';
import API from './api';
import './movie-modal';

const refs = {
  watchedRef: document.querySelector('#watched-btn'),
  queueRef: document.querySelector('#queue-btn'),
  movieCollectionDOM: document.querySelector('.movie-collection'),
};

refs.watchedRef.addEventListener('click', showWatched);
// refs.queueRef.addEventListener('click', showQueue);

function showWatched() {
  // refs.watchedRef.add('button-active');
  // refs.queueRef.remove('button-active');

  // if (watched.length === 0) {
  //   refs.library.innerHTML = `
  //     <li class="nothing">
  //       <img src="${nothing}" alt="There's nothing to see here" />
  //     </li>`;
  //   return;
  const watchedArr = [];

  //   console.log(watched.map(id => API.getMovieByID(id).then(watchedArr.push())));
  //   console.log(watchedArr);
  //   renderMovieCollection(watched.map(id => API.getMovieByID(id)));
  // }

  watched.forEach(id =>
    API.getMovieByID(id)
      .then(result => watchedArr.push(result))
      .catch(error => console.log(error.message)),
  );
  console.log(watchedArr);

  renderMovieCollection(watchedArr);

  // if (watched.length === 0) {
  //   refs.movieCollectionDOM.innerHTML = `
  //   <li class="nothing">
  //     <img src="${nothing}" alt="There's nothing to see here" />
  //   </li>`;
  //   return;
  // }
}
