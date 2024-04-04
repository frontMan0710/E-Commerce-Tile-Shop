$(function () {
    $(".playerWrapperTextBlock").magnificPopup({
        items: {
            src: "#videoPlayerModal",
            type: "inline",
            modal: true
        },
        preloader: false,
        closeBtnInside: false,
        fixedContentPos: true,
        overflowY: "hidden",
    })
    $(".popupTrig").magnificPopup({
        type: "image",
        preloader: false,
        closeOnContentClick: true,
        fixedContentPos: true,
        overflowY: "hidden",
        image: {
            verticalFit: false,
            hasOrientation: true
        },
        mainClass: "mfp-with-zoom",
        zoom: {
            enabled: true,
            duration: 300,
            easing: "ease-in-out",
        },
        gallery: {
            enabled: true
        },
    })
    $('#callbackModal').magnificPopup({
        items: {
            src: '#callbackModalContainer',
            type: 'inline',
            modal: true
        },
        focus: '#phoneNumber',
        preloader: false,
        closeBtnInside: false,
        fixedContentPos: true,
        overflowY: "hidden",
    })
})