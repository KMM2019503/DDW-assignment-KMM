document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const navLinks = document.getElementById("nav-links");
  const makHeader = document.getElementById("mak-first-header");
  const makfirstdetail = document.getElementById("mak-first-detail");
  const makfirstImage = document.getElementById("mak-first-image");
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

const handleCloseModal = () => {
  let modal = document.getElementById("modal");
  let modalBg = document.getElementById("modal-bg");
  modal.style.display = "none";
  modalBg.style.display = "none";
  document.body.classList.remove("over-flow-hidden");
};
