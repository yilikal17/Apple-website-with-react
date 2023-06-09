import $ from "jquery"


    $(document).on("click", ".footer-links-wrapper h3", function () {
                if ($(window).width() < 768) {
                if ($(this).next("ul").fadeToggle()) $(this).toggleClass("expanded");
                }
                $(window).on("resize", function () {
                window.location.reload();
                });
                });

