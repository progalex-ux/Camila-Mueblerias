<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/home.css">
    <title>Camila Mueblerias</title>
</head>

<body>

    <header>
        <a href="https://www.facebook.com/profile.php?id=100054430302386" target="_blank"><i
                class="bi bi-facebook px-2  fs-5"></i></a>
        <a href="https://www.instagram.com/camilamuebleriasgto/" target="_blank"><i
                class="bi bi-instagram px-2  fs-5"></i></a>
    </header>
    <nav id="sticky-header" class="position-relative">
        <div class="secciones">
            <div class="categorias">
                <div class="menu ">
                    <button class="menu-button" onclick="toggleMenu()">Categorias
                        <i id="menu-icon"  class="bi bi-chevron-down"></i>
                    </button>
                    <div class="menu-content" id="myDropdown">

                        <a href="">Recamaras</a>
                        <div class="subdropdown" id="subdropdown-recamaras">
                            <div class="seccion-1">
                                <span><a href="<?= base_url() ?>index.php/principal/colchones">Colchones</a></span>
                                <span><a href="<?= base_url() ?>index.php/principal/buros">Buros</a></span>
                                <span><a href="<?= base_url() ?>index.php/principal/buros">Cabeceras</a></span>
                            </div>
                        </div>
                        <a href="<?= base_url() ?>index.php/principal/cocinas">Cocinas</a>
                        <div class="subdropdown" id="subdropdown-cocinas">
                            <div class="seccion-1">
                                <span><a href="">Cocinas</a></span>
                                <span><a href="<?= base_url() ?>">Alacenas</a></span>
                            </div>
                        </div>
                        <a href="<?= base_url() ?>index.php/principal/electrodomesticos">Salas</a>
                        <div class="subdropdown" id="subdropdown-salas">
                            <div class="seccion-1">
                                <span><a href="<?= base_url() ?>index.php/principal/colchones">Esquinera</a></span>
                                <span><a href="<?= base_url() ?>index.php/principal/colchones">Esquinera</a></span>
                            </div>
                        </div>
                        <a href="<?= base_url() ?>index.php/principal/electrodomesticos">Electrodomesticos</a>
                        <div class="subdropdown" id="subdropdown-electrodomesticos">
                            <div class="seccion-1">
                                <span><a href="<?= base_url() ?>index.php/principal/colchones">Licuadoras</a></span>
                                <span><a href="<?= base_url() ?>index.php/principal/buros">Secadoras</a></span>
                                <span><a href="<?= base_url() ?>index.php/principal/buros">Lavadora</a></span>
                            </div>
                        </div>
                        <a href="<?= base_url() ?>index.php/principal/electronica">Electronica</a>
                        <div class="subdropdown" id="subdropdown-electronica">
                            <div class="seccion-1">
                                <span><a href="<?= base_url() ?>index.php/principal/colchones">Computadoras</a></span>
                                <span><a href="<?= base_url() ?>index.php/principal/buros">Televisiones</a></span>
                                <span><a href="<?= base_url() ?>index.php/principal/buros">Telefonos</a></span>
                            </div>
                        </div>
                        <a href="<?= base_url() ?>index.php/principal/motos">Motos</a>

                    </div>
                    
                </div>
            </div>
        </div>
        <div class="buton">
            <button class="d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
        </div>
        <div class="logo">
            <a href="<?= base_url() ?>index.php/principal/"><img  class="py-1" src="<?= base_url() ?>public/img/Logo-white.png"
                    alt=""></a>
        </div>
        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between px-0">
                <ul class="navbar-nav fs-5 justify-content-evenly">
                    <li class="nav-item p-3 py-md-1"><a href="<?= base_url() ?>index.php/principal/" class="nav-link"><i
                                class="bi bi-grid"></i> Inicio</a></li>
                    <li class="nav-item p-3 py-md-1">
                        <a href="#sidemenu" data-bs-toggle='collapse' class="nav-link"><i class="bi bi-collection"></i>
                            Categorias <i class="bi bi-chevron-down"></i></a>

                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/recamaras"
                                    class="nav-link linked">Recamaras</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/cocinas"
                                    class="nav-link linked">Cocinas</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/salas" class="nav-link linked">Salas</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/electrodomesticos"
                                    class="nav-link linked">Electrodomesticos</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/electronica"
                                    class="nav-link linked">Electronica</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/motos" class="nav-link linked">Motos</a>
                            </li>
                        </ul>

                    </li>
                    <li class="nav-item p-3 py-md-1">
                        <a href="#sideservicios" data-bs-toggle='collapse' class="nav-link"><i
                                class="bi bi-plug"></i>Servicios <i class="bi bi-chevron-down"></i></a>

                        <ul class="nav collapse flex-column" id="sideservicios" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="" class="nav-link disabled"><i class="bi bi-truck"> Entrega en
                                        Domicilio</i></a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sideservicios" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="" class="nav-link disabled"><i class="bi bi-shop"> Entrega en Tienda</i></a>
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
    <main>
        <section>
            <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active c-item" data-bs-interval="5000">
                        <img src="<?= base_url() ?>public/img/recamaras/portada.webp" class="d-block w-100 c-image"
                            alt="item1">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Ofreciendo amor a los tuyos</h5>
                        </div>
                    </div>
                    <div class="carousel-item c-item" data-bs-interval="3000">
                        <img src="<?= base_url() ?>public/img/salas/portada.webp" class="d-block w-100 c-image"
                            alt="item2">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Crea un hogar que refleje tu personalidad</h5>
                        </div>
                    </div>
                    <div class="carousel-item c-item">
                        <img src="<?= base_url() ?>public/img/cocinas/portada.webp" class="d-block w-100 c-image"
                            alt="item3">
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
            </div>

            <div class="content">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div class="card">
                            <img src="<?= base_url() ?>public/img/salas/portada-s.webp" alt="Imagen">
                            <div class="custom-card-content">
                                <h5 class="custom-card-title">Salas</h5>
                                <a href="<?= base_url() ?>index.php/principal/salas"><button
                                        class='btn btn-light border'>Ver mas </button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div class="card">
                            <img src="<?= base_url() ?>public/img/recamaras/portada-r.webp" alt="Imagen">
                            <div class="custom-card-content">
                                <h5 class="custom-card-title">Recamaras</h5>
                                <a href="<?= base_url() ?>index.php/principal/recamaras"><button
                                        class='btn btn-light border'>Ver mas </button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div class="card">
                            <img src="<?= base_url() ?>public/img/cocinas/portada-c.webp" alt="Imagen">
                            <div class="custom-card-content">
                                <h5 class="custom-card-title">Cocinas</h5>
                                <a href="<?= base_url() ?>index.php/principal/cocinas"><button
                                        class='btn btn-light border'>Ver mas </button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div class="card">
                            <img src="<?= base_url() ?>public/img/electronica/portada.webp" alt="Imagen">
                            <div class="custom-card-content">
                                <h5 class="custom-card-title">Electronica</h5>
                                <a href="<?= base_url() ?>index.php/principal/electronica"><button
                                        class='btn btn-light border'>Ver mas </button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div class="card">
                            <img src="<?= base_url() ?>public/img/electrodomesticos/portada.webp" alt="Imagen">
                            <div class="custom-card-content">
                                <h5 class="custom-card-title">Electrodomesticos</h5>
                                <a href="<?= base_url() ?>index.php/principal/electrodomesticos"><button
                                        class='btn btn-light border'>Ver mas </button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div class="card">
                            <img src="<?= base_url() ?>public/img/motos/portada.webp" alt="Imagen">
                            <div class="custom-card-content">
                                <h5 class="custom-card-title">Motos</h5>
                                <a href="<?= base_url() ?>index.php/principal/motos"><button
                                        class='btn btn-light border'>Ver mas</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="ctn-f-f">
        </div>
        <div class="ctn-f">
            <h6>Copyright&copy;Camila Mueblerias 1973-2023</h6>
        </div>
        <div class="ctn-f-s">
            <h6>Tarimoro, Guanajuato Mexico.</h6>
        </div>
        <div class="ctn-f-user">
            <button onclick=login()><i class="bi bi-person-circle px-2  fs-6"></i></button>
        </div>
        <div class="ctn-f-free">

        </div>
    </footer>

    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
    <script src="<?= base_url() ?>public/js/home.js"></script>
    <script src="<?= base_url() ?>public/js/login.js"></script>
</body>

</html>