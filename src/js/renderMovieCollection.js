// Funkcja renderMovieCollection(movieCollection) przyjmuje za parametr tablicę
// z danymi filmów i renderuje ją do div o klasie "movie-collection"
//
// W kolejnej wersji zostanie dodane:
// - renderowanie na karcie filmu oceny, która jest widoczna w zakładce MyLibrary,
//   natomiast na stronie głównej zgodnie z układem na Figmie będzie ukryta,
// - parsowanie genres do stringa - na razie jest string "na sztywno"
//
// Aby zaimportować funkcję wpisz:
//
// import renderMovieCollection from './renderMovieCollection';

import { stringifyGenres } from './genres';
import API from './api';
import { renderModal } from './movie-modal';

const renderMovieCollection = movieCollection => {
  const movieCollectionDOM = document.querySelector('.movie-collection');

  const markup = movieCollection
    .map(
      ({
        id,
        title,
        poster_path,
        release_date,
        vote_average,
        genre_ids,
      }) => `<div class="movie-card" data-id="${id}">
      <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="" class="movie-card__img"/>
      <div class="movie-data">
        <p class="movie-data__title">${title}</p>
        <p class="movie-data__info">
          <span class="movie-data__genre">${stringifyGenres(genre_ids)}</span> |
          <span class="movie-data__year">${new Date(release_date).getFullYear()}</span>
          <span class = "movie-data__vote">${(Math.round(vote_average * 10) / 10).toFixed(1)}</span>
        </p>
      </div>
    </div>
`,
    )
    .join('');
  // console.log(markup); ${stringifyGenres(genres)}

  movieCollectionDOM.innerHTML = markup;

  const movieCardsArr = document.querySelectorAll('.movie-card');
  movieCardsArr.forEach(movieCard => {
    movieCard.addEventListener('click', event => {
      const movieID = event.currentTarget.dataset.id;
      API.getMovieByID(movieID)
        .then(data => {
          renderModal(data);
        })
        .catch(error => console.log(error));
    });
  });
};

export default renderMovieCollection;
