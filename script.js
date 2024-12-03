// Nav Bar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navImages = document.querySelectorAll('.nav-links li a img');

    // Toggle menu visibility for small screens
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Add floating hover effect
    navImages.forEach((img) => {
        img.addEventListener('mouseenter', () => {
            img.style.transition = 'transform 0.3s, opacity 0.3s';
            img.style.transform = 'translateY(-5px)'; // Float upward
            img.style.opacity = '0.9'; // Slight opacity change
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'translateY(0)'; // Reset position
            img.style.opacity = '1'; // Reset opacity
        });
    });
});

// Carousel

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});
