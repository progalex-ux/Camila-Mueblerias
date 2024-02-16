// Carrusel 1
const multipleItemCarousel1 = document.getElementById('carouselExample1');
let carousel1;

function initCarousel1() {
    if (window.innerWidth <= 575) {
        configureCarousel1(1);
    } else if (window.innerWidth <= 1280) {
        configureCarousel1(3);
    } else {
        configureCarousel1(5);
    }
}

function configureCarousel1(visibleItems) {
    if (visibleItems === 1) {
        carousel1 = new bootstrap.Carousel(multipleItemCarousel1, {
            interval: false
        });
    } else {
        var cardWidth1 = $('.produ', multipleItemCarousel1).width();
        var totalItems1 = $('.carousel-item', multipleItemCarousel1).length;
        var itemsPerSlide1 = Math.floor($('.carousel-inner', multipleItemCarousel1).width() / cardWidth1);
        var scrollPosition1 = 0;

        $('.nextt, .previus', multipleItemCarousel1).off('click');

        $('.nextt', multipleItemCarousel1).on('click', function () {
            if (scrollPosition1 < (cardWidth1 * (totalItems1 - itemsPerSlide1))) {
                scrollPosition1 = scrollPosition1 + cardWidth1;
                $('.inner', multipleItemCarousel1).animate({ scrollLeft: scrollPosition1 }, 600);
            }
        });

        $('.previus', multipleItemCarousel1).on('click', function () {
            if (scrollPosition1 > 0) {
                scrollPosition1 = scrollPosition1 - cardWidth1;
                $('.inner', multipleItemCarousel1).animate({ scrollLeft: scrollPosition1 }, 600);
            }
        });
    }
}

// Carrusel 2
const multipleItemCarousel2 = document.getElementById('carouselExample2');
let carousel2;

function initCarousel2() {
    if (window.innerWidth <= 575) {
        configureCarousel2(1);
    } else if (window.innerWidth <= 1280) {
        configureCarousel2(3);
    } else {
        configureCarousel2(5);
    }
}

function configureCarousel2(visibleItems) {
    if (visibleItems === 1) {
        carousel2 = new bootstrap.Carousel(multipleItemCarousel2, {
            interval: false
        });
    } else {
        var cardWidth2 = $('.produ', multipleItemCarousel2).width();
        var totalItems2 = $('.carousel-item', multipleItemCarousel2).length;
        var itemsPerSlide2 = Math.floor($('.carousel-inner', multipleItemCarousel2).width() / cardWidth2);
        var scrollPosition2 = 0;

        $('.nextt, .previus', multipleItemCarousel2).off('click');

        $('.nextt', multipleItemCarousel2).on('click', function () {
            if (scrollPosition2 < (cardWidth2 * (totalItems2 - itemsPerSlide2))) {
                scrollPosition2 = scrollPosition2 + cardWidth2;
                $('.inner', multipleItemCarousel2).animate({ scrollLeft: scrollPosition2 }, 600);
            }
        });

        $('.previus', multipleItemCarousel2).on('click', function () {
            if (scrollPosition2 > 0) {
                scrollPosition2 = scrollPosition2 - cardWidth2;
                $('.inner', multipleItemCarousel2).animate({ scrollLeft: scrollPosition2 }, 600);
            }
        });
    }
}

initCarousel1();
initCarousel2();

window.addEventListener('resize', function () {
    initCarousel1();
    initCarousel2();
});
