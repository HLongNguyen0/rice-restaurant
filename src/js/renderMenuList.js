import { menuItems } from './menuItems';

export default function menuString(typeRequest) {
  return menuItems
    .map(item => {
      if (item.type === typeRequest) {
        return `
                <li class="card__elem borders">
                  <img class="card__img borders" src="${item.img}" alt="food">
                  <div class="card__info">
                    <h3 class="card__name">${item.name}</h3>
                    <p class="card__price">Price: ${item.price}</p>
                  </div>
                </li>`;
      }
    })
    .join('');
}
