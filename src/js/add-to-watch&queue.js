import {
  getWatchedLocalStorage,
  getQueueLocalStorage,
  setWatchedLocalStorage,
  setQueueLocalStorage,
} from './local-storage';
function onAddToWatched(id) {
  const watched = getWatchedLocalStorage();
  if (watched.includes(id)) {
    return;
  }
  watched.push(id);
  setWatchedLocalStorage(watched);
}
function onAddToQueue(id) {
  const queue = getQueueLocalStorage();
  if (queue.includes(id)) {
    return;
  }
  queue.push(id);
  setQueueLocalStorage(queue);
}
export default { onAddToWatched, onAddToQueue };
