import API from './api';
let movieID = '640146';

(() => {
  const refs = {
    openModalCard: document.querySelector('.movie-collection'), // do zmiany, jak będziemy mieli kolekcję filmów a nie jedna kartę
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalCard.addEventListener('click', openModal); // do zmiany, jak będziemy mieli kolekcję filmów a nie jedna kartę
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    // zaczytać z eventu id filmu - atrybut data-id

    refs.modal.classList.remove('backdrop--is-hidden');
  }

  function closeModal() {
    refs.modal.classList.add('backdrop--is-hidden');
  }
})();

API.getMovieByID(movieID).then(renderModal);

function renderModal({ title, overview, poster_path }) {
  const movieModal = document.querySelector('.movie-modal');

  console.log('Title: ', title, 'About: ', overview);

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
        <button type="button" class="button button--accent" id="addToWatchedBtn">
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
}
