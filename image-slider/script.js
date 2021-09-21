const slide = document.querySelector(".container");
const next = document.querySelector("#next");
const previous = document.querySelector("#previous");
const circles = document.querySelectorAll(".circle");

let currentSlider = 1;
let x = 0;
let nextSlide = x;
let currentCircle = document.querySelector(
  `.circle[data-id="${currentSlider}"]`
);
currentCircle.classList.add("active");

next.addEventListener("click", () => {
  currentSlider++;
  if (currentSlider == 5) {
    nextSlide = 0;
    currentSlider = 1;
    slide.style.transform = `translateX(${nextSlide}px)`;
    removeMark();
    currentCircle = document.querySelector(
      `.circle[data-id="${currentSlider}"]`
    );
    currentCircle.classList.add("active");
  } else {
    nextSlide -= 400;
    slide.style.transform = `translateX(${nextSlide}px)`;
    removeMark();
    currentCircle = document.querySelector(
      `.circle[data-id="${currentSlider}"]`
    );
    currentCircle.classList.add("active");
  }
});
previous.addEventListener("click", () => {
  currentSlider--;
  if (currentSlider == 0) {
    nextSlide = -1200;
    currentSlider = 4;
    slide.style.transform = `translateX(${nextSlide}px)`;
    removeMark();
    currentCircle = document.querySelector(
      `.circle[data-id="${currentSlider}"]`
    );
    currentCircle.classList.add("active");
  } else {
    nextSlide += 400;
    slide.style.transform = `translateX(${nextSlide}px)`;
    removeMark();
    currentCircle = document.querySelector(
      `.circle[data-id="${currentSlider}"]`
    );
    currentCircle.classList.add("active");
  }
});

circles.forEach((item) => {
  item.addEventListener("click", () => {
    removeMark();
    item.classList.add("active");
    let id = item.getAttribute("data-id");
    if (id == 1) {
      x = 0;
      slide.style.transform = `translateX(${x}px)`;
      nextSlide = x;
      currentSlider = 1;
    } else if (id == 2) {
      x = -400;
      slide.style.transform = `translateX(${x}px)`;
      nextSlide = x;
      currentSlider = 2;
    } else if (id == 3) {
      x = -800;
      slide.style.transform = `translateX(${x}px)`;
      nextSlide = x;
      currentSlider = 3;
    } else if (id == 4) {
      x = -1200;
      slide.style.transform = `translateX(${x}px)`;
      nextSlide = x;
      currentSlider = 4;
    }
  });
});

function removeMark() {
  circles.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
}
function start() {
  setTimeout(() => {
    next.click();
    start();
  }, 5000);
  
}
 
start();
