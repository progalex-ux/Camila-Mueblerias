<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Camila Mueblerias</title>
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/salas.css">
</head>

<body>
    <header>
        <div class="logo">
            <a href="<?= base_url() ?>index.php/principal/"><img src="<?= base_url() ?>public/img/Logo-original.png"
                    alt=""></a>
        </div>
    </header>
    <main>
        <section>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="sidebar col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-white">
                        <div id="sticky-sidebar"
                            class="sidebar d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                                id="menu">
                                <li class="nav-item list">
                                    <a href="">
                                        <i class="bi bi-list fs-4"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="<?= base_url() ?>index.php/principal/" class="nav-link align-middle px-0">
                                        <i class="fs-5 bi-house"></i> <span
                                            class="ms-1 d-none d-sm-inline">Inicio</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                        <i class="bi bi-collection fs-5"></i><span
                                            class="ms-1 d-none d-sm-inline">Categorias</span></a>
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
                                        <i class="bi bi-plug fs-5"></i> <span
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
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/motos/cuatri.jpg" alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-price">$42,990</h5>
                                            <p class="custom-card-tittle">Cuatrimoto dinamo 150cc</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/motos/cuatri.jpg" alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-price">$42,990</h5>
                                            <p class="custom-card-tittle">Cuatrimoto dinamo 150cc</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/motos/cuatri.jpg" alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-price">$42,990</h5>
                                            <p class="custom-card-tittle">Cuatrimoto dinamo 150cc</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/motos/cuatri.jpg" alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-price">$42,990</h5>
                                            <p class="custom-card-tittle">Cuatrimoto dinamo 150cc</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/motos/cuatri.jpg" alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-price">$42,990</h5>
                                            <p class="custom-card-tittle">Cuatrimoto dinamo 150cc</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/motos/cuatri.jpg" alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-price">$42,990</h5>
                                            <p class="custom-card-tittle">Cuatrimoto dinamo 150cc</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/motos/cuatri.jpg" alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-price">$42,990</h5>
                                            <p class="custom-card-tittle">Cuatrimoto dinamo 150cc</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <div class="card">
                                        <img src="<?= base_url() ?>public/img/motos/hondadio.jpg" alt="Imagen">
                                        <div class="custom-card-content">
                                            <h5 class="custom-card-price">$42,990</h5>
                                            <p class="custom-card-tittle">Cuatrimoto dinamo 150cc</p>
                                        </div>
                                    </div>
                                </div>
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
            <button onclick=login()><i class="bi bi-person-circle px-2  fs-5"></i></button>
        </div>

    </footer>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
    <script src="<?= base_url() ?>public/js/login.js"></script>
</body>

</html>