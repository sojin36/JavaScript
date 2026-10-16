// 비주얼 스와퍼
const visualSw = new Swiper(".visualSwiper", {
    autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
         pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
});

// productlist 
const proSw = new Swiper(".proSwiper",{
     slidesPerView: 3.5,
      spaceBetween: 30,
})
