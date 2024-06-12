var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};
burger.addEventListener("click", toggleMenu);
$(".carousel").carousel({
  interval: 2000,
});

import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
