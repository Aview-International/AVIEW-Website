const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const navbar = document.getElementById("navbar");

function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function toggleMenu() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.classList.toggle("no-scroll");
  navbar.classList.toggle("navbar-open");
  closeBtn.classList.toggle("close-btn-open");
}

menuBtn.addEventListener("click", () => {
  toggleMenu();
});

closeBtn.addEventListener("click", () => {
  toggleMenu();
});

window.addEventListener("resize", () => {
  document.body.classList.remove("no-scroll");
  navbar.classList.remove("navbar-open");
  closeBtn.classList.remove("close-btn-open");
  setViewportHeight();
});
