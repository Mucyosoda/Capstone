const menuBtn = document.querySelector('.menu');
const navWrap = document.querySelector('.nav-bar');
const closeIcon = document.getElementById('close-icon');
const seeProjectBtn = document.querySelectorAll('.see-btn');
const displayMsg = document.querySelector('.pop-msg-1');
const overlayBackground = document.querySelector('.overlay');
const closepop = document.querySelector('.closeX');
const closeFunction = function () {
  displayMsg.classList.add('d-none');
  overlayBackground.classList.add('d-none');
};

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
