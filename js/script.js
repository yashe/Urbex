$(document).ready(function () {

    /* RESIZE WINDOW */
    if (innerWidth <= 991) {
        $("#container-box").removeClass("container").addClass("container-fluid");
    } else {
        $("#container-box").removeClass("container-fluid").addClass("container");
    }

    if (innerWidth <= 767) {
        $(".xs-text").removeClass("text-right").addClass("text-center");
        $(".form").addClass("text-center");
        $(".main-nav .nav").addClass("text-right");

    } else {
        $(".xs-text").removeClass("text-center").addClass("text-right");
        $(".form").removeClass("text-center");
        $(".main-nav .nav").removeClass("text-right");
    }

    if (innerWidth <= 575) {
        $(".about-header").html("WE </br>ARE");
    } else {
        $(".about-header").html("WE ARE");
    }

    $(window).resize(function () {
        if (innerWidth <= 991) {
            $("#container-box").removeClass("container").addClass("container-fluid");
        } else {
            $("#container-box").removeClass("container-fluid").addClass("container");
        }

        if (innerWidth <= 767) {
            $(".xs-text").removeClass("text-right").addClass("text-center");
            $(".form").addClass("text-center");
            $(".main-nav .nav").addClass("text-right");
        } else {
            $(".xs-text").removeClass("text-center").addClass("text-right");
            $(".form").removeClass("text-center");
            $(".main-nav .nav").removeClass("text-right");
        }

        if (innerWidth <= 575) {
            $(".about-header").html("WE </br>ARE");
        } else {
            $(".about-header").html("WE ARE");
        }
    });


    /* SMOOTH SCROLLING TO SECTION */

    $('body').scrollspy({ target: "#navbar", offset: 50 });

    $(".main-nav .nav a, .copyright a").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

    /* SCROLL TOP - hidden arrow */

    $(document).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".copyright a").removeClass("hidden");
        } else {
            $(".copyright a").addClass("hidden");
        }
    });

    /* READ MORE - arrow */

    $(".read-more").click(function () {
        $(this).toggleClass("active");
    });

});
