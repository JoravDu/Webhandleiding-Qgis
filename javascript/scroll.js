mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 792 || document.documentElement.scrollTop > 792) {
        mybutton.style.display = "block";
        $('myBtn').fadeIn();
    } else {
        mybutton.style.display = "none";
        $('myBtn').fadeOut();
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $('html, body').animate({ scrollTop: 0 }, 1000);
}