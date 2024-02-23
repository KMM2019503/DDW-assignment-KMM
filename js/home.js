document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const navLinks = document.getElementById("nav-links");
  const modal = document.getElementById("modal");

  modal.classList.add("active");
});
const heroContent = document.querySelector("[data-hero-content]");
const handleCloseModal = () => {
  let modal = document.getElementById("modal");
  let modalBg = document.getElementById("modal-bg");
  modal.style.display = "none";
  modalBg.style.display = "none";
  document.body.classList.remove("over-flow-hidden");
  heroContent.classList.add("active");
  autoChangeSlide();
};
// slide change function
const buttons = document.querySelectorAll("[data-carousel-button]");
const carousel = document.querySelector("[data-carousel]");
const slides = carousel.querySelector("[data-slides]");

function showNextSlide() {
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + 1;

  if (newIndex >= slides.children.length) {
    newIndex = 0;
  }

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

function autoChangeSlide() {
  setInterval(() => {
    showNextSlide();
  }, 5000);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }

    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// Start automatic slide change after the page loads
