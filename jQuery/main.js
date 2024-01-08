$(function() {
    $("#videoPlayerModal").css({"position":"absolute",
        "left":"50%", "transform":"translate(-50%, -50%)",})
    if($(window).width() > 1920) {
        $("main").css("padding-top", "193px")
        $("main .start").css({"height":"526px", "background-size":"contain"})
        $(".startTextCard, .secondTextCard").css("padding", "50px 36px 52px 43px")
        $("h1, h2").css("font-size", "48px")
        $("h3").css("font-size", "28px")
        $(".playerWrapperTextBlock .textContent span").css("font-size", "18px")
        $(".playerWrapperTextBlock").css({"padding":"0 30px 0 30px", "gap":"20px"})
        $("p").css("font-size", "20px")
        $(".fourthSlideTextBlock p").css("font-size", "16px")
        $(".fifthCatalogueTextBlock p").css("font-size", "18px")
        $(".navigation li, .galleryTextBlock p").css("font-size", "16px")
        $(".tech_ancButton").css({"width":"180px", "height":"52px", "font-size":"16px"})
    }
    if ($(window).width() <= 1920 && $(window).width() >= 1024) {
        $("main").css("padding-top", "10.04vw")
        $("main .start").css({"height":"27vw", "background-size":"cover"})
        $(".navigation li").css("font-size", "0.83vw")
        $("#videoPlayerModal iframe").css({"max-width":"1120px",
            "max-height":"630px", "width":"58.3vw", "height":"32.8vw"})
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