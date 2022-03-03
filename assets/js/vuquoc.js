(function () {
   ('use strict');
   // handle toggle menu bar
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
      document.querySelector('.mfp-bg').style.display = 'none';
      document.querySelector('.mfp-wrap').style.display = 'none';
   });

   closeMenu.addEventListener('mouseover', function () {
      lineWrap.style.transform = 'rotate(360deg)';
   });
   closeMenu.addEventListener('mouseout', function () {
      lineWrap.style.transform = 'rotate(0deg)';
   });
   // handle gallery
   gallery.forEach(function (item) {
      item.addEventListener('click', function () {
         document.querySelector('.mfp-bg').style.display = 'block';
         document.querySelector('.mfp-wrap').style.display = 'block';
      });
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

   // const menuLinks = document.querySelectorAll('.header__nav a');
   // menuLinks.forEach(function (item) {
   //    item.addEventListener('click', function () {
   //       mobileMenu.classList.remove('open-menu');
   //    });
   // });
   // lightbox toogle menu
   // const images = document.querySelectorAll('.menu__gallery img');
   // images.forEach((item) => item.addEventListener('click', handleZoomImage));

   // function handleZoomImage(event) {
   //    document.querySelector('.toggle-menu').style.right = '-500px';
   // }
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
   // popup lightbox image
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
   // dropdown menu
   $('.header__nav > li').hover(
      function () {
         $('.sub__nav', this).slideDown();
      },
      function () {
         $('.sub__nav', this).slideUp();
      }
   );
})();
