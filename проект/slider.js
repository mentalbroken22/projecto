// Variables
const carouselSlide = document.querySelector('.slide');
const carouselImages = document.querySelectorAll('.slide img');

// Buttons
const prvButton = document.querySelector('#prvButton');
const nextButton = document.querySelector('#nextButton');

// Counter
let counter = 0;
const size = carouselImages[0].clientWidth;

// Set initial position
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners
nextButton.addEventListener('click', () => {
  if (counter < carouselImages.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  updateSlide();
});

prvButton.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = carouselImages.length - 1;
  }
  updateSlide();
});

function updateSlide() {
  carouselSlide.style.transition = "transform 0.8s ease-in-out";
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    updateSlide();
  }

  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    updateSlide();
  }
});