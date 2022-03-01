// handle toggle menu bar
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
// process header sticky
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
// handle mobile menu
const mobileMenu = document.querySelector('.header__nav');
const btnNavigation = document.querySelector('.mobile-nav-toggle');
btnNavigation.addEventListener('click', function () {
   btnNavigation.classList.toggle('button-nav-active');
   mobileMenu.classList.toggle('open-menu');
});

// handle sub mobile menu
const itemParent = document.querySelector('.item--parent');
const iconSubMenu = document.querySelector('.item--parent i');
const subNav = document.querySelector('.sub__nav');
const closeSubNav = document.querySelector('.sub__nav--close a');
itemParent.addEventListener('click', function () {
   subNav.classList.toggle('open');
   iconSubMenu.classList.toggle('bx-chevron-down');
   iconSubMenu.classList.toggle('bx-chevron-up');
});
closeSubNav.addEventListener('click', function () {
   subNav.classList.remove('open');
   iconSubMenu.classList.add('bx-chevron-down');
   iconSubMenu.classList.remove('bx-chevron-up');
});
