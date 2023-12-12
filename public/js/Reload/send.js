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

if (window.matchMedia("(min-width:576px)").matches) {
    var carouselWidth = $('.inner', multipleItemCarousel)[0].scrollWidth;
    var cardWidth = $('.produ', multipleItemCarousel).width();
    var scrollPosition = 0;

    $('.nextt', multipleItemCarousel).on('click', function () {
        if (scrollPosition < (carouselWidth - (cardWidth * 6))) {
            
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
} else {
    carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
    });
}


function handleSlideClass() {
    if (window.matchMedia("(max-width:575px)").matches) {
        multipleItemCarousel.classList.add('slide');
    } else {
        multipleItemCarousel.classList.remove('slide');
    }
}

handleSlideClass();
window.addEventListener('resize', handleSlideClass);





