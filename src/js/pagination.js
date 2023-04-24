import API from './api';
import renderMovieCollection from './renderMovieCollection';
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

export const renderPagination = ({ page, total_pages }) => {
  // console.log(page, total_pages);

  const options = {
    totalItems: total_pages,
    itemsPerPage: 10,
    visiblePages: 5,
    page: page,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="pagination-item pagination-btn tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="pagination-item pagination-btn tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="pagination-item tui-page-btn tui-{{type}}">' +
        '<span class="pagination-btn tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="pagination-item tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="pagination-btn tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton: '<a href="#" class="pagination-item tui-page-btn tui-{{type}}-is-ellip"></a>',
    },
  };

  const pagination = new Pagination('pagination', options);

  // pagination.on('afterMove', function (eventData) {
  //   alert('The current page is ' + eventData.page);
  // });

  pagination.on('beforeMove', async function (eventData) {
    console.log('localstorage', eventData.page);
    let savePageToLocal = localStorage.setItem(`page`, `${eventData.page}`);
    return (page = eventData.page);
  });
};

console.log('default',localStorage.getItem(`page`));
API.getTrending(1)
  .then(data => {
    renderMovieCollection(data.results);
    renderPagination({
      page: data.page,
      total_pages: data.total_pages,
    });
  })
  .catch(error => console.error(error.message));

const paginationContaier = document.querySelector('#pagination');

paginationContaier.addEventListener('click', () => {
  console.log('after click container', localStorage.getItem(`page`));
  API.getTrending(localStorage.getItem(`page`))
    .then(data => {
      renderMovieCollection(data.results);
    })
    .catch(error => console.error(error.message));
});
