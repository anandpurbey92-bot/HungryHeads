const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let index = 0;
let interval;

/* SHOW SLIDE */
function showSlide(i) {
  if (!slides.length || !dots.length) return;

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");

  index = i;
}

/* AUTO SLIDE */
function startSlider() {
  interval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 4000);
}

/* STOP SLIDE */
function stopSlider() {
  clearInterval(interval);
}

/* DOT CLICK */
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    stopSlider();
    showSlide(i);
    startSlider();
  });
});

/* PAUSE ON HOVER / TOUCH */
const hero = document.querySelector(".hero");

if (hero) {
  hero.addEventListener("mouseenter", stopSlider);
  hero.addEventListener("mouseleave", startSlider);

  hero.addEventListener("touchstart", stopSlider);
  hero.addEventListener("touchend", startSlider);
}

/* INIT */
showSlide(index);
startSlider();
document.getElementById("year").textContent = new Date().getFullYear();

/* MOBILE MENU TOGGLE */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}
