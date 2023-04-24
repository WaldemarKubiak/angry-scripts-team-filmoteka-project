export const KEY_WATCHED = 'watched';
export const KEY_QUEUE = 'queue';
export function getWatchedLocalStorage() {
  return JSON.parse(localStorage.getItem(KEY_WATCHED)) || [];
}
export function getQueueLocalStorage() {
  return JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];
}
export function setWatchedLocalStorage(arr) {
  localStorage.setItem(KEY_WATCHED, JSON.stringify(arr));
}
export function setQueueLocalStorage(arr) {
  localStorage.setItem(KEY_QUEUE, JSON.stringify(arr));
}
