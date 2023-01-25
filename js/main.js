const elLoader = document.querySelector(".preloader");
const elToTop = document.querySelector(".back-to-top");
const elCursor = document.querySelector(".cursor");
const elCursorInner = document.querySelector(".cursor2");
const navbar = document.querySelector(".header");
const navbarList = document.querySelector(".sitenav");
const btn = document.querySelector(".nav-btn");

// PRELOADER
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    elLoader.style.opacity = "0";
    elLoader.style.pointerEvents = "none";
  }, 1000);
});

// TO TOP SCROLL
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    elToTop.classList.add("active");
  } else {
    elToTop.classList.remove("active");
  }
});

// NAVBAR
window.addEventListener("scroll", function () {
  navbar.classList.toggle("navbar-scroll", window.scrollY > 10);
});

// TYPING ANIMATION
var typed = new Typed("#element", {
  // Waits 1000ms after typing "First"
  strings: ["FrontEnd Developer", "Blogger", "YouTuber", "Gamer"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

const navAnim = () => {
  btn.addEventListener("click", () => {
    navbarList.classList.toggle("nav-active");
    btn.classList.toggle("toggle");
  });
};

navAnim();
