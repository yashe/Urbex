/* LOAD GALLERY */


$(document).ready(function () {

    var loadMore = $(".load-more");
    var gallery = document.querySelector(".gallery-section");

    loadMore.click(function (e) {
        $.getJSON('js/gallery.json', function (data) {

            var cloneGallery = gallery.cloneNode(true);

            var img = cloneGallery.querySelectorAll("img");
            var h3 = cloneGallery.querySelectorAll("h3");
            var p = cloneGallery.querySelectorAll("p");

            $(data).each(function (key, val) {
                img[key].src = val.src;

                if(val.header.split(" ").length === 1){
                    h3[key].textContent = val.header;
                } else {
                    h3[key].innerHTML = val.header.split(" ").join("<br>");
                }
                p[key].textContent = val.paragraph;
            });

            $(cloneGallery).fadeIn("slow", function () {
                $(this).appendTo("#gallery");
            });
            loadMore.hide();
        });

    });

});

