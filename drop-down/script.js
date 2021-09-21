const items = document.querySelector(".items");
const menu = document.querySelector(".menu");

menu.addEventListener("mouseover", () => {
  openMenu(items);

});
menu.addEventListener("mouseout", ()=>{
  closeMenu(items);
})

function openMenu(element) {
  element.classList.toggle("active");
}
function closeMenu(element) {
  element.classList.toggle("active");
}
