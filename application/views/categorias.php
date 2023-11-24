<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/categories/category.css">
    <title id="titulo"></title>
</head>
<body>
    <nav id="sticky-nav" class="position-absolute w-100 d-flex justify-content-around z-3">
        <div class="secciones d-flex align-items-center text-center" style=" background-color: transparent;">
            <div class="categorias" style="width:44%;">
                <div class="menu position-relative d-inline-block position-absolute top-0 start-0 ms-5">
                    <button style="background-color: transparent; color:#fff;"class="menu-button mt-5 pe-4 border border-0 d-none d-lg-block " onclick="toggleMenu()">Categorias
                        <i id="menu-icon"  class="bi bi-chevron-down"></i>
                    </button>
                    <div class="menu-content z-3 position-absolute justify-content-center rounded" id="myDropdown">
                        <a href="<?= base_url() ?>index.php/principal/recamaras">Recamaras</a>
                        <div class="subdropdown rounded-end z-3 position-absolute" id="subdropdown-recamaras">
                            <div class="seccion-1">
                                <span><a href="<?= base_url() ?>index.php/secciones/colchones">Colchones</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/basescama">Bases Cama</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/buros">Buros</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/roperos">Roperos</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/cabeceras">Cabeceras</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/recamarasS">Recamaras</a></span>
                            </div>
                        </div>
                        <a href="<?= base_url() ?>index.php/principal/cocinas">Cocinas</a>
                        <div class="subdropdown rounded-end position-absolute" id="subdropdown-cocinas">
                            <div class="seccion-1">
                                <span><a href="<?= base_url() ?>index.php/secciones/comedores">Comedores</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/sillas">Sillas</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/vitrinas">Vitrinas</a></span>
                            </div>
                        </div>
                        <a href="<?= base_url() ?>index.php/principal/salas">Salas</a>
                        <div class="subdropdown rounded-end position-absolute" id="subdropdown-salas">
                            <div class="seccion-1">
                            <span><a href="<?= base_url() ?>index.php/secciones/sofacama">Sofá Camas</a></span>
                            <span><a href="<?= base_url() ?>index.php/secciones/salamodular">Sala Modular</a></span>
                            <span><a href="<?= base_url() ?>index.php/secciones/sofas">Sofas</a></span>
                            </div>
                        </div>
                        <a href="<?= base_url() ?>index.php/principal/electrodomesticos">Electrodomesticos</a>
                        <div class="subdropdown rounded-end position-absolute" id="subdropdown-electrodomesticos">
                            <div class="seccion-1">
                                <span><a class="rounded" href="<?= base_url() ?>index.php/secciones/estufas">Estufas</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/microondas">Microondas</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/licuadoras">Licuadoras</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/parrillas">Parrillas</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/secadoras">Secadoras</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/lavadoras">Lavadoras</a></span>

                            </div>
                            <div class="seccion-2">
                                <span><a href="<?= base_url() ?>index.php/secciones/refrigerador">Refrigerador</a></span>
                            </div>
                        </div>
                        <a href="<?= base_url() ?>index.php/principal/electronica">Electronica</a>
                        <div class="subdropdown rounded-end position-absolute" id="subdropdown-electronica">
                            <div class="seccion-1">
                                <span><a href="<?= base_url() ?>index.php/secciones/telefonos">Celulares</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/tablets">Tablets</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/laptop">Laptops</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/televisiones">Televisiones</a></span>
                                <span><a href="<?= base_url() ?>index.php/secciones/bocinas">Bocinas</a></span>
                            </div>
                        </div>
                        <a href="<?= base_url() ?>index.php/principal/motos">Motos</a>
                    </div>    
                </div>
            </div>
        </div>
        <div class="buton ">
            <button class="d-lg-none border border-0"  style="background-color:transparent;"type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list position-absolute top-50 start-0 translate-middle z-1 ms-3" viewBox="0 0 16 16" style="color:#fff;">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
        </div>
        <div class="logo position-absolute top-50 start-50 translate-middle d-flex justify-content-center" style="height:100%; background-color: transparent; ">
            <a href="<?= base_url() ?>index.php/principal/"><img  class="py-1 object-fit-cover" style="height: 100%;" src="<?= base_url() ?>public/img/Logo-white.png"></a>
        </div>
        <div class="social-media d-none d-lg-flex position-absolute top-50 end-0" >
            <a  href="https://www.facebook.com/profile.php?id=100054430302386" target="_blank"><i class="bi bi-facebook px-2  fs-4" style="color:white;"></i></a>
            <a href="https://www.instagram.com/camilamuebleriasgto/" target="_blank"><i class="bi bi-instagram px-2  fs-4 pe-4 " style="color:white;"></i></a>
        </div>
        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between px-0">
                <ul class="navbar-nav fs-5 justify-content-evenly">
                    <li class="nav-item p-3 py-md-1"><a href="<?= base_url() ?>index.php/principal/" class="nav-link"><i class="bi bi-grid"></i> Inicio</a></li>
                    <li class="nav-item p-3 py-md-1">
                        <a href="#sidemenu" data-bs-toggle='collapse' class="nav-link"><i class="bi bi-collection"></i>Categorias <i class="bi bi-chevron-down"></i></a>

                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/recamaras" class="nav-link linked">Recamaras</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/cocinas" class="nav-link linked">Cocinas</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/salas" class="nav-link linked">Salas</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/electrodomesticos" class="nav-link linked">Electrodomesticos</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/electronica" class="nav-link linked">Electronica</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/motos" class="nav-link linked">Motos</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item p-3 py-md-1">
                        <a href="#sideservicios" data-bs-toggle='collapse' class="nav-link"><i class="bi bi-plug"></i>Servicios <i class="bi bi-chevron-down"></i></a>
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
                    <a href="https://www.facebook.com/profile.php?id=100054430302386" target="_blank"><i class="bi bi-facebook px-2  fs-2"></i></a>
                    <a href="https://www.instagram.com/camilamuebleriasgto/" target="_blank"><i class="bi bi-instagram px-2  fs-2"></i></a>
                </div>
            </div>
        </div>
    </nav> 
    <main class="d-flex justify-content-center" id="mainget">

    </main>
    <footer class="d-block justify-content-center align-middle w=100" style="height: 12vh;  background-color:#FF7216;">
        <div class="ctn-f-f w=100" style="height:20%;">
        <button onclick="separador('CE');">CELULAR</button>
        </div>
        <div class="ctn-f w=100 d-flex justify-content-center" style="height:20%">
            <h6 class="text-white" style="font-size:11px;">Derechos Reservados &copy;Camila Mueblerias 2023</h6>
        </div>
        <div class="ctn-f-s w=100 d-flex justify-content-center" style="height:25%;">
            <h6 class="text-white" style="font-size:11px;">Tarimoro, Guanajuato Mexico.</h6>
        </div>
        <div class="ctn-f-user w=100 d-flex justify-content-end" style="height:30%;">
            <button class="border border-0" style="background-color:transparent;" onclick=login()><i
                    class="bi bi-shield-fill px-2  fs-6" style="color:white;"></i></button>
        </div>
        <div class="ctn-f-free w=100" style="height:3%;"></div>
    </footer>

<script src="<?= base_url() ?>public/jquery/jquery.js"></script>
<script src="<?= base_url() ?>public/js/Reload/category.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>