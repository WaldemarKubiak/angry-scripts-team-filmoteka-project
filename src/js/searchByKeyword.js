import { API_KEY, MAIN_URL } from './api';
import renderMovieCollection from './renderMovieCollection.js';
import Pagination from 'tui-pagination';

const searchInput = document.querySelector('.header-input');
const searchForm = document.querySelector('.header-form');
const noResults = document.querySelector('.no-results');

const renderPagination = ({ page, total_pages, query }) => {
  const options = {
    totalItems: total_pages,
    itemsPerPage: 1,
    visiblePages: 5,
    page: page,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="pagination tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="pagination tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="pagination tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);
  pagination.on('beforeMove', async function (eventData) {
    fetch(`${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${eventData.page}`)
      .then(response => response.json())
      .then(data => {
        renderMovieCollection(data.results);
      })
      .catch(error => console.error(error));

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
};

const searchByKeyword = query => {
  fetch(`${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(response => response.json())
    .then(data => {
      if (data.results.length === 0) {
        noResults.classList.add('active');
        document.querySelector('#pagination').innerHTML = '';
      } else {
        noResults.classList.remove('active');
        renderMovieCollection(data.results);
        renderPagination({
          page: data.page,
          total_pages: data.total_pages,
          query: query,
        });
      }
    })
    .catch(error => console.error(error));
};

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchInput.value;
  if (query === '') return;

  searchByKeyword(query);
});
