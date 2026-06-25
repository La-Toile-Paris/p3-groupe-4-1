

const swiper = new Swiper('.swiper-temoinages', { 
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,

  mousewheel: {
    enabled: true,
    releaseOnEdges: true,
  },

  pagination: {
    el: '.swiper-pagination-temoinages',
    clickable: true,
  },

  breakpoints: {
    0:   { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  }
});