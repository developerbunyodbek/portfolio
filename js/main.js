const elLoader = document.querySelector(".preloader");
const elToTop = document.querySelector(".back-to-top");
const elCursor = document.querySelector(".cursor");
const elCursorInner = document.querySelector(".cursor2");
const navbar = document.querySelector(".header");

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

// CURSOR
document.addEventListener("mousemove", function (e) {
  elCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  elCursorInner.style.left = x + "px";
  elCursorInner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  elCursor.classList.add("click");
  elCursorInner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  elCursor.classList.remove("click");
  elCursorInner.classList.remove("cursorinnerhover");
});

// NAVBAR
window.addEventListener("scroll", function () {
  navbar.classList.toggle("navbar-scroll", window.scrollY > 10);
});

// TYPING ANIMATION
var typed = new Typed("#element", {
  // Waits 1000ms after typing "First"
  strings: ["Web Developer", "FrontEnd Developer", "YouTuber", "Gamer"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});
