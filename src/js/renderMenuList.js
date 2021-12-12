export default function menuString(menuItems, typeRequest) {
  return menuItems
    .map(item => {
      if (item.type === typeRequest) {
        return `
                <li class="card__elem borders">
                  <div class="card__img borders"></div>
                  <div class="card__info">
                    <h3 class="card__name">Pho</h3>
                    <p class="card__price">Price: 120$</p>
                  </div>
                </li>`;
      }
    })
    .join('');
}
