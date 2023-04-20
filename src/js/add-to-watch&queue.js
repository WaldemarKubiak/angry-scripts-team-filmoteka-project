import { watched, queue, setWatchedLocalStoradge, setQueueLocalStoradge } from './local-storage';

function onAddToWatched(id) {
  if (watched.includes(id)) {
    return;
  }
  watched.push(id);
  setWatchedLocalStoradge(watched);
}

function onAddToQueue(id) {
  if (queue.includes(id)) {
    return;
  }
  queue.push(id);
  setQueueLocalStoradge(queue);
}

const adToLibrary = {
  onAddToWatched,
  onAddToQueue,
};
export default adToLibrary;
