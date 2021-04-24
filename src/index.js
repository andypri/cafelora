import './style.css';

// console.log('funguju!');

// 3.
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

// 4.
const orderBtnElm = document.querySelector('#order-btn');
const drinkCupElm = document.querySelector('#drink__cup');
let ordered = false;

orderBtnElm.addEventListener('click', () => {
  if (ordered === false) {
    drinkCupElm.classList.add('drink__cup--selected');
    orderBtnElm.textContent = 'Zrušit';
    ordered = true;
  } else {
    drinkCupElm.classList.remove('drink__cup--selected');
    orderBtnElm.textContent = 'Objednat';
    ordered = false;
  }
});
