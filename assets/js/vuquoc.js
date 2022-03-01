// Quốc
const openMenu = document.querySelector('.header__button--toggle');
const menu = document.querySelector('.toggle-menu');
const closeMenu = document.querySelector('.menu__button--close');
const iconClose = closeMenu.querySelector('i');

openMenu.addEventListener('click', function () {
   menu.style.right = '0';
});
closeMenu.addEventListener('click', function () {
   menu.style.right = '-500px';
});

closeMenu.addEventListener('mouseover', function () {
   iconClose.style.transform = 'rotate(180deg)';
});
closeMenu.addEventListener('mouseout', function () {
   iconClose.style.transform = 'rotate(0deg)';
});

const header = document.querySelector('header');
window.addEventListener('scroll', function () {
   if (
      document.body.scrollTop > 120 ||
      document.documentElement.scrollTop > 120
   ) {
      header.classList.add('sticky');
   } else {
      header.classList.remove('sticky');
   }
});
const mobileMenuBtn = document.querySelector('.mobile__toggle--btn');
const iconBtn = document.querySelector('.mobile__toggle--btn i');
const mobileMenu = document.querySelector('.header__nav');
mobileMenuBtn.addEventListener('click', function () {
   mobileMenu.classList.toggle('open-menu');
   iconBtn.classList.toggle('bx-list-ul');
   iconBtn.classList.toggle('bx-x');
});
