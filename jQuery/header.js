$(function () {
    if($(window).width() <= 1023) {
        $(".profileAction ul li img").each(function () {
            if($(this).attr("src")=="./images/carticon.svg") {
                $(this).attr("src", "./images/searchicon.svg").addClass("searchButton")
            }
        })
    }
})
$(function () {
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
$(function () {
    $(".searchButton").click(function () {
        $(".searchForm").toggleClass("active")
        if($(window).width() >= 768) {
            $(".navigation").slideToggle(0)
        }
    })
})