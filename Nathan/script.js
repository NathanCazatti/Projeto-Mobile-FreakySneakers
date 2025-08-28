document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlideIndex = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }

  // Start the slideshow immediately, then repeat every 5 seconds
  setTimeout(nextSlide, 0); // Show second slide after 0ms
  setInterval(nextSlide, 4000); // Then every 5 seconds
});