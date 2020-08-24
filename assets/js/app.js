const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

let menuStatus = false;

burger.addEventListener('click', () => {
  if (menuStatus == false) {
    burger.classList.add('active');
    menu.classList.add('active');
    menuStatus = true;
  } else if (menuStatus == true) {
    menu.classList.remove('active');
    burger.classList.remove('active');
    menuStatus = false;
  }
});
