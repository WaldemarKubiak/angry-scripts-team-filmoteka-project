function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},t.parcelRequired7c6=i),i.register("ifJdc",(function(n,t){var o,r;e(n.exports,"register",(()=>o),(e=>o=e)),e(n.exports,"resolve",(()=>r),(e=>r=e));var i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},r=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("ifJdc").register(JSON.parse('{"gNQ6s":"library.4193ed1d.js","5vHOg":"nothing.e34c2d05.jpg","bSbOs":"library.8972e223.css","eRnjF":"index.0e9a29c7.js"}')),i("fHyLY"),i("lXnOV"),i("99hUO"),i("b374K"),i("gv6Cn");var l;l=new URL(i("ifJdc").resolve("5vHOg"),import.meta.url).toString();var c=i("moM2n"),a=i("b374K"),d=i("lXnOV");i("99hUO"),i("dfTV5");const s={watchedRef:document.querySelector("#watched-btn"),queueRef:document.querySelector("#queue-btn"),movieCollectionDOM:document.querySelector(".movie-collection")};function f(){const e=(0,a.getWatchedLocalStorage)();0!==e.length?Promise.all(e.map((e=>d.default.getMovieByID(e)))).then((e=>{e.forEach((e=>e.genre_ids=e.genres.map((e=>e.id)))),(0,c.default)(e)})).catch((e=>console.log(e))):s.movieCollectionDOM.innerHTML=`\n      <li class="nothing">\n        <img src="${n(l)}" alt="There's nothing to see here" />\n      </li>`}function u(){const e=(0,a.getQueueLocalStorage)();0!==e.length?Promise.all(e.map((e=>d.default.getMovieByID(e)))).then((e=>{e.forEach((e=>e.genre_ids=e.genres.map((e=>e.id)))),(0,c.default)(e)})).catch((e=>console.log(e))):s.movieCollectionDOM.innerHTML=`\n      <li class="nothing">\n        <img src="${n(l)}" alt="There's nothing to see here" />\n      </li>`}s.watchedRef&&s.watchedRef.addEventListener("click",f),s.watchedRef&&s.queueRef.addEventListener("click",u),f();i("g9R5y"),i("dfTV5");
//# sourceMappingURL=library.4193ed1d.js.map
