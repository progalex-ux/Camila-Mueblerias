<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Electronica | Camila Mueblerias</title>
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/selec.css">
</head>

<body>
<nav id="sticky-header" class="position-relative d-flex justify-content-around" style="height:100px; background-color:#EE7323;" >
        <div class="secciones d-flex align-items-center text-center" style=" background-color: transparent;">
            <div class="categorias" style="width:44%;">
                <div class="menu position-relative d-inline-block">
                    <button style="background-color: transparent; color:#fff;"class="menu-button pt-4 pe-4 border border-0 d-none d-lg-block" onclick="toggleMenu()">Categorias
                        <i id="menu-icon"  class="bi bi-chevron-down"></i>
                    </button>
                    <div class="menu-content z-3 position-absolute justify-content-center" id="myDropdown">

                        <a href="">Recamaras</a>
                        <div class="subdropdown z-3 position-absolute" id="subdropdown-recamaras">
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
        <div class="buton" >
            <button class="d-lg-none border border-0"  style="background-color:transparent;"type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list"
                    viewBox="0 0 16 16" style="color:white;">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
        </div>
        <div class="logo d-flex justify-content-start " style="height:100%; background-color: transparent; width:55%;">
            <a href="<?= base_url() ?>index.php/principal/"><img  class="py-1 object-fit-cover" style="height: 100%;" src="<?= base_url() ?>public/img/Logo-white.png"
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
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="sidebar d-flex justify-content-start col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-white v-line">
                        <div id="sticky-sidebar"
                            class="sidebar  d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                                id="menu">

                                <li class="nav-item">
                                    <a href="<?= base_url() ?>index.php/principal/" class="nav-link align-middle px-0">
                                        <i class="bi-house fs-5"></i><span class="ms-1 d-none d-sm-inline">
                                            Inicio</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                        <span class="ms-1 d-none d-sm-inline"><i class="bi bi-collection fs-6"></i>
                                            Electronica</span></a>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="<?= base_url() ?>index.php/principal/cocinas"
                                                class="nav-link px-0"> <span
                                                    class="d-none d-sm-inline"></span>Celulares</a>
                                        </li>
                                    </ul>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="<?= base_url() ?>index.php/principal/salas" class="nav-link px-0">
                                                <span class="d-none d-sm-inline"></span>Tablets</a>
                                        </li>
                                    </ul>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="<?= base_url() ?>index.php/principal/recamaras"
                                                class="nav-link px-0"> <span
                                                    class="d-none d-sm-inline"></span>Laptops</a>
                                        </li>
                                    </ul>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="<?= base_url() ?>index.php/principal/electrodomesticos"
                                                class="nav-link px-0"> <span
                                                    class="d-none d-sm-inline"></span>Televisiones</a>
                                        </li>
                                    </ul>


                                </li>

                            </ul>
                            <hr>
                        </div>
                    </div>
                    <div class="col py-3">

                        <div class="content">
                        
                            <div class="botones">
                                <button class="btn btn-light border">Telefonos</button>
                                <button class="btn btn-light border">Tablets</button>
                                <button class="btn btn-light border">Laptops</button>
                                <button class="btn btn-light border">Televisiones</button>
                            </div>
                            <div class="row">

                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/electronica/celulares-portada.png"
                                            alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-title">Celulares</h5>
                                            <a href="<?= base_url() ?>index.php/secciones/celulares"><button
                                                    class='btn btn-light border'>Ver mas </button></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/electronica/tablet-portada.avif"
                                            alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-title">Tablets</h5>
                                            <a href="<?= base_url() ?>index.php/secciones/tablets"><button
                                                    class='btn btn-light border'>Ver mas </button></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/electronica/laptop.png" alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-title">Laptos</h5>
                                            <a href="<?= base_url() ?>index.php/secciones/laptop"><button
                                                    class='btn btn-light border'>Ver mas</button></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/electronica/tele.jpg" alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-title">Televisiones</h5>
                                            <a href="<?= base_url() ?>index.php/secciones/televisiones"><button
                                                    class='btn btn-light border'>Ver mas </button></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </main>
    <footer class="d-block justify-content-center align-middle w=100" style="height: 10vh;  background-color:#FF7216;">
        <div class="ctn-f-f w=100" style="height:20%;">
        </div>
        <div class="ctn-f w=100 d-flex justify-content-center" style="height:20%" >
            <h6 class="text-white" style="font-size:11px;">Derechos Reservados &copy;Camila Mueblerias 2023</h6>
        </div>
        <div class="ctn-f-s w=100 d-flex justify-content-center" style="height:20%;">
            <h6 class="text-white" style="font-size:11px;">Tarimoro, Guanajuato Mexico.</h6>
        </div>
        <div class="ctn-f-user w=100 d-flex justify-content-end" style="height:30%;">
            <button class="border border-0" style="background-color:transparent;" onclick=login()><i class="bi bi-shield-fill px-2  fs-6" style="color:white;"></i></button>
        </div>
        <div class="ctn-f-free w=100" style="height:3%;"></div>
    </footer>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
    <script src="<?= base_url() ?>public/js/login.js"></script>
    <script src="<?= base_url() ?>public/js/home.js"></script>
</body>

</html>