document.addEventListener("DOMContentLoaded", function () {
  const shadow = document.getElementById("shadow");
  shadow.classList.add("active");
});

// Intersection Observer setup
// const subHeroSection = document.getElementById("sub-hero-section");

// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.6 }
// ); // Adjust the threshold as needed

// observer.observe(subHeroSection);
