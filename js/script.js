var swiper = new Swiper(".slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
      nextEl: ".slider__btn-next",
      prevEl: ".slider__btn-prev",
    },
  });
let menuBtn = document.querySelector('.menu-btn');
let menuCloseBtn = document.querySelector('.menu-close-btn');
let menu = document.querySelector('.menu-mobile');
menuBtn.addEventListener('click', function(){
    menu.classList.add('menu-active');
})
menuCloseBtn.addEventListener('click', function(){
    menu.classList.remove('menu-active');
})