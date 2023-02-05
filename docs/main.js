const iconHamburger = document.querySelector(".menu-hamburger");
const menumobile = document.querySelector(".menu-mobile");

iconHamburger.addEventListener("click", toggleMenuHamburger);

function toggleMenuHamburger() {
  menumobile.classList.toggle("inactive");
}
