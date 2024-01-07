$(function () {
    if($(window).width() <= 1024) {
        new Swiper(".swiper", {
            direction: "horizontal",
            loop: true,
            centeredSlides: true,
            initialSlide: $("#fslide"),
            slidesPerView: 3,
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