function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequired7c6=i),i.register("ifJdc",(function(t,n){var o,a;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("ifJdc").register(JSON.parse('{"gNQ6s":"library.64d2ed50.js","5vHOg":"nothing.e34c2d05.jpg","bSbOs":"library.f33371a5.css"}'));const r=document.querySelector(".loader");r.classList.add("loader-run"),window.addEventListener("load",(function(){r.classList.remove(".loader-run")}));const c="7181a2b710caf29c7153fca4f71ab7d2";var s={getTrending:async(e=1)=>{try{const t=`https://api.themoviedb.org/3/trending/movie/week?api_key=${c}&page=${e}`,n=await fetch(t);return await n.json()}catch(e){console.log(e.message)}},getMovieByID:async e=>{try{const t=`https://api.themoviedb.org/3/movie/${e}?api_key=${c}`,n=await fetch(t);return await n.json()}catch(e){console.log(e.message)}},getMovies:async(e,t=1)=>{try{const n=`https://api.themoviedb.org/3/search/movie?api_key=${c}&query=${e}&page=${t}`,o=await fetch(n);return await o.json()}catch(e){console.log(e.message)}},getGenres:async()=>{try{const e=`https://api.themoviedb.org/3/genre/movie/list?api_key=${c}&language=en-US`,t=await fetch(e);return await t.json()}catch(e){console.log(e.message)}}};const d="watched",l="queue";function u(){return JSON.parse(localStorage.getItem(d))||[]}function m(){return JSON.parse(localStorage.getItem(l))||[]}var v={onAddToWatched:function(e){const t=u();var n;t.includes(e)||(t.push(e),n=t,localStorage.setItem(d,JSON.stringify(n)))},onAddToQueue:function(e){const t=m();var n;t.includes(e)||(t.push(e),n=t,localStorage.setItem(l,JSON.stringify(n)))}};function p({title:e,original_title:t,overview:n,popularity:o,poster_path:a,id:i,vote_average:r,vote_count:c}){const s=document.querySelector("body");s.classList.add("modal-open");const d=document.querySelector(".movie-modal"),l=`\n    <div class="movie-modal__img-container">\n     <img src="https://image.tmdb.org/t/p/w400${a}" alt="" class="movie-modal__img"/></div>\n    <div class="movie-modal__content">\n      <h2 class="movie-modal__title">${e}</h2>\n      <table class="movie-modal__table">\n        <tr>\n          <td class="movie-modal__table-caption">Vote /Votes</td>\n          <td><span class = "movie-data__vote">${(Math.round(10*r)/10).toFixed(1)}</span> / <span>${c}</span></td>\n        </tr>\n        <tr>\n          <td class="movie-modal__table-caption">Popuarity</td>\n          <td>${(Math.round(10*o)/10).toFixed(1)}</td>\n        </tr>\n        <tr>\n          <td class="movie-modal__table-caption">Original Title</td>\n          <td>${t}</td>\n        </tr>\n        <tr>\n          <td class="movie-modal__table-caption">Genre</td>\n          <td>Western</td>\n        </tr>\n      </table>\n      <div class="movie-modal__about">\n        <h3 class="movie-modal__about-header">ABOUT</h3>   \n        <p class="movie-modal__overview">${n}</p>\n    </div>\n      <div class="btn-wrapper">\n        <button type="button" class="button button--accent add-to-watched-btn" id="addToWatchedBtn">\n          ADD TO WATCHED\n        </button>\n        <button type="button" class="button" id="addToQueueBtn">ADD TO QUEUE</button>\n      </div>\n    </div>\n    `,u=document.createElement("div");u.classList.add("movie-modal__container"),u.innerHTML=l,d.append(u);const m=document.querySelector("[data-modal]");m.classList.remove("backdrop--is-hidden");document.querySelector("[data-modal-close]").addEventListener("click",(()=>{u.remove(),m.classList.add("backdrop--is-hidden"),s.classList.remove("modal-open")}));document.querySelector(".add-to-watched-btn").addEventListener("click",(()=>v.onAddToWatched(i)));document.querySelector("#addToQueueBtn").addEventListener("click",(()=>v.onAddToQueue(i)))}var g;g=new URL(i("ifJdc").resolve("5vHOg"),import.meta.url).toString();var h=e=>{const t=document.querySelector(".movie-collection"),{id:n,title:o,poster_path:a,release_date:i}=e,r=e.map((({id:e,title:t,poster_path:n,release_date:o,vote_average:a})=>`<div class="movie-card" data-id="${e}">\n      <img src="https://image.tmdb.org/t/p/w400${n}" alt="" class="movie-card__img"/>\n      <div class="movie-data">\n        <p class="movie-data__title">${t}</p>\n        <p class="movie-data__info">\n          <span class="movie-data__genre">Drama, Action </span> |\n          <span class="movie-data__year">${new Date(o).getFullYear()}</span>\n          <span class = "movie-data__vote">${(Math.round(10*a)/10).toFixed(1)}</span>\n        </p>\n      </div>\n    </div>\n`)).join("");t.innerHTML=r;document.querySelectorAll(".movie-card").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.dataset.id;s.getMovieByID(t).then((e=>{p(e)})).catch((e=>console.log(e)))}))}))};const _={watchedRef:document.querySelector("#watched-btn"),queueRef:document.querySelector("#queue-btn"),movieCollectionDOM:document.querySelector(".movie-collection")};function f(){const e=u();0!==e.length?Promise.all(e.map((e=>s.getMovieByID(e)))).then((e=>h(e))).catch((e=>console.log(e))):_.movieCollectionDOM.innerHTML=`\n      <li class="nothing">\n        <img src="${t(g)}" alt="There's nothing to see here" />\n      </li>`}function b(){const e=m();0!==e.length?Promise.all(e.map((e=>s.getMovieByID(e)))).then((e=>h(e))).catch((e=>console.log(e))):_.movieCollectionDOM.innerHTML=`\n      <li class="nothing">\n        <img src="${t(g)}" alt="There's nothing to see here" />\n      </li>`}_.watchedRef.addEventListener("click",f),_.queueRef.addEventListener("click",b);
//# sourceMappingURL=library.64d2ed50.js.map