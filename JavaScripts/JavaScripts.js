const darkMode = document.querySelector("#dark-mode");
const mobileMenu = document.querySelector("#mobile-menu");
const siteContent = document.querySelector("#site-content");

// هنگام اسکرول کردن منوی اصلی تغییر ظاهر میدهد
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// باز کردن منو در موبایل و قفل شدن اسکرول و تاریک شدن
document.querySelector("#toggle-menu > svg").addEventListener("click", () => {
  mobileMenu.classList.toggle("aside");
  document.getElementById("overlay").classList.toggle("show");
  siteContent.classList.add("margin");
  // siteContent.style.marginRight = "210px";
  document.body.classList.toggle("no-scroll");
});

// بستن منو در موبایل
document.querySelector("#close-menu > svg").addEventListener("click", () => {
  mobileMenu.classList.remove("aside");
  document.getElementById("overlay").classList.remove("show");
  siteContent.classList.remove("margin");
  // siteContent.style.marginRight = "0";
  document.body.classList.remove("no-scroll");
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
