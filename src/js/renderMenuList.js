export default function menuString(menuItems, typeRequest) {
  return menuItems
    .map(item => {
      if (item.type === typeRequest) {
        return `
                <li class="special-offers__elem">
                    <img src="${item.img}" alt="pho-bowl" class="special-offers__img" />
                    <h3 class="special-offers__name">${item.itemName}</h3>
                    <p class="special-offers__price">Price: ${item.price}</p>
                    <p class="special-offers__description">${item.description}</p>
                </li>`;
      }
    })
    .join('');
}
