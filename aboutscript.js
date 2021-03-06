const menuBtn = document.querySelector('.menu');
const navWrap = document.querySelector('.nav-bar');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('d-none');
  closeIcon.classList.toggle('d-none');
  navWrap.classList.add('d-block');
  navWrap.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  navWrap.classList.remove('d-block');
  menuBtn.classList.remove('d-none');
  closeIcon.classList.toggle('d-none');
});
