const hamburger = document.querySelector('.hamburger');
const cancel = document.querySelector('.cancel');
const headerList = document.querySelector('.list-header');
const navHeader = document.querySelector('.nav-header');
const navHeaderTop = document.querySelector('.nav-header__top');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  cancel.classList.toggle('active');
  headerList.classList.toggle('active');
  navHeader.classList.toggle('active');
  navHeaderTop.classList.toggle('active');
});

cancel.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  cancel.classList.toggle('active');
  headerList.classList.toggle('active');
  navHeader.classList.toggle('active');
  navHeaderTop.classList.toggle('active');
});