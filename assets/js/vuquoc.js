(function () {
   ('use strict');
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
   // back to top button
   const backtotop = document.querySelector('.back-to-top');
   window.addEventListener('scroll', () => {
      if (
         document.body.scrollTop > 300 ||
         document.documentElement.scrollTop > 300
      ) {
         backtotop.classList.add('active');
      } else {
         backtotop.classList.remove('active');
      }
   });
   backtotop.addEventListener('click', (e) => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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
   // lightbox toogle menu
   const images = document.querySelectorAll('.menu__gallery img');
   images.forEach((item) => item.addEventListener('click', handleZoomImage));

   function handleZoomImage(event) {
      const imageSrc = event.target.getAttribute('src');
      console.log('imageSrc', imageSrc);
      const template = `<div class="lightbox position-fixed">
      <div class="lightbox-content d-flex align-items-center justify-content-between" data-aos="zoom-in">
      <i class='bx bxs-left-arrow lightbox-prev'></i>
         <img src="${imageSrc}" alt="" class="lightbox-image" data-aos="zoom-in">
         <i class='bx bxs-right-arrow lightbox-next'></i>
      </div>
   </div>`;
      document.body.insertAdjacentHTML('beforeend', template);
   }
   let index = 0;
   document.body.addEventListener('click', function (e) {
      // document.querySelector('.toggle-menu').style.right = '-500px';
      const lightboxImage = document.querySelector('.lightbox-image');
      let lightboxSrc = '';
      if (e.target.matches('.lightbox')) {
         e.target.parentNode.removeChild(e.target);
      } else if (e.target.matches('.lightbox-next')) {
         lightboxSrc = lightboxImage.getAttribute('src');
         index = [...images].findIndex(
            (item) => item.getAttribute('src') === lightboxSrc
         );
         index = index + 1;
         if (index > images.length - 1) {
            index = 0;
         }
         const newSrc = [...images][index].getAttribute('src');
         lightboxImage.setAttribute('src', newSrc);
      } else if (e.target.matches('.lightbox-prev')) {
         lightboxSrc = lightboxImage.getAttribute('src');
         index = [...images].findIndex(
            (item) => item.getAttribute('src') === lightboxSrc
         );
         index = index - 1;
         if (index < 0) {
            index = images.length - 1;
         }
         const newSrc = [...images][index].getAttribute('src');
         lightboxImage.setAttribute('src', newSrc);
      }
   });
   // AOS scroll
   window.addEventListener('load', () => {
      AOS.init({
         duration: 1000,
         easing: 'ease-in-out',
         once: true,
         mirror: false,
      });
   });
   // preloader
   const preloader = document.querySelector('#preloader');
   if (preloader) {
      setTimeout(() => {
         preloader.remove();
      }, 1000);
   }
})();
