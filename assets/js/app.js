(function () {
   ('use strict');
   const openMenu = document.querySelector('.header__button--toggle');
   const menu = document.querySelector('.toggle-menu');
   const closeMenu = document.querySelector('.menu__button--close');
   const lineWrap = closeMenu.querySelector('.line-wrap');
   const gallery = document.querySelectorAll('.gallery__item');

   openMenu.addEventListener('click', function () {
      menu.style.right = '0';
   });
   closeMenu.addEventListener('click', function () {
      menu.style.right = '-500px';
      document.querySelector('.mfp-bg').classList.add('setwidth');
      document.querySelector('.mfp-wrap').classList.add('setwidth');
   });
   gallery.forEach(function (item) {
      item.addEventListener('click', function () {
         document
            .querySelector('.mfp-bg.mfp-ready')
            .classList.remove('setwidth');
         document.querySelector('.mfp-wrap').classList.remove('setwidth');
      });
   });
   closeMenu.addEventListener('mouseover', function () {
      lineWrap.style.transform = 'rotate(360deg)';
   });
   closeMenu.addEventListener('mouseout', function () {
      lineWrap.style.transform = 'rotate(0deg)';
   });

   const backtotop = document.querySelector('.back-to-top');
   const header = document.querySelector('header');
   window.addEventListener('scroll', () => {
      if (
         document.body.scrollTop > 120 ||
         document.documentElement.scrollTop > 120
      ) {
         header.classList.add('sticky');
         if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
         ) {
            backtotop.classList.add('active');
         }
      } else {
         backtotop.classList.remove('active');
         header.classList.remove('sticky');
      }
   });
   backtotop.addEventListener('click', (e) => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
   });

   const mobileMenu = document.querySelector('.header__nav');
   const btnNavigation = document.querySelector('.mobile-nav-toggle');
   btnNavigation.addEventListener('click', function () {
      btnNavigation.classList.toggle('button-nav-active');
      mobileMenu.classList.toggle('open-menu');
   });

   const itemParent = document.querySelector('.item--parent');
   const iconSubMenu = document.querySelector('.item--parent i');
   const subNav = document.querySelector('.sub__nav');
   const closeSubNav = document.querySelector('.sub__nav--close a');
   itemParent.addEventListener('click', function () {
      subNav.style.display = 'none';
      subNav.classList.toggle('open');
      iconSubMenu.classList.toggle('bx-chevron-down');
      iconSubMenu.classList.toggle('bx-chevron-up');
   });
   closeSubNav.addEventListener('click', function () {
      subNav.classList.remove('open');
      iconSubMenu.classList.add('bx-chevron-down');
      iconSubMenu.classList.remove('bx-chevron-up');
   });
   window.addEventListener('load', () => {
      AOS.init({
         duration: 1000,
         easing: 'ease-in-out',
         once: true,
         mirror: false,
      });
   });
   const preloader = document.querySelector('#preloader');
   if (preloader) {
      setTimeout(() => {
         preloader.remove();
      }, 1000);
   }
   var imagepopup = $('.image-popup');
   if (imagepopup.length) {
      $('.image-popup').magnificPopup({
         type: 'image',
         callbacks: {
            beforeOpen: function () {
               this.st.image.markup = this.st.image.markup.replace(
                  'mfp-figure',
                  'mfp-figure animated zoomInDown'
               );
            },
         },
         gallery: { enabled: true },
      });
   }
   $('.header__nav > li').hover(
      function () {
         $('.sub__nav', this).slideDown();
      },
      function () {
         $('.sub__nav', this).slideUp();
      }
   );
   $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
         loop: true,
         margin: 40,
         autoplay: true,
         autoplayTimeout: 3000,
         nav: true,
         responsive: {
            0: {
               items: 1,
               nav: false,
            },
            600: {
               items: 1,
               nav: false,
            },
            1000: {
               items: 2,
               nav: false,
            },
         },
      });
   });
})();
