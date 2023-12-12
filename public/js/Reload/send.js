const base_url="http://localhost/CamilaMueblerias/";
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
function  showCategory(category){
    localStorage.setItem("category", category)
    window.location.href = base_url + "index.php/principal/categorias"
}
function separador(identificador){
    localStorage.setItem("identificador", identificador);
    window.location.href = base_url + "index.php/principal/productos"
}

const multipleItemCarousel = document.querySelector('.carousel-multiple-items');
let carousel;

function initCarousel() {
    if (window.innerWidth <= 575) {
        configureCarousel(1);
    } else if (window.innerWidth <= 1280) {
        configureCarousel(3);
    } else {
        configureCarousel(5);
    }
}

function configureCarousel(visibleItems) {
    if (visibleItems === 1) {
        carousel = new bootstrap.Carousel(multipleItemCarousel, {
            interval: false
        });
    } else {
        
        var cardWidth = $('.produ', multipleItemCarousel).width();
        var totalItems = $('.carousel-item', multipleItemCarousel).length;
        var itemsPerSlide = Math.floor($('.carousel-inner', multipleItemCarousel).width() / cardWidth);

        var scrollPosition = 0;

        $('.nextt, .previus', multipleItemCarousel).off('click'); 

        $('.nextt', multipleItemCarousel).on('click', function () {
            if (scrollPosition < (cardWidth * (totalItems - itemsPerSlide))) {
                scrollPosition = scrollPosition + cardWidth;
                $('.inner', multipleItemCarousel).animate({ scrollLeft: scrollPosition }, 600);
            }
        });

        $('.previus', multipleItemCarousel).on('click', function () {
            if (scrollPosition > 0) {
                scrollPosition = scrollPosition - cardWidth;
                $('.inner', multipleItemCarousel).animate({ scrollLeft: scrollPosition }, 600);
            }
        });
    }
}


function handleSlideClass() {
    if (window.innerWidth <= 575) {
        multipleItemCarousel.classList.add('slide');
    } else {
        multipleItemCarousel.classList.remove('slide');
    }
}

handleSlideClass();
initCarousel(); 
window.addEventListener('resize', function () {
    handleSlideClass();
    initCarousel();
});
