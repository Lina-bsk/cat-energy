var menu = document.querySelector('.menu');
var menuToggle = document.querySelector('.menu__toggle');

menu.classList.remove('menu--nojs');

menuToggle.addEventListener('click', function() {
  if (menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
  } else {
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
  }
});
