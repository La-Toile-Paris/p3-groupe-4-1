const section = document.querySelector(".app-section");
const cards = document.querySelector(".cards");


window.addEventListener("scroll", () => {

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const scroll = window.scrollY - sectionTop;

  const progress = scroll / (sectionHeight - window.innerHeight);


  const move = progress * (cards.scrollWidth - window.innerWidth);


  cards.style.transform = `translateX(-${move}px)`;

});