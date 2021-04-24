import './style.css';
import { Layer } from './../Layer/script';

// 7.
export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');

  const drinkProductElm = document.createElement('div');
  drinkProductElm.classList.add('drink__product');

  const drinkCupElm = document.createElement('div');
  drinkCupElm.classList.add('drink__cup');

  const imgElm = document.createElement('img');
  imgElm.src = `/assets/cups/${props.id}.png`;

  drinkCupElm.appendChild(imgElm);
  drinkProductElm.appendChild(drinkCupElm);

  const drinkInfoElm = document.createElement('div');
  drinkInfoElm.classList.add('drink__info');

  const drinkName = document.createElement('h3');
  drinkName.textContent = props.name;
  drinkInfoElm.appendChild(drinkName);

  props.layers.forEach((layer) => {
    drinkInfoElm.innerHTML += Layer(layer);
  });

  drinkProductElm.appendChild(drinkInfoElm);

  const drinkControlsElm = document.createElement('div');
  drinkControlsElm.classList.add('drink__controls');

  const orderBtnElm = document.createElement('button');
  orderBtnElm.classList.add('order-btn');
  orderBtnElm.textContent = 'Objednat';

  drinkControlsElm.appendChild(orderBtnElm);

  orderBtnElm.addEventListener('click', () => {
    if (props.ordered === false) {
      drinkCupElm.classList.add('drink__cup--selected');
      orderBtnElm.textContent = 'Zrušit';
      props.ordered = true;
    } else {
      drinkCupElm.classList.remove('drink__cup--selected');
      orderBtnElm.textContent = 'Objednat';
      props.ordered = false;
    }
  });

  drinkElm.appendChild(drinkProductElm);
  drinkElm.appendChild(drinkControlsElm);

  return drinkElm;
};
