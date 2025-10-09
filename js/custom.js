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
            freeMode: true,
            speed: 5000,
            autoplay: {
                delay: 0,
            },
        });
    }
});


// SlideInRight 
document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".ourpropmise_wrapper");

    if (!wrapper) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    wrapper.classList.add("active");
                } else {
                    wrapper.classList.remove("active");
                }
            });
        },
        {
            threshold: 0.3,
        }
    );

    observer.observe(wrapper);
});



// Turning Uncertainty Into Your Next Opportunity ---on viewport
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('.bg_overlay_animate');
    const h2 = document.querySelector('.turningmiddletitle h2');
    const originalText = h2.innerHTML; // store original text with <br>

    let wordsTimeout = null;
    let wordsAnimated = false;

    // Function to split words and handle <br> for mobile/desktop
    function splitWords() {
        const isMobile = window.innerWidth <= 768; // mobile breakpoint
        let processedText = isMobile ? originalText.replace(/<br\s*\/?>/gi, ' ') : originalText;

        const parts = processedText.split(/(\s+)/); // split by spaces, keep spaces
        h2.innerHTML = '';

        parts.forEach(part => {
            if (!isMobile && part === '<br>') {
                h2.appendChild(document.createElement('br'));
            } else if (part.trim() !== '') {
                const span = document.createElement('span');
                span.textContent = part;
                h2.appendChild(span);
            } else {
                h2.appendChild(document.createTextNode(part));
            }
        });
    }

    // Word reveal functions
    function animateWords() {
        const spans = h2.querySelectorAll('span');
        spans.forEach((span, i) => {
            setTimeout(() => {
                span.classList.add('active');
            }, i * 180);
        });
    }

    function resetAnimation() {
        const spans = h2.querySelectorAll('span');
        spans.forEach(span => span.classList.remove('active'));
    }

    // Overlay + word animation based on section center
    function checkAnimations() {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const inCenter = Math.abs(sectionCenter - viewportCenter) < rect.height / 2;

        // --- Overlay enter/leave ---
        if (inCenter) {
            section.classList.add('enter');
            section.classList.remove('leave');

            // Start word reveal after overlay animation duration
            if (!wordsAnimated) {
                clearTimeout(wordsTimeout);
                wordsTimeout = setTimeout(() => {
                    animateWords();
                    wordsAnimated = true;
                }, 200); // match overlay transition duration
            }
        } else {
            section.classList.remove('enter');
            section.classList.add('leave');

            clearTimeout(wordsTimeout);
            if (wordsAnimated) {
                resetAnimation();
                wordsAnimated = false;
            }
        }
    }

    // Initial setup
    splitWords();
    checkAnimations();

    // Listen to scroll and resize
    window.addEventListener('scroll', checkAnimations);
    window.addEventListener('resize', () => {
        splitWords(); // re-split on resize for mobile/desktop
        checkAnimations();
    });
});

