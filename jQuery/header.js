$(window).scroll(function () {
    var secondBox = $('.second');
    var offset = secondBox.offset().top;
    if ($(window).width() > 1023) {
        if ($(window).scrollTop() + $(window).height() > offset) {
            $(".headerLogo").slideUp(500);
            $("header").css("height", "auto")
            //$(".headerLogo .logo").css({"transform":"translateY(-25%)", "transition":"transform 1s"})
        } else {
            $(".headerLogo").slideDown(400);
            //$(".headerLogo .logo").css({"transform":"translateY(0%)", "transition":"transform 0.8s"})
        }
    } else {
        //$("#menuContent").hide();
    }
})
$(function () {
    if($(window).width() <= 1023) {
        $(".profileAction ul li img").each(function () {
            if($(this).attr("src")=="./images/carticon.svg") {
                $(this).attr("src", "./images/searchicon.svg").addClass("searchButton")
            }
        })
    } else {
        $(this).attr("src", "./images/searchicon.svg")
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