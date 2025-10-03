// Menu toggle js
jQuery(document).ready(function ($) {
    $('.menu-toggle').on('click', function () {
        $('.primary-menu-container').toggleClass('view');
        $('.main-navigation').toggleClass('toggled');
    });
});


// Change Header bg-color on scroll
jQuery(document).ready(function ($) {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $('#dynamic').addClass('header-scrolled');
        } else {
            $('#dynamic').removeClass('header-scrolled');
        }
    });
});

