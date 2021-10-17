(function () {
    //If you want to include more images, add the link name and URL of the image in the array list below.
    let images_list = [
        { "url": "media/osmdownloader/osmdownloader_1.webp", "name" : "OSM_Downloader downloaden via Plugin menu.", "link" : "" },
        { "url": "media/osmdownloader/osmdownloader_2.webp", "name" : "OSM_Downloader automatisch toegevoegd aan de werkbalk.", "link" : "" },
        { "url": "media/osmdownloader/osmdownloader_3.webp", "name" : "Simpelweg het gebied selecteren waar je de dat OpenStreetmap data van wil hebben.", "link" : "" },
        { "url": "media/osmdownloader/osmdownloader_4.webp", "name" : "Gebied is geselecteerd, nu opslaan op een gewenste locatie. Voorkeur bij het project waar je aan werkt.", "link" : "" },
        { "url": "media/osmdownloader/osmdownloader_6.webp", "name" : "<code>.osm</code> bestand toevoegen aan QGIS. Dit kan door het bestand in QGIS te slepen.", "link" : "" },
        { "url": "media/osmdownloader/osmdownloader_7.webp", "name" : "Alle (deel)bestanden zijn toegevoegd aan QGIS. Je kan er nu mee aan de slag en de verschillende lagen naar wens bewerken.", "link" : "" }
    ];

    let slider_id = document.querySelector("#hcg-slider-1");

    // append all images
    let dots_div = "";
    let images_div = "";
    for (let i = 0; i < images_list.length; i++) {
        // if no link without href="" tag
        let href = (images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"');
        images_div += '<a' + href + ' class="hcg-slides animated"' + (i === 0 ? ' style="display:block"' : '') + '>' +
            '<span class="hcg-slide-number">' + (i + 1) + '/' + images_list.length + '</span>' +
            '<img loading="lazy" src="' + images_list[i].url + '" alt="' + images_list[i].name + '">' +
            '<span class="hcg-slide-text">' + images_list[i].name + '</span>' +
            '</a>';
        dots_div += '<span class="hcg-slide-dot' + (i === 0 ? ' dot-active' : '') + '" data-id="' + i + '"></span>';
    }
    slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
    slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

    let slide_index = 0;

    let images = slider_id.querySelectorAll(".hcg-slides");
    let dots = slider_id.querySelectorAll(".hcg-slide-dot");
    let prev_button = slider_id.querySelector(".hcg-slide-prev");
    let next_button = slider_id.querySelector(".hcg-slide-next");

    function showSlides() {
        if (slide_index > images.length - 1) {
            slide_index = 0;
        }
        if (slide_index < 0) {
            slide_index = images.length - 1;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
            dots[i].classList.remove("dot-active");
            if (i == slide_index) {
                images[i].style.display = "block";
                dots[i].classList.add("dot-active");
            }
        }
    }

    prev_button.addEventListener("click", function (event) {
        event.preventDefault();
        slide_index--;
        showSlides();
    }, false);

    next_button.addEventListener("click", function (event) {
        event.preventDefault();
        slide_index++;
        showSlides();
    }, false);

    function dot_click(event) {
        slide_index = event.target.dataset.id;
        showSlides();
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", dot_click, false);
    }
})();