window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document
  .querySelector("#toggle-menu > svg")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("show");
    document.getElementById("overlay").classList.toggle("show");
    document.body.classList.add("no-scroll");
  });

document
  .querySelector("#close-menu > svg")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
    document.body.classList.remove("no-scroll");
  });

const elements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll");
    }
  });
});

elements.forEach((el) => observer.observe(el));
