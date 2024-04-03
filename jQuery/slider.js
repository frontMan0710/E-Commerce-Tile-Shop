$(function () {
    if($(window).width() < 1024) {
        new Swiper(".thirdSlider, .fourthSlider", {
            direction: "horizontal",
            spaceBetween: 30,
            loop: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadOnTransitionStart: false,
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                429: {
                    slidesPerView: 3,
                }
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        })
        new Swiper(".firstSlider", {
            direction: "horizontal",
            effect: "coverflow",
            spaceBetween: 30,
            slidesPerView: 1,
            loop: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadOnTransitionStart: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        })
    }
})