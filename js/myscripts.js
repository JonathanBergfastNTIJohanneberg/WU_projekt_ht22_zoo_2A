let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow-container figure");
const dots = document.querySelectorAll(".dot");
const showSlides = (n = slideIndex) => {
  slideIndex = n;
  if (n > slides.length) slideIndex = 1;
  else if (n < 1) slideIndex = slides.length;

  for (const slide of slides) slide.classList.add("hidden");
  for (const dot of dots) dot.classList.remove("active");

  slides[slideIndex].classList.remove("hidden");
  dots[slideIndex].classList.add("active");
};

// Delegated event listener on `.dot-wrap`
dots[0].parentElement.addEventListener(
  "click",
  (e) => {
    if (!e.target.matches("button.dot")) return;
    showSlides(dots.indexOf(e.target));
  },
  { passive: true }
);

document
  .querySelector(".slide-show-container")
  .addEventListener("click", (e) => {});
