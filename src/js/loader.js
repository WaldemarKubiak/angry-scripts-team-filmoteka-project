const loader = document.querySelector('.loader');

loader.classList.add('loader-run');

window.addEventListener('load', function () {
  loader.classList.remove('.loader-run');
});
