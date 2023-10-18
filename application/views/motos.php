<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Motos | Camila Mueblerias</title>
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/productos.css">
</head>

<body>
    <header id="sticky-header">
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
            <a href="<?= base_url() ?>index.php/principal/"><img src="<?= base_url() ?>public/img/Logo-white.png"
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
                <div class="redes d-lg-none py-3 d-sm-flex">
                    <a href="https://www.facebook.com/profile.php?id=100054430302386" target="_blank"><i
                            class="bi bi-facebook px-2  fs-2"></i></a>
                    <a href="https://www.instagram.com/camilamuebleriasgto/" target="_blank"><i
                            class="bi bi-instagram px-2  fs-2"></i></a>

                </div>
            </div>
        </div>
    </header>
    <main>
        <section >
            <div class="container-fluid">
                <div class="row flex-nowrap">
                <div class="sidebar col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-white v-line">
                        <div id="sticky-sidebar"
                            class="sidebar d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                                id="menu">
                                
                                <li class="nav-item">
                                    <a href="<?= base_url() ?>index.php/principal/" class="nav-link align-middle px-0">
                                        <i class="bi-house fs-5"></i><span
                                            class="ms-1 d-none d-sm-inline"> Inicio</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                        <span
                                            class="ms-1 d-none d-sm-inline"><i class="bi bi-collection fs-6"></i> Categorias</span></a>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="<?= base_url() ?>index.php/principal/cocinas"
                                                class="nav-link px-0"> <span
                                                    class="d-none d-sm-inline"></span>Cocinas</a>
                                        </li>
                                    </ul>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="<?= base_url() ?>index.php/principal/salas" class="nav-link px-0">
                                                <span class="d-none d-sm-inline"></span>Salas</a>
                                        </li>
                                    </ul>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="<?= base_url() ?>index.php/principal/recamaras"
                                                class="nav-link px-0"> <span
                                                    class="d-none d-sm-inline"></span>Recamaras</a>
                                        </li>
                                    </ul>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="<?= base_url() ?>index.php/principal/electrodomesticos"
                                                class="nav-link px-0"> <span
                                                    class="d-none d-sm-inline"></span>Electrodomesticos</a>
                                        </li>
                                    </ul>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="<?= base_url() ?>index.php/principal/electronica"
                                                class="nav-link px-0"> <span
                                                    class="d-none d-sm-inline"></span>Electronica</a>
                                        </li>
                                    </ul>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="<?= base_url() ?>index.php/principal/motos" class="nav-link px-0">
                                                <span class="d-none d-sm-inline"></span>Motos</a>
                                        </li>
                                    </ul>

                                </li>
                                <li>
                                    <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="bi bi-plug fs-5"></i><span
                                            class="ms-1 d-none d-sm-inline">Servicios</span> </a>
                                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="" class="nav-link px-0"> <span class="d-none d-sm-inline"><i
                                                        class="bi bi-truck"> Entrega en Domicilio</i></span> </a>
                                        </li>
                                    </ul>
                                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li>
                                            <a href="" class="nav-link px-0"> <span class="d-none d-sm-inline"><i
                                                        class="bi bi-shop"> Entrega en Tienda</i></span> </a>
                                        </li>
                                    </ul>

                                </li>
                            </ul>
                            <hr>
                        </div>
                        
                    </div>
                    <div class="col py-3">
                        <div class="content">
                            <div class="row" id="tarjetas">
                                

                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    <script src="<?= base_url() ?>public/jquery/jquery.js"></script>
    <script src="<?= base_url() ?>public/js/insert.js"></script>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
    
</body>

</html>