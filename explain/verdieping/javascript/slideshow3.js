var slideIndex = 1;
showDivs3(slideIndex);

function plusDivs3(n) {
    showDivs3(slideIndex += n);
}

function showDivs3(n) {
    var i;
    var x = document.getElementsByClassName("slides3");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}