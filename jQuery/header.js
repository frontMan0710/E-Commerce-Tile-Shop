$(function () {
    $(window).scroll(function () {
        var secondBox = $('.second')
        var offset = secondBox.offset().top
        if ($(window).width() > 1023) {
            if ($(window).scrollTop() + $(window).height() > offset) {
                $(".headerLogo").slideUp(500)
                $("header").css("height", "auto")
            } else {
                $(".headerLogo").slideDown(400)
            }
        }
    })
    $("#burgerIcon").click(function () {
        $("#menuContent, #burgerIcon").toggleClass("active")
        if ($(window).width() < 768) {
            $("body").toggleClass("lock")
        }
        if($("#menuContent").hasClass("") && $(window).width() <= 1023 && $(window).width() >= 768) {
            $(".searchForm").removeClass("active")
            $(".navigation").css("display", "flex")
        }
    })
})