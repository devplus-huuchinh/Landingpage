$(document).ready(function () {
   $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 40,
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
