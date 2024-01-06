$(function() {
    if($(window).width() > 1920) {
        $("main").css("padding-top", "193px")
        $("main .start").css({"height":"526px", "background-size":"contain"})
        $(".startTextCard").css("padding", "50px 36px 52px 43px")
        $(".startTextCard__textBlock h1").css("font-size", "40px")
        $(".startTextCard__textBlock p").css("font-size", "20px")
        $(".tech_secTitleBlock h2").css("font-size", "40px")
        $(".tech_secTitleBlock p").css("font-size", "20px")
        $(".tech_ancButton").css({"width":"180px", "height":"52px", "font-size":"16px"})
        $(".navigation ul li").css("font-size", "16px")
    } else if ($(window).width() <= 1920 && $(window).width() >= 1024) {
        $(".navigation ul li").css("font-size", "0.83vw")
        $("main").css("padding-top", "10.04vw")
        $("main .start").css({"height":"27vw", "background-size":"cover"})
    }
    if($(window).width() <= 1023 && $(window).width() >= 768) {
        $("main").css("padding-top", "70px")
        $("main .start").css("height", "51.36vw")
    }
    if($(window).width() <= 767 && $(window).width() >= 300) {
        $("main").css("padding-top", "70px")
        $("main .start").css("height", "100vh")
    }
})