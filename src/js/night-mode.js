const switchButton = document.querySelector('.switch-button');

switchButton.addEventListener('click', function () {
  console.log('Button clicked!'); // dodany console.log
  document.body.classList.toggle('night-mode');
  switchButton.classList.toggle('night-mode');
});
