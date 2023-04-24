const goUpBtn = document.querySelector('.go-up-btn');

window.addEventListener('scroll', checkHeight);

function checkHeight() {
  if (window.scrollY > 720) {
    goUpBtn.style.display = 'flex';
  } else {
    goUpBtn.style.display = 'none';
  }
}

goUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });git 
});
