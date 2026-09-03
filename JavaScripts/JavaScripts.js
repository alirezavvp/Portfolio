const darkMode = document.querySelector("#dark-mode");
const mobileMenu = document.querySelector("#mobile-menu");
const siteContent = document.querySelector("#site-content");

// هنگام اسکرول کردن منوی اصلی تغییر ظاهر میدهد
window.addEventListener("scroll", function () {
  const header = document.querySelector("#main-header");
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// باز کردن منو در موبایل و قفل شدن اسکرول و تاریک شدن
document.querySelector("#toggle-menu > svg").addEventListener("click", () => {
  document.body.classList.toggle("no-scroll");
  mobileMenu.classList.toggle("aside");
  document.getElementById("overlay").classList.toggle("show");
  siteContent.classList.add("margin");
});

// بستن منو در موبایل
document.querySelector("#close-menu > svg").addEventListener("click", () => {
  document.body.classList.toggle("no-scroll");
  mobileMenu.classList.remove("aside");
  document.getElementById("overlay").classList.remove("show");
  siteContent.classList.remove("margin");
});

// هنگام اسکرول کردن محتوا به شکل مخصوصی ظاهر میشود
const elements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll");
    }
  });
});

elements.forEach((el) => observer.observe(el));

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
