const btnMenu = document.getElementById("btn-menu");
const btnMenuDark = document.getElementById("btn-menu-dark");
const navMenu = document.getElementById("nav-menu");
const btnClose = document.getElementById("btn-close");
const navLinks = document.querySelectorAll(".nav-links");
const closeAria = document.getElementById("close-aria");
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  navMenu.classList.toggle("menu-mobile");
  navMenu.classList.toggle("menu-mobile-active");
  closeAria.classList.toggle("hidden");
  btnClose.classList.toggle("btn-close-animation");
  btnClose.classList.toggle("btn-close-animation-active");
}

btnMenu.addEventListener("click", toggleMenu);
btnMenuDark.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);
closeAria.addEventListener("click", toggleMenu);
btnMobile.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
