$(function () {
    if($(window).width() <= 1024) {
        new Swiper(".swiper", {
            direction: "horizontal",
            loop: true,
            spaceBetween: 20,
            centeredSlides: true,
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                }
            }
        })
    }
})