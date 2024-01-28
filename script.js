document.addEventListener("DOMContentLoaded", function () {
  // Handle navigation process start
  const pageLinks = document.querySelectorAll(".page-link");
  const currentUrl = window.location.href;
  const fileName = currentUrl.split("/").pop();

  for (const link of pageLinks) {
    const linkHref = link.getAttribute("href");

    if (fileName !== linkHref) {
      link.classList.remove("active");
    } else {
      link.classList.add("active");
    }

    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = link.getAttribute("href");
    });
  }
  // navigation process end
});

const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
