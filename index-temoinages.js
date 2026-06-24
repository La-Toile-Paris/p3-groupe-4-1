

const swiper = new Swiper('.swiper-temoinages', {  // ← orthographe unifiée

  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,

  // ✅ Scroll de la molette = défilement des cards
  mousewheel: {
    enabled: true,
    releaseOnEdges: true, // rend la main au scroll de page en bout de liste
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0:   { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  }
});