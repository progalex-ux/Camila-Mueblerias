<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url() ?>assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/vistas/index.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/menu/menu.css">
    <link rel="icon" href="<?= base_url() ?>assets/img/logo/logo.icon">
    <title>Camila Mueblerias</title>
</head>
<body>
    <header class="w-100">
        <nav class="h-100">
            <div class="logo-header position-absolute top-50 start-50 translate-middle ">
                <a  href="<?= base_url() ?>index.php/home/"><img class="h-100 object-fit-cover " src="<?= base_url() ?>assets/img/logo/logo-header.webp"
                    alt="Camila Mueblerias"></a>
            </div>
            <div class="social-media position-absolute top-50 end-0 translate-middle-y d-none d-lg-flex">
                <span><i class="bi bi-facebook fs-4 pe-3"></i></span>
                <span><i class="bi bi-instagram fs-4 pe-2"></i></span>
            </div>
            <div class="secciones d-flex align-items-center text-center" style=" background-color: transparent;">
                <div class="menu position-relative d-inline-block position-absolute top-50 bottom-25  start-0 ms-5">
                    <button style="background-color: transparent; color:#fff;"
                        class="menu-button  pe-4 border border-0 d-none d-lg-block " onclick="toggleMenu()">Categorias
                        <i id="menu-icon" class="bi bi-chevron-down" style="font-size:12px;"></i>
                    </button>
                    <div class="menu-content z-3 position-absolute justify-content-center rounded " id="myDropdown">
                        <a href="#" onclick="showCategory('recamaras');">Recamaras</a>
                        <div class="subdropdown rounded-end z-3 position-absolute" id="subdropdown-recamaras">
                            <div class="seccion-1">
                                <span><a href="#" onclick="separador('CO')">Colchones</a></span>
                                <span><a href="#" onclick="separador('BA')">Bases Cama</a></span>
                                <span><a href="#" onclick="separador('BU')">Buros</a></span>
                                <span><a href="#" onclick="separador('RO')">Roperos</a></span>
                                <span><a href="#" onclick="separador('CA')">Cabeceras</a></span>
                                <span><a href="#" onclick="separador('RE')">Recamaras</a></span>
                            </div>
                        </div>
                        <a href="#" onclick="showCategory('cocinas');">Cocinas</a>
                        <div class="subdropdown rounded-end position-absolute" id="subdropdown-cocinas">
                            <div class="seccion-1">
                                <span><a href="#" onclick="separador('COM')">Comedores</a></span>
                                <span><a href="#" onclick="separador('SI')">Sillas</a></span>
                                <span><a href="#" onclick="separador('VI')">Vitrinas</a></span>
                            </div>
                        </div>
                        <a href="#" onclick="showCategory('salas');">Salas</a>
                        <div class="subdropdown rounded-end position-absolute" id="subdropdown-salas">
                            <div class="seccion-1">
                                <span><a href="#" onclick="separador('SCA')">Sofá Camas</a></span>
                                <span><a href="#" onclick="separador('SA')">Sala Modular</a></span>
                                <span><a href="#" onclick="separador('SO')">Sofas</a></span>
                            </div>
                        </div>
                        <a href="#" onclick="showCategory('electrodomesticos');">Electrodomesticos</a>
                        <div class="subdropdown rounded-end position-absolute" id="subdropdown-electrodomesticos">
                            <div class="seccion-1">
                                <span><a class="rounded" href="#" onclick="separador('CO')">Estufas</a></span>
                                <span><a href="#" onclick="separador('MI')">Microondas</a></span>
                                <span><a href="#" onclick="separador('LI')">Licuadoras</a></span>
                                <span><a href="#" onclick="separador('PA')">Parrillas</a></span>
                                <span><a href="#" onclick="separador('SE')">Secadoras</a></span>
                                <span><a href="#" onclick="separador('LAV')">Lavadoras</a></span>

                            </div>
                            <div class="seccion-2">
                                <span><a href="#" onclick="separador('REF');">Refrigerador</a></span>
                            </div>
                        </div>
                        <a href="#" onclick="showCategory('electronica');">Electronica</a>
                        <div class="subdropdown rounded-end position-absolute" id="subdropdown-electronica">
                            <div class="seccion-1">
                                <span><a href="#" onclick="separador('CE')">Celulares</a></span>
                                <span><a href="#" onclick="separador('TA')">Tablets</a></span>
                                <span><a href="#" onclick="separador('LA')">Laptops</a></span>
                                <span><a href="#" onclick="separador('TE')">Televisiones</a></span>
                                <span><a href="#" onclick="separador('BO')">Bocinas</a></span>
                            </div>
                        </div>
                        <a href="#" onclick="showCategory('motos');">Motos</a>
                    </div>
                </div>
            </div>
           
            <div class="buton">
            <button class="d-lg-none border border-0" style="background-color:transparent;" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-list position-absolute top-50 start-0 translate-middle z-1 ms-3" viewBox="0 0 16 16"
                    style="color:#fff;">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
        </div>
            <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between px-0">
                <ul class="navbar-nav fs-5 justify-content-evenly">
                    <li class="nav-item p-3 py-md-1"><a href="<?= base_url() ?>index.php/" class="nav-link"><i
                                class="bi bi-grid"></i> Inicio</a></li>
                    <li class="nav-item p-3 py-md-1">
                        <a href="#sidemenu" data-bs-toggle='collapse' class="nav-link"><i
                                class="bi bi-collection"></i> Categorias <i class="bi bi-chevron-down"></i></a>

                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="#" onclick="showCategory('recamaras');" class="nav-link linked">Recamaras</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="#" onclick="showCategory('cocinas');" class="nav-link linked">Cocinas</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="#" onclick="showCategory('salas');" class="nav-link linked">Salas</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="#" onclick="showCategory('electrodomesticos');"
                                    class="nav-link linked">Electrodomesticos</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="#" onclick="showCategory('electronica');"
                                    class="nav-link linked">Electronica</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="#" onclick="showCategory('motos');" class="nav-link linked">Motos</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item p-3 py-md-1">
                        <a href="#sideservicios" data-bs-toggle='collapse' class="nav-link"><i
                                class="bi bi-plug"></i>Servicios <i class="bi bi-chevron-down"></i></a>
                        <ul class="nav collapse flex-column" id="sideservicios" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a class="nav-link disabled"><i class="bi bi-truck"> Entrega en Domicilio</i></a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sideservicios" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a class="nav-link disabled"><i class="bi bi-shop"> Entrega en Tienda</i></a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="redes d-lg-none py-3">
                    <a href="https://www.facebook.com/profile.php?id=100054430302386" target="_blank"><i
                            class="bi bi-facebook px-2  fs-2"></i></a>
                    <a href="https://www.instagram.com/camilamuebleriasgto/" target="_blank"><i
                            class="bi bi-instagram px-2  fs-2"></i></a>
                </div>
            </div>
        </div>
        </nav>
    </header>
    <main>
        <section class="carousel">
            <div id="hero-carousel" class="carousel slide z-0 carousel-hero" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner rounded-0">
                    <div class="carousel-item active c-item " data-bs-interval="5000">
                        <img src="<?= base_url() ?>assets/img/index/c-image1.webp"
                            class="d-block w-100 c-image object-fit-cover" alt="recamaras">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Ofreciendo amor a los tuyos</h5>
                        </div>
                    </div>
                    <div class="carousel-item c-item " data-bs-interval="3000">
                        <img src="<?= base_url() ?>assets/img/index/c-image2.webp"
                            class="d-block w-100 c-image object-fit-cover" alt="salas">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Crea un hogar que refleje tu personalidad</h5>
                        </div>
                    </div>
                    <div class="carousel-item c-item ">
                        <img src="<?= base_url() ?>assets/img/index/c-image3.webp"
                            class="d-block w-100 c-image object-fit-cover" alt="cocinas">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Transforma tu espacio, transforma tu vida</h5>
                        </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        <section class="carousel-products h-100 w-100">
            <div class="caption d-flex justify-content-center w-100 mt-3 mb-3">
                <h4 style="font-weight:bold;">¡Lo mejor para ti!</h4>
            </div>
            
            <div class="carousel rounded d-flex justify-content-center ">
                <div id="carouselExample1" class="carousel carousel-multiple-items carouseluno " style="background-color:white;">
                    <div class="carousel-inner inner ">
                        <div class="carousel-item active produ">
                            <div class="card-produ ">
                                <div class="img-wrapper rounded-top">
                                    <img src="<?= base_url() ?>assets/img/index/carousel-laptop.webp" alt="Laptop">
                                </div>
                                <div class="card-body ">
                                    <h6 class="card-title">$10,999</h6>
                                    <p class="card-text">Laptop HP 14-DK1032WM / RYZEN 3-3250U</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/carousel-samsung04.webp" alt="Samsung">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title">$4,499</h6>
                                    <p class="card-text">Samsung 04 core 128gb</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/carousel-sillaoficina.webp" alt="Silla Oficina">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title ">$1,499</h6>
                                    <p class="card-text ">Silla Ejecutiva Oficina Ergonomica</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/carousel-iphone11.webp" alt="Iphone">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title">$6,499</h6>
                                    <p class="card-text ">Apple Iphone 11 64gb</p>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/carousel-echo.webp" alt="Echo dot">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title">$899</h6>
                                    <p class="card-text">Amazon Echo Dot 5ta Generación Negro</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/" alt="...">
                                </div>
                                <div class="card-body ">
                                    <h6 class="card-title"></h6>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/" alt="...">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title"></h6>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/" alt="...">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title"></h6>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev previus z-0" type="button" data-bs-target="#carouselExample1"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon iconn z-0" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next nextt z-0" type="button" data-bs-target="#carouselExample1"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon iconn z-0" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="d-flex justify-content-center w-100 mt-4">
                <div class="banner-electronica" >
                    <img class="object-fit-cover w-100 h-100" onclick="showCategory('electronica')" src="<?= base_url() ?>assets/img/index/banner-electronica1.webp" alt="electronica">
                </div>
            </div>
        </section>
        <section class="section-cards h-100 w-100">
            <div class="w-100 d-flex justify-content-center">
                <div class="row rou d-flex jusitfy-items-around " style="max-width:100%">
                    <div class="col-xs-12 col-sm-12 col-md-4 col-log-4">
                        <div class="card card-1">
                            <div class="tittle d-flex justify-content-center">
                            <h5 class="pt-3">PANTALLAS</h5>
                            </div>
                            <div class="image-card rounded-bottom">
                                <a onclick="separador('TE')" ><img class="object-fit-contain" src="<?= base_url() ?>assets/img/index/card-pantallas.webp" alt="motos"></a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-log-4">
                        <div class="card card-2">
                            <div class="tittle d-flex justify-content-center">
                            <h5 class="pt-3">COLCHONES</h5>
                            </div>
                            <div class="image-card rounded-bottom">
                               <a onclick="separador('CO')"><img class="object-fit-contain" src="<?= base_url() ?>assets/img/index/card-colchones.webp" alt="colchones"></a>
                            </div>
                            <div class="div"></div>

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-log-4">
                        <div class="card card-3">
                            <div class="tittle d-flex justify-content-center">
                            <h5 class="pt-3">MOTOS</h5>
                            </div>
                            <div class="image-card rounded-bottom">
                                <a onclick="showCategory('motos')"><img class="object-fit-contain" src="<?= base_url() ?>assets/img/index/card-motos.webp" alt="motos"></a>
                            </div>
                            <div class="div"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="carosuel-electrodomesticos ">
            <div class="d-flex justify-content-center">
                <div class="caption d-flex justify-content-start w-75 mt-3">
                    <h4 style="border-bottom:1px solid #44444467;" class="w-100 ps-3 pb-1">Línea Blanca</h4>
                </div>
                
            </div>
            <div class="carousel d-flex justify-content-center w-100 pb-4 ">
                <div id="carouselExample2" class="carousel carousel-multiple-items carouseluno " style="background-color:white;">
                    <div class="carousel-inner inner ">
                        <div class="carousel-item active produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/carousel-lavadora.webp" alt="Lavadora">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title">$6,999</h6>
                                    <p class="card-text">Lavadora Winia Automática 18 Kg</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/carousel-microondas.webp" alt="Microondas">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title">$2,499</h6>
                                    <p class="card-text">Microondas Chef Mexicano Daewoo</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/carousel-licuadora.webp" alt="Licuadora">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title ">$3,499</h6>
                                    <p class="card-text ">Licuadora Americana 2 </p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/carousel-secadora.webp" alt="Secadora">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title">$11,999</h6>
                                    <p class="card-text ">Secadora Automatica LG 19kg</p>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/carousel-parrilla.webp" alt="Echo dot">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title">$8,999</h6>
                                    <p class="card-text">Parrilla 6 quemadores</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/" alt="...">
                                </div>
                                <div class="card-body ">
                                    <h6 class="card-title"></h6>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/" alt="...">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title"></h6>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item produ">
                            <div class="card-produ">
                                <div class="img-wrapper">
                                    <img src="<?= base_url() ?>assets/img/index/" alt="...">
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title"></h6>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev previus z-0" type="button" data-bs-target="#carouselExample2"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon iconn z-0" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next nextt z-0" type="button" data-bs-target="#carouselExample2"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon iconn z-0" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    </main>
    <div id="about" class="about justify-content-center " style="width:100%; background-color: #EFEFEF">
                <div class="father  d-flex justify-content-center">
                    <div class="row mt-1 w-75 ">

                        <article class="text-center col-xs-6 col-sm-6 col-md-3 ">
                            <i class="bi bi-clipboard2-check fs-2"></i>
                            <span>
                                <p class="fs-6 " style="font-weight: ;">Calidad y Garantía</p>
                            </span>
                            <span>
                                <p></p>
                            </span>
                        </article>
                        <article class="text-center col-xs-6 col-sm-6 col-md-3">
                            <i class="bi bi-truck fs-2"></i>
                            <span>
                                <p class="fs-6 " style="font-weight: ;">Entrega a domicilio</p>
                            </span>
                            <span>
                                <p></p>
                            </span>
                        </article>
                        <article class="text-center  col-xs-6 col-sm-6 col-md-3 ">
                            <i class="bi bi-person-check fs-2"></i>
                            <span>
                                <p class="fs-6" style="font-weight: ;">Atención al cliente</p>
                            </span>
                            <span>
                                <p></p>
                            </span>
                        </article>
                        <article class="text-center  col-xs-6 col-sm-6 col-md-3">
                            <i class="bi bi-lock fs-2"></i>
                            <span>
                                <p class="fs-6 " style="font-weight:;">Compra segura</p>
                            </span>
                            <span>
                                <p></p>
                            </span>
                        </article>
                    </div>
                </div>
            </div>
    <footer class="d-block justify-content-center align-middle w=100" style="height: 15vh;  background-color:#FF7216;">
        <div class="ctn-f-f w=100" style="height:20%;">
        </div>
        <div class="ctn-f w=100 d-flex justify-content-center" style="height:20%">
            <h6 class="text-white" style="font-size:11px;">Derechos Reservados &copy;Camila Mueblerias 2023</h6>
        </div>
        <div class="ctn-f-s w=100 d-flex justify-content-center" style="height:25%;">
            <h6 class="text-white" style="font-size:11px;">Tarimoro, Guanajuato Mexico.</h6>
        </div>
        <div class="ctn-f-user w=100 d-flex justify-content-end" style="height:30%;">
            <button class="border border-0" style="background-color:transparent;" onclick="login()"><i
                    class="bi bi-shield-fill px-2  fs-6" style="color:white;"></i></button>
        </div>
        <div class="ctn-f-free w=100" style="height:3%;"></div>
    </footer>
<script src="<?= base_url() ?>assets/JQuery/jquery.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src="<?= base_url() ?>assets/js/redirection/baseurl.js"></script>
<script src="<?= base_url() ?>assets/js/menu/menu.js"></script>
<script src="<?= base_url() ?>assets/js/carousel/carousel.js"></script>
<script src="<?= base_url() ?>assets/js/vistas/index.js"></script>
</body>
</html>