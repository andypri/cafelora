import './style.css';
// import { Layer } from './Layer/script';
import { Drink } from './Drink/script';

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
// const orderBtnElm = document.querySelector('.order-btn');
// const drinkCupElm = document.querySelector('.drink__cup');
// let ordered = false;

// orderBtnElm.addEventListener('click', () => {
//   if (ordered === false) {
//     drinkCupElm.classList.add('drink__cup--selected');
//     orderBtnElm.textContent = 'Zrušit';
//     ordered = true;
//   } else {
//     drinkCupElm.classList.remove('drink__cup--selected');
//     orderBtnElm.textContent = 'Objednat';
//     ordered = false;
//   }
// });

// 5.
// const drinkInfoElm = document.querySelector('.drink__info');

// drinkInfoElm.innerHTML += Layer({
//   color: '#feeeca',
//   label: 'mléčná pěna',
// });
// drinkInfoElm.innerHTML += Layer({
//   color: '#fed7b0',
//   label: 'teplé mléko',
// });
// drinkInfoElm.innerHTML += Layer({
//   color: '#613916',
//   label: 'espresso',
// });

// 6.
// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

// layers.forEach((layer) => {
//   drinkInfoElm.innerHTML += Layer(layer);
// });

// 7.
const drinksListElm = document.querySelector('.drinks-list');

const romano = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

drinksListElm.appendChild(Drink(romano));
