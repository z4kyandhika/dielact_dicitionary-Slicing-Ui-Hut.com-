import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('nav');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navBar.classList.remove('active');
}

let swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});
