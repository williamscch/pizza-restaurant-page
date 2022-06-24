// mobile menu

const button = document.querySelector('.menu-btn');
let menuOpen = false;
const menu = document.querySelector('.navbar-items');
const body = document.querySelector('body');
const closeDeals = document.querySelector('.deals-menu');
const closeMenu = document.querySelector('.menu-menu');
const closeLocation = document.querySelector('.location-menu');
const closeContact = document.querySelector('.contact-menu');

button.addEventListener('click', () => {
  if (!menuOpen) {
    button.classList.add('open');
    menuOpen = true;
  } else {
    button.classList.remove('open');
    menuOpen = false;
  }
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closeDeals.addEventListener('click', () => {
  if (!menuOpen) {
    button.classList.add('open');
    menuOpen = true;
  } else {
    button.classList.remove('open');
    menuOpen = false;
  }
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  if (!menuOpen) {
    button.classList.add('open');
    menuOpen = true;
  } else {
    button.classList.remove('open');
    menuOpen = false;
  }
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closeLocation.addEventListener('click', () => {
  if (!menuOpen) {
    button.classList.add('open');
    menuOpen = true;
  } else {
    button.classList.remove('open');
    menuOpen = false;
  }
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closeContact.addEventListener('click', () => {
  if (!menuOpen) {
    button.classList.add('open');
    menuOpen = true;
  } else {
    button.classList.remove('open');
    menuOpen = false;
  }
  menu.classList.toggle('active');
  body.classList.toggle('active');
});
