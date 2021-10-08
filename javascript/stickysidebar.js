$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 60) {
        $(".sidebar").removeClass("sticky");
    }
    else if (scroll >= 61) {
        $(".sidebar").addClass("sticky");
    }
})