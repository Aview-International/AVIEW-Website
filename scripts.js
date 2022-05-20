// Set vh variable for mobile nav height
function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Nav menu toggle for mobile
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const navbar = document.getElementById("navbar");

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

// Stat counters
const pageWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

if (pageWidth > 768) {
  const stats = document.getElementById("stats");
  const bounding = stats.getBoundingClientRect();
  const statsHeight = stats.offsetHeight;
  const statsWidth = stats.offsetWidth;
  const counters = document.querySelectorAll(".count");
  const speeds = [100, 15, 10];
  const timeouts = [20, 150, 240];
  if (
    bounding.top >= -statsHeight &&
    bounding.left >= -statsWidth &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) +
        statsWidth &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        statsHeight
  ) {
    let values = [0, 0, 0];
    counters.forEach((counter, i) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const suffix = counter.getAttribute("data-suffix");
        let count = values[i];
        const increment = Math.trunc(target / speeds[i]);

        if (count < target) {
          count += increment;
          values[i] = count;
          counter.innerText = count.toString() + suffix;
          setTimeout(updateCount, timeouts[i]);
        } else {
          counter.innerText = target + suffix;
        }
      };
      updateCount();
    });
  }
}
