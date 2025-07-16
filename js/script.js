document.getElementById('menu-icon').addEventListener('click', () => {
  document.getElementById('menu-overlay').classList.add('show');
});

document.getElementById('menu-close').addEventListener('click', () => {
  document.getElementById('menu-overlay').classList.remove('show');
});

// reveal fuel-section on scroll
window.addEventListener('scroll', () => {
  const fuelSection = document.querySelector('.fuel-section');
  const triggerPoint = window.innerHeight / 1.2;

  if (fuelSection.getBoundingClientRect().top < triggerPoint) {
    fuelSection.classList.add('show');
  }
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.getElementById('next').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
});
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Event listeners
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  // Initialize
  showSlide(currentSlide);
});

<script>
document.getElementById('menu-icon').addEventListener('click', () => {
  document.getElementById('menu-overlay').classList.add('show');
});

document.getElementById('menu-close').addEventListener('click', () => {
  document.getElementById('menu-overlay').classList.remove('show');
});
</script>

