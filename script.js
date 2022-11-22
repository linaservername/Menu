let button = document.querySelector('.header__bar')
let nav = document.querySelector('.header__nav');
let list = document.querySelector('.header__nav-list');
let menu = document.querySelector('.burger');



button.addEventListener('click', () => {
  nav.classList.toggle('active__nav')
  list.classList.toggle('active')
  menu.classList.toggle('menu')
  if (menu.classList.contains('menu')) {
    menu.style = 'width:0;'
    list.style = 'top:0;'
  } else {
    menu.style = 'width:40px;'
    list.style = 'top:-500px;'
  }
})