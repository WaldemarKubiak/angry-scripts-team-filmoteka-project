import API from './api';
import renderMovieCollection from './renderMovieCollection';
import Pagination from 'tui-pagination';

export const renderPagination = ({ page, total_pages }) => {
  const options = {
    totalItems: total_pages,
    itemsPerPage: 1,
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
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);
  pagination.on('beforeMove', async function (eventData) {
    API.getTrending(eventData.page)
      .then(data => {
        renderMovieCollection(data.results);
      })
      .catch(error => console.error(error.message));
  });
};

API.getTrending(1)
  .then(data => {
    renderMovieCollection(data.results);
    renderPagination({
      page: data.page,
      total_pages: data.total_pages,
    });
  })
  .catch(error => console.error(error.message));
