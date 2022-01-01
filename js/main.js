const elLoader = document.querySelector("#preloader");
const elToTop = document.querySelector(".back-to-top");
const cursor = document.querySelector(".cursor");
const cursorInner = document.querySelector(".cursor2");

// PRELOADER
window.addEventListener("load", function () {
  elLoader.style.display = "none";
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
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorInner.style.left = x + "px";
  cursorInner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorInner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorInner.classList.remove("cursorinnerhover");
});
