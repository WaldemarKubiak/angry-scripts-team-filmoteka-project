import API from './api';
import { qs, qsa } from './common';
import renderMovieCollection from './renderMovieCollection';


const middlePageBtn = document.querySelectorAll('.pagination-btn')[2];
const pageList = qs('.pagination-list')

console.log(pageList.children.length);

const pageNumber = 2;
const pagesCount = pageList.children.length;

// data.total_pages, data.total_results, data.page;



const elem = (pagesCount, pageNumber) => {
  API.getTrending(pageNumber)
    .then(data => data.results)
    .then(renderMovieCollection)
    .catch(error => console.error(error.message));
};

const clickhandler = () => {
  if (pageNumber > 1) {
    pageList.innerHTML = `<li class="pagination-item">
        <button class="pagination-btn-arrow">
          <svg class="pagination-svg">
            <use href="/icon.a422163e.svg#icon-arrow-left"></use>
          </svg>
        </button>
      </li>`;
  } 

  if (pageNumber < pagesCount) {
    pageList.innerHTML += `<li class="pagination-item">
      <button class="pagination-btn-arrow">
        <svg class="pagination-svg">
          <use href="/icon.a422163e.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </li>`;
  }
  
  elem(7, pageNumber)
  
};

middlePageBtn.addEventListener('click', clickhandler)