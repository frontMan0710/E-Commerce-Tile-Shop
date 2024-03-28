$(function () {
    $(".footerColTitle").click(function () {
        $(this).siblings(".collapsible").slideToggle(200)
        $(this).toggleClass("active")
    })
})