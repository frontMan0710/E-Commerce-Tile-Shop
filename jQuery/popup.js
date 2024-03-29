$(function () {
    $(".playerWrapperTextBlock").magnificPopup({
        items: {
            src: "#videoPlayerModal",
            type: "inline",
            modal: true
        },
        preloader: false,
        closeBtnInside: false,
        overflow: false,
    })
    $(".popupTrig").magnificPopup({
        type: "image",
        preloader: false,
        closeOnContentClick: true,
        image: {
            verticalFit: false,
            hasOrientation: true
        },
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: "ease-in-out",
        },
        gallery: {
            enabled: true
        },
    })
})