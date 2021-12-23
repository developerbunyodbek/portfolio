const loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// TO TOP SCROLL
const toTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
