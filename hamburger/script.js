const hamburger = document.querySelector(".hamburger");
const hamburgerButton = document.querySelector(".hamburgerButton");
const closeButton = document.querySelector(".close");

hamburgerButton.addEventListener("click", () => {
  openHamburger(hamburger);
});
closeButton.addEventListener("click", () => {
  openHamburger(hamburger);

});



function openHamburger(element) {
  element.classList.toggle("active");
  
}
