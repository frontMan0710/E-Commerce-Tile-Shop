$(function () {
    $("#playerIcon").magnificPopup({
        items: {
            src: "#videoPlayerModal",
            type: "inline",
            modal: true
        },
        preloader: false,
        closeBtnInside: false,
        overflow: false,
    })
})