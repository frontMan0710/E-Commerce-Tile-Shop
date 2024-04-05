$(function() {
    $("#playerIcon, .playerWrapperTextBlock").mouseenter(function () {
        $("#hoverLayer").css("background-color", "var(--color-black-opacity)")
    })
    $("#playerIcon, .playerWrapperTextBlock").mouseleave(function () {
        $("#hoverLayer").css("background-color", "transparent")
    })
    $("#videoPlayerModal").css({"position":"absolute",
        "left":"50%", "transform":"translate(-50%, -50%)",})
    if($(window).width() > 1920) {
        $(".tech_ancButton").css({"width":"180px", "height":"52px", "font-size":"16px"})
        $("main .start").css({"height":"526px", "background-size":"contain"})
        $(".playerWrapperTextBlock").css({"padding":"0 30px 0 30px", "gap":"20px"})
        $(".startTextCard, .secondTextCard").css({"padding":"50px 36px 52px 43px"})
        $(".sixthTextCard").css({"padding":"120px 152px 120px 86px"})
        $(".footerContent").css({"padding":"68px 0 27px 0"})
        $("main").css({"padding-top":"193px"})
        $(".galleryTextBlock").css({"bottom":"-20px"})
        $(".playerWrapperTextBlock .textContent span, .fifthCatalogueTextBlock p").css({"font-size":"18px"})
        $(".navigation li, .galleryTextBlock p, .fourthSlideTextBlock p").css({"font-size":"16px"})
        $(".swiper-button-prev, .swiper-button-next").css({"display":"none"})
        $(".footerCopyright p").css({"font-size":"9px"})
        $(".tech_parFourteen").css({"font-size":"14px"})
        $(".tech_parFontSize").css({"font-size":"20px"})
        $("h3").css({"font-size":"28px"})
        $("h1, h2").css({"font-size":"48px"})
    }
    if ($(window).width() <= 1920 && $(window).width() >= 1024) {
        $("main").css({"padding-top":"10.04vw"})
        $("main .start").css({"height":"27vw", "background-size":"cover"})
        $("#videoPlayerModal iframe").css({"max-width":"1120px",
            "max-height":"630px", "width":"58.33vw", "height":"32.81vw"})
        $(".swiper-button-prev, .swiper-button-next").css({"display":"none"})
    }
    if($(window).width() <= 1023 && $(window).width() >= 768) {
        var $headerHeight = $("header").height()
        $(".start").css({"height":"100vh - " + $headerHeight + "px"})
        $("main").css({"padding-top":"70px"})
    }
    if($(window).width() <= 767 && $(window).width() >= 300) {
        $("main").css({"padding-top":"70px"})
    }
    if($(window).width() >= 768) {
        $("hr").css({"display":"none"})
        $(".footerMobileLogo").css({"display":"none"})
        $(".contactListWrapper").css({"display":"none"})
    }
})