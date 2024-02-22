document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const navLinks = document.getElementById("nav-links");
  const modal = document.getElementById("modal");

  modal.classList.add("active");

  function throttle(callback, delay) {
    let lastTime = 0;
    return function () {
      const currentTime = new Date();
      if (currentTime - lastTime >= delay) {
        callback.apply(null, arguments);
        lastTime = currentTime;
      }
    };
  }

  function handleScroll() {
    const scrollValue = window.scrollY;

    // // animation for marketing elements
    // makHeader.classList.toggle("animate", scrollValue >= 20);
    // makfirstdetail.classList.toggle("animate", scrollValue >= 200);
    // makfirstImage.classList.toggle("animate", scrollValue >= 300);
    nav.classList.toggle("add-background", scrollValue >= 10);
    const isLaptopView = scrollValue >= 600;
    nav.classList.toggle("add-background-laptop", isLaptopView);
    navLinks.classList.toggle("change-color", isLaptopView);
  }

  const throttledScroll = throttle(handleScroll, 200);
  window.addEventListener("scroll", throttledScroll);
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
