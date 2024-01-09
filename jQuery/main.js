$(function() {
    $("#playerIcon").mouseenter(function () {
        $("#hoverLayer").css("background-color", "var(--color-black-opacity)")
    })
    $("#playerIcon").mouseleave(function () {
        $("#hoverLayer").css("background-color", "transparent")
    })
    $("#videoPlayerModal").css({"position":"absolute",
        "left":"50%", "transform":"translate(-50%, -50%)",})
    if($(window).width() > 1920) {
        $(".tech_ancButton").css({"width":"180px", "height":"52px", "font-size":"16px"})
        $("main .start").css({"height":"526px", "background-size":"contain"})
        $(".playerWrapperTextBlock").css({"padding":"0 30px 0 30px", "gap":"20px"})
        $(".startTextCard, .secondTextCard").css("padding", "50px 36px 52px 43px")
        $(".sixthTextCard").css("padding", "120px 152px 120px 86px")
        $(".footerContent").css("padding", "68px 0 27px 0")
        $("main").css("padding-top", "193px")
        $(".playerWrapperTextBlock .textContent span").css("font-size", "18px")
        $(".navigation li, .galleryTextBlock p").css("font-size", "16px")
        $(".fifthCatalogueTextBlock p").css("font-size", "18px")
        $(".fourthSlideTextBlock p").css("font-size", "16px")
        $(".footerCopyright p").css("font-size", "9px")
        $(".footerColumn > *").css("font-size", "14px")
        $(".tech_parFourteen").css("font-size", "14px")
        $(".tech_parTwenty").css("font-size", "20px")
        $(".tech_h3Twenty").css("font-size", "28px")
        $("h1, h2").css("font-size", "48px")
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