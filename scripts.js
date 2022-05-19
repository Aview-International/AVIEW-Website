const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("no-scroll");
  navbar.classList.toggle("navbar-open");
  closeBtn.classList.toggle("close-btn-open");
});

closeBtn.addEventListener("click", () => {
  document.body.classList.toggle("no-scroll");
  navbar.classList.toggle("navbar-open");
  closeBtn.classList.toggle("close-btn-open");
});

window.addEventListener("resize", () => {
  document.body.classList.remove("no-scroll");
  navbar.classList.remove("navbar-open");
  closeBtn.classList.remove("close-btn-open");
});
