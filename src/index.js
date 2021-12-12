import './sass/main.scss';
import menuString from './js/renderMenuList';

const refs = {
  mainPage: document.querySelector('.main-page'),
  menuPage: document.querySelector('.menu-page'),
  contactsPage: document.querySelector('.contacts-page'),
  main: document.querySelector('.main'),
  menu: document.querySelector('.menu'),
  contacts: document.querySelector('.contacts'),
  heroLink: document.querySelector('.hero__link'),
  aboutUsLink: document.querySelector('.about-us__link'),
  menuList: document.querySelector('.menu-list__list'),
  vok: document.querySelector('.vok'),
  premium: document.querySelector('.premium'),
  soup: document.querySelector('.soup'),
  salad: document.querySelector('.salad'),
  header: document.querySelector('.header'),
  heroOpen: document.querySelector('.hero__open'),
  hero2Open: document.querySelector('.hero2__open'),
  hero3Open: document.querySelector('.hero3__open'),
  headerClose: document.querySelector('.header__close'),
};

// navigation
refs.main.addEventListener('click', onMain);
refs.menu.addEventListener('click', onMenu);
refs.heroLink.addEventListener('click', onMenu);
refs.contacts.addEventListener('click', onContacts);
refs.aboutUsLink.addEventListener('click', onContacts);

function onMenu(e) {
  onNav(e);
  refs.menuPage.classList.remove('visually-hidden');
}
function onMain(e) {
  onNav(e);
  refs.mainPage.classList.remove('visually-hidden');
}
function onContacts(e) {
  onNav(e);
  refs.contactsPage.classList.remove('visually-hidden');
}

function onNav(e) {
  e.preventDefault();
  refs.mainPage.classList.add('visually-hidden');
  refs.menuPage.classList.add('visually-hidden');
  refs.contactsPage.classList.add('visually-hidden');
  refs.header.classList.toggle('is-closed');
  e.target.removeEventListener('click', onMenu);
}

refs.menuList.insertAdjacentHTML('beforeend', menuString('vok'));

// menu
refs.vok.addEventListener('click', onVok);
refs.premium.addEventListener('click', onPremium);
refs.soup.addEventListener('click', onSoup);
refs.salad.addEventListener('click', onSalad);

function onVok(e) {
  onFood(e);
  refs.menuList.insertAdjacentHTML('beforeend', menuString(menuItems, 'vok'));
}
function onPremium(e) {
  onFood(e);
  refs.menuList.insertAdjacentHTML('beforeend', menuString(menuItems, 'premium'));
}
function onSoup(e) {
  onFood(e);
  refs.menuList.insertAdjacentHTML('beforeend', menuString(menuItems, 'soup'));
}
function onSalad(e) {
  onFood(e);
  refs.menuList.insertAdjacentHTML('beforeend', menuString(menuItems, 'salad'));
}

function onFood(e) {
  e.preventDefault();
  refs.menuList.innerHTML = '';
}

// header modal
refs.headerClose.addEventListener('click', toggle);
refs.heroOpen.addEventListener('click', toggle);
refs.hero2Open.addEventListener('click', toggle);
refs.hero3Open.addEventListener('click', toggle);

function toggle(e) {
  e.preventDefault();
  refs.header.classList.toggle('is-closed');
  e.target.removeEventListener('click', toggle);
}
