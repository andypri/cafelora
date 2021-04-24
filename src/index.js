import './style.css';

// console.log('funguju!');

const navBtnElm = document.querySelector('#nav__btn');
const navElm = document.querySelector('#nav');
const navItems = document.querySelectorAll('#nav__item');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navElm.classList.toggle('nav-closed');
  });
});
