import API from './api';
import renderMovieCollection from './renderMovieCollection';
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';


export const renderPagination = ({ page = 1, total_pages }) => {
  // console.log(page, total_pages);
  localStorage.setItem(`page`,`${page}`)
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
      moreButton:
        '<a href="#" class="pagination-item tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="pagination-btn tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);
};

API.getTrending(localStorage.getItem(`page`))
  .then(data => data)
  .then(renderPagination)
  .catch(error => console.error(error.message));

const nextPage = document.querySelector('.tui-ico-next')
  console.log(nextPage);