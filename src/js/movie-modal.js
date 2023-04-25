import API from './api';
import adToLibrary from './add-to-watch&queue';

export function renderModal({
  title,
  original_title,
  overview,
  popularity,
  poster_path,
  id,
  vote_average,
  vote_count,
}) {
  const body = document.querySelector('body');
  body.classList.add('modal-open');
  const movieModal = document.querySelector('.movie-modal');

  const markup = `
    <div class="movie-modal__img-container">
     <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="" class="movie-modal__img"/></div>
    <div class="movie-modal__content">
      <h2 class="movie-modal__title">${title}</h2>
      <table class="movie-modal__table">
        <tr>
          <td class="movie-modal__table-caption">Vote /Votes</td>
          <td><span class = "movie-data__vote">${(Math.round(vote_average * 10) / 10).toFixed(
            1,
          )}</span> / <span>${vote_count}</span></td>
        </tr>
        <tr>
          <td class="movie-modal__table-caption">Popuarity</td>
          <td>${(Math.round(popularity * 10) / 10).toFixed(1)}</td>
        </tr>
        <tr>
          <td class="movie-modal__table-caption">Original Title</td>
          <td>${original_title}</td>
        </tr>
        <tr>
          <td class="movie-modal__table-caption">Genre</td>
          <td>Western</td>
        </tr>
      </table>
      <div class="movie-modal__about">
        <h3 class="movie-modal__about-header">ABOUT</h3>   
        <p class="movie-modal__overview">${overview}</p>
    </div>
      <div class="btn-wrapper">
        <button type="button" class="button button--accent add-to-watched-btn" id="addToWatchedBtn">
          ADD TO WATCHED
        </button>
        <button type="button" class="button" id="addToQueueBtn">ADD TO QUEUE</button>
      </div>
    </div>
    `;

  const movieModalDOM = document.createElement('div');
  movieModalDOM.classList.add('movie-modal__container');
  movieModalDOM.innerHTML = markup;

  movieModal.append(movieModalDOM);

  const modal = document.querySelector('[data-modal]');
  modal.classList.remove('backdrop--is-hidden');

  body.removeEventListener('Keydown', onEscCloseModal); 
  function onEscCloseModal(e) {
    if (e.keyCode === 27) {
        onCloseModal();
    }
}
  const closeModalBtn = document.querySelector('[data-modal-close]');

  closeModalBtn.addEventListener('click', () => {
    movieModalDOM.remove();
    modal.classList.add('backdrop--is-hidden');
    body.classList.remove('modal-open');
  });

  const addToWatchedBtn = document.querySelector('.add-to-watched-btn');
  addToWatchedBtn.addEventListener('click', () => adToLibrary.onAddToWatched(id));

  const addToQueueBtn = document.querySelector('#addToQueueBtn');
  addToQueueBtn.addEventListener('click', () => adToLibrary.onAddToQueue(id));
}


