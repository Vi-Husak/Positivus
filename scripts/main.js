AOS.init();

const burgerMenu = document.querySelector("#menu-btn");
const menuOverlay = document.querySelector("#menu-content");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  menuOverlay.classList.toggle("active");
  document.body.classList.toggle("lock");
});

let casesSwiper;

function initializeSwiper() {
  casesSwiper = new Swiper(".cases__swiper", {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: "auto",
  });
}

function handleResize() {
  if (window.innerWidth >= 880) {
    if (casesSwiper) {
      casesSwiper.destroy();
      casesSwiper = null;
    }
  } else {
    if (!casesSwiper) {
      initializeSwiper();
    }
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

new Accordion(".accordion-container");
const acArr = document
  .querySelector(".accordion-container")
  .querySelectorAll(".ac-number");
acArr.forEach((el, num) => (el.textContent = `0${num + 1}`));

const testimonialsSwiper = new Swiper(".testimonials__swiper", {
  loop: true,
  centeredSlides: true,
  speed: 400,
  spaceBetween: 50,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  pagination: {
    el: ".swiper-bullets",
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class= ${className}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"></path>
                </svg>
              </span>`;
    },
  },
});
