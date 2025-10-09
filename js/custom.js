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

// lock background scroll js
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".primary-menu-container");
    const toggleBtn = document.querySelector(".menu-toggle");

    if (toggleBtn && menu) {
        // Open menu
        toggleBtn.addEventListener("click", function () {
            menu.classList.toggle("open");
            document.body.classList.toggle("menu-open");
        });
    }
});


// WorkWeDo slider - only for <768
document.addEventListener("DOMContentLoaded", function () {
    const WorkWeDoSlider = document.querySelector(".WorkWeDo");

    if (WorkWeDoSlider && window.innerWidth < 768) {
        new Swiper(WorkWeDoSlider, {
            slidesPerView: "auto",
            loop: true,
            loopedSlides: 10,
            freeModeMomentum: false,
            freeMode: true,
            speed: 5000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            freeModeMomentum: false,
        });
    }
});