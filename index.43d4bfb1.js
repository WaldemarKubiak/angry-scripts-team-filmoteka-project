function t(t){return t&&t.__esModule?t.default:t}const e=document.querySelector(".loader");e.classList.add("loader-run"),window.addEventListener("load",(function(){e.classList.remove(".loader-run")}));const n="7181a2b710caf29c7153fca4f71ab7d2";var i={getTrending:async(t=1)=>{try{const e=`https://api.themoviedb.org/3/trending/movie/week?api_key=${n}&page=${t}`,i=await fetch(e);return await i.json()}catch(t){console.log(t.message)}},getMovieByID:async t=>{try{const e=`https://api.themoviedb.org/3/movie/${t}?api_key=${n}`,i=await fetch(e);return await i.json()}catch(t){console.log(t.message)}},getMovies:async(t,e=1)=>{try{const i=`https://api.themoviedb.org/3/search/movie?api_key=${n}&query=${t}&page=${e}`,o=await fetch(i);return await o.json()}catch(t){console.log(t.message)}},getGenres:async()=>{try{const t=`https://api.themoviedb.org/3/genre/movie/list?api_key=${n}&language=en-US`,e=await fetch(t);return await e.json()}catch(t){console.log(t.message)}}};const o="watched",a="queue",s=JSON.parse(localStorage.getItem(o))||[],r=JSON.parse(localStorage.getItem(a))||[];var c={onAddToWatched:function(t){var e;s.includes(t)||(s.push(t),e=s,localStorage.setItem(o,JSON.stringify(e)))},onAddToQueue:function(t){var e;r.includes(t)||(r.push(t),e=r,localStorage.setItem(a,JSON.stringify(e)))}};function u({title:t,overview:e,poster_path:n,id:i}){const o=document.querySelector(".movie-modal"),a=`\n    <div class="movie-modal__img-container">\n     <img src="https://image.tmdb.org/t/p/w400${n}" alt="" class="movie-modal__img"/></div>\n    <div class="movie-modal__content">\n      <h2 class="movie-modal__title">${t}</h2>\n      <div class="movie-modal__about">\n        <h3 class="movie-modal__about-header">ABOUT</h3>   \n        <p class="movie-modal__overview">${e}</p>\n    </div>\n      <div class="btn-wrapper">\n        <button type="button" class="button button--accent add-to-watched-btn" id="addToWatchedBtn">\n          ADD TO WATCHED\n        </button>\n        <button type="button" class="button" id="addToQueueBtn">ADD TO QUEUE</button>\n      </div>\n    </div>\n    `,s=document.createElement("div");s.classList.add("movie-modal__container"),s.innerHTML=a,o.append(s);const r=document.querySelector("[data-modal]");r.classList.remove("backdrop--is-hidden");document.querySelector("[data-modal-close]").addEventListener("click",(()=>{s.remove(),r.classList.add("backdrop--is-hidden")}));document.querySelector(".add-to-watched-btn").addEventListener("click",(()=>c.onAddToWatched(i)));document.querySelector("#addToQueueBtn").addEventListener("click",(()=>c.onAddToQueue(i)))}var l=t=>{const e=document.querySelector(".movie-collection"),n=t.map((({id:t,title:e,poster_path:n,release_date:i})=>`<div class="movie-card" data-id="${t}">\n      <img src="https://image.tmdb.org/t/p/w400${n}" alt="" class="movie-card__img"/>\n      <div class="movie-data">\n        <p class="movie-data__title">${e}</p>\n        <p class="movie-data__info">\n          <span class="movie-data__genre">Drama, Action </span> |\n          <span class="movie-data__year">${new Date(i).getFullYear()}</span>\n        </p>\n      </div>\n    </div>\n`)).join("");e.innerHTML=n;document.querySelectorAll(".movie-card").forEach((t=>{t.addEventListener("click",(t=>{const e=t.currentTarget.dataset.id;i.getMovieByID(e).then((t=>{console.log(t),u(t)})).catch((t=>console.log(t)))}))}))};i.getTrending().then((t=>t.results)).then(l).catch((t=>console.error(t.message)));const p=document.querySelector(".header-input"),f=document.querySelector(".header-form");document.querySelector(".movie-list");f.addEventListener("submit",(t=>{t.preventDefault();const e=p.value;""!==e&&(t=>{fetch(`https://api.themoviedb.org/3/search/movie?api_key=7181a2b710caf29c7153fca4f71ab7d2&query=${t}`).then((t=>t.json())).then((t=>{console.log(t.results),l(t.results)})).catch((t=>console.error(t)))})(e)}));var d={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,d=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,o,a,s=Object.prototype.hasOwnProperty;for(o=1,a=arguments.length;o<a;o+=1)for(i in n=arguments[o])s.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),o=n(17),a=n(6);t.exports=function(t,e,n){i(t)?o(t,e,n):a(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var o,a;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(a=e.length,o=n;n>=0&&o<a;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){var i=n(29),o=n(30),a=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=a(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),o=n(7),a=n(0),s=n(1),r=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=o({init:function(t,e){this._options=a({},u,e),this._currentPage=0,this._view=new r(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),a=this._getEdge(t);return e.leftPageNumber=a.left,e.rightPageNumber=a.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,o=this._getLastPage(),a=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(a/2),(n=(e=Math.max(t-i,1))+a-1)>o&&(e=Math.max(o-a+1,1),n=o)):(e=(s-1)*a+1,n=s*a,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){var i=n(0),o=n(14),a=n(4),s=n(16),r=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;a(t)?(t=t.split(l),u(t,(function(t){i._bindEvent(t,e,n)}))):s(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(s(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),i.off(t,o,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(r(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,a=e===i.context,s=o&&a;return s&&n._forgetContext(i.context),s}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),o=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):a(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){a(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),o=n(15);t.exports=function(t){return!i(t)&&!o(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),o=n(7),a=n(21),s=n(22),r=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],m=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,i,o=a(e);r(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),o=n(3),a=n(23);function s(t,e,n,i){function s(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,i){var s=a(t,e),r=!1;o(s,(function(t){return t.handler!==n||(r=!0,!1)})),r||s.push({handler:n,wrappedHandler:i})}(t,e,n,s)}t.exports=function(t,e,n,a){i(e)?o(e.split(/\s+/g),(function(e){s(t,e,n,a)})):o(e,(function(e,i){s(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),o=n(8),a=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),r=t.classList,c=[];r?i(n,(function(e){t.classList.add(e)})):((e=a(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){o(t,c)<0&&c.push(t)})),s(t,c))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),o=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),o=n(3),a=n(2),s=n(4),r=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],a=0,s=0;return o(e,(function(t,o){0===t.indexOf("if")?a+=1:"/if"===t?a-=1:a||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(s,o)),s=o+1)})),i.push(e.slice(s)),{exps:n,sourcesInsideIf:i}}(t,e),a=!1,s="";return o(i.exps,(function(t,e){return(a=b(t,n))&&(s=x(i.sourcesInsideIf[e],n)),!a})),s},each:function(t,e,n){var i=b(t,n),s=a(i)?"@index":"@key",c={},u="";return o(i,(function(t,i){c[s]=i,c["@this"]=t,r(n,c),u+=x(e.slice(),n)})),u},with:function(t,e,n){var o=i("as",t),a=t[o+1],s=b(t.slice(0,o),n),c={};return c[a]=s,x(e,r(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],a=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(a,i)),a=i+n[0].length,n=e.exec(t);return o.push(t.slice(a)),o};function _(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(h,""):u.test(t)?i=_((n=t.split(l))[0],e)[_(n[1],e)]:p.test(t)?i=_((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,o,a,r,c=m[t],u=1,l=2,p=e[l];u&&s(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,i=l),p=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,a=i,(r=e.splice(o+1,a-o)).pop(),r),n),e}function b(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return o(e,(function(t){i.push(_(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,o,a=1,r=t[a];s(r);)i=(n=r.split(" "))[0],m[i]?(o=y(i,t.splice(a,t.length-a),e),t=t.concat(o)):t[a]=b(n,e),r=t[a+=2];return t.join("")}t.exports=function(t,e){return x(v(t,c),e)}},function(t,e,n){var i=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(a);(i(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return(new Date).getTime()-t>6048e5}(s)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return i(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])}();i.getTrending(localStorage.getItem("page")).then((t=>t)).then((({page:e=1,total_pages:n})=>{localStorage.setItem("page",`${e}`);const i={totalItems:n,itemsPerPage:10,visiblePages:5,page:e,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="pagination-item pagination-btn tui-page-btn">{{page}}</a>',currentPage:'<strong class="pagination-item pagination-btn tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="pagination-item tui-page-btn tui-{{type}}"><span class="pagination-btn tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="pagination-item tui-page-btn tui-is-disabled tui-{{type}}"><span class="pagination-btn tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="pagination-item tui-page-btn tui-{{type}}-is-ellip"><span class="pagination-btn tui-ico-ellip">...</span></a>'}};new(t(d))("pagination",i)})).catch((t=>console.error(t.message)));const h=document.querySelector(".tui-ico-next");console.log(h);
//# sourceMappingURL=index.43d4bfb1.js.map
