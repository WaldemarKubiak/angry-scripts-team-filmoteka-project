import API from './api';
import adToLibrary from './add-to-watch&queue';

export function renderModal({ title, overview, poster_path, id }) {
  const movieModal = document.querySelector('.movie-modal');


  const markup = `
    <div class="movie-modal__img-container">
     <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="" class="movie-modal__img"/></div>
    <div class="movie-modal__content">
      <h2 class="movie-modal__title">${title}</h2>
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

  const closeModalBtn = document.querySelector('[data-modal-close]');
 
  closeModalBtn.addEventListener('click', () => {
    movieModalDOM.remove();
    modal.classList.add('backdrop--is-hidden');
  });

  const addToWatchedBtn = document.querySelector('.add-to-watched-btn');
  addToWatchedBtn.addEventListener('click', () => 
    adToLibrary.onAddToWatched(id));
  
  const addToQueueBtn = document.querySelector('#addToQueueBtn');
  addToQueueBtn.addEventListener('click', () => adToLibrary.onAddToQueue(id));
}
