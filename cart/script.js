const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let scrollPosition = 1;
const scrollAmount = 210; // Ajuste conforme o tamanho do item + gap

nextBtn.addEventListener('click', () => {
  scrollPosition -= scrollAmount;
  carousel.style.transform = `translateX(${scrollPosition}px)`;
});

prevBtn.addEventListener('click', () => {
  scrollPosition += scrollAmount;
  carousel.style.transform = `translateX(${scrollPosition}px)`;
});