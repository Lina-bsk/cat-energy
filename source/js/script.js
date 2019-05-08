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

var sliderthumb = document.querySelector('.slider__thumb');

var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() {
  divisor.style.width = slider.value + "%";
  sliderthumb.style.left = slider.value + "%";
}




weight.onblur = function() {
    if (isNaN(this.value)) { // введено не число
      // показать ошибку
      this.classList.add("error");
    } else {
      this.classList.remove("error");
    }
  };
