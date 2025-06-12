let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const animations = ['animation1', 'animation2', 'animation3', 'animation4']; // Add more if you have more slides

function switchSlide() {
  // Remove the 'slide-show' class, 'content-show' class, and animations from all slides
  slides.forEach((slide, index) => {
    slide.classList.remove('slide-show');
    slide.querySelector('.content').classList.remove('content-show');
    slide.classList.remove(animations[index]);
  });

  // Add the 'slide-show' class, 'content-show' class, and the corresponding animation to the current slide
  slides[currentSlide].classList.add('slide-show');
  slides[currentSlide].querySelector('.content').classList.add('content-show');
  slides[currentSlide].classList.add(animations[currentSlide]);

  // Move to the next slide
  currentSlide = (currentSlide + 1) % slides.length;
}

// Call switchSlide immediately when the page loads
switchSlide();

// Then continue to switch slides every 7000 milliseconds
setInterval(switchSlide, 10000);
