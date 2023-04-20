const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';
const watched = getWatchedLocalStoradge() || [];
const queue = getQueueLocalStoradge() || [];

function getWatchedLocalStoradge() {
  return JSON.parse(localStorage.getItem(KEY_WATCHED));
}

function getQueueLocalStoradge() {
  return JSON.parse(localStorage.getItem(KEY_QUEUE));
}

function setWatchedLocalStoradge(arr) {
  localStorage.setItem(KEY_WATCHED, JSON.stringify(arr));
}

function setQueueLocalStoradge(arr) {
  localStorage.setItem(KEY_QUEUE, JSON.stringify(arr));
}

const LS = {
  KEY_WATCHED,
  KEY_QUEUE,
  watched,
  queue,
  getWatchedLocalStoradge,
  getWatchedLocalStoradge,
  getQueueLocalStoradge,
  setQueueLocalStoradge,
};

export default LS;
