var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};
burger.addEventListener("click", toggleMenu);
$(".carousel").carousel({
  interval: 2000,
});
