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
    <div class="sidebar close">

        <ul class="nav-links">
            <li>
                <a href="<?= base_url() ?>index.php/principal/">
                    <i class='bx bx-grid-alt'></i>
                    <span class="link_name">Inicio</span>
                </a>

            </li>
            <li>
                <div class="iocn-link">
                    <a href="#">
                        <i class='bx bx-collection'></i>
                        <span class="link_name">Categorias</span>
                    </a>
                    <i class='bx bxs-chevron-down arrow'></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link_name" href="#">Categorias</a></li>
                    <li><a href="<?= base_url() ?>index.php/principal/cocinas">Cocina</a></li>
                    <li><a href="<?= base_url() ?>index.php/principal/salas">Salas</a></li>
                    <li><a href="<?= base_url() ?>index.php/principal/recamaras">Recamaras</a></li>
                    <li><a href="<?= base_url() ?>index.php/principal/electronica">Electronica</a></li>
                    <li><a href="<?= base_url() ?>index.php/principal/electrodomesticos">Electrodomesticos</a></li>
                    <li><a href="<?= base_url() ?>index.php/principal/motos">Motos</a></li>
                </ul>
            </li>
            <li>
                <div class="iocn-link">
                    <a href="#">
                        <i class='bx bx-plug'></i>
                        <span class="link_name">Servicios</span>
                    </a>
                    <i class='bx bxs-chevron-down arrow'></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link_name" href="#">Servicios</a></li>
                    <li><a href="#">Entrega a domicilio</a></li>
                    <li><a href="#">Entrega en tienda</a></li>
                </ul>
            </li>

    </div>
    <nav class="navbar navbar-white" id="sticky-nav">
        <div class="container-fluid">
            <div class="logo">
                <img src="<?= base_url() ?>public/img/Logo-original.png" alt="Bootstrap" class="logo-icon">
            </div>
            <div class="menu">
                <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral">
                    <span class='navbar-toggler-icon'></span>
                </button>
                <section class="offcanvas offcanvas-start" id="menuLateral" tabindex="-1">
                    <div class="offcanvas-header" data-bs-theme="white">
                        <h5></h5>
                        <button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div class="offcanvas-body d-flex flex-column justify-content-between px-0">
                        <ul class="navbar-nav fs-5 justify-content-evenly">
                            <li class="nav-item p-3 py-md-1"><a href="<?= base_url() ?>index.php/principal/"
                                    class="nav-link"><i class="bi bi-grid"></i> Inicio</a></li>
                            <li class="nav-item p-3 py-md-1">
                                <a href="#sidemenu" data-bs-toggle='collapse' class="nav-link"><i
                                        class="bi bi-collection"></i> Categorias <i class="bi bi-chevron-down"></i></a>

                                <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                                    <li class="nav-item">
                                        <a href="<?= base_url() ?>index.php/principal/recamaras"
                                            class="nav-link">Recamaras</a>
                                    </li>
                                </ul>
                                <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                                    <li class="nav-item">
                                        <a href="<?= base_url() ?>index.php/principal/cocinas"
                                            class="nav-link">Cocinas</a>
                                    </li>
                                </ul>
                                <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                                    <li class="nav-item">
                                        <a href="<?= base_url() ?>index.php/principal/salas" class="nav-link">Salas</a>
                                    </li>
                                </ul>
                                <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                                    <li class="nav-item">
                                        <a href="<?= base_url() ?>index.php/principal/electrodomesticos"
                                            class="nav-link">Electrodomesticos</a>
                                    </li>
                                </ul>
                                <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                                    <li class="nav-item">
                                        <a href="<?= base_url() ?>index.php/principal/electronica"
                                            class="nav-link">Electronica</a>
                                    </li>
                                </ul>
                                <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                                    <li class="nav-item">
                                        <a href="<?= base_url() ?>index.php/principal/motos" class="nav-link">Motos</a>
                                    </li>
                                </ul>

                            </li>
                            <li class="nav-item p-3 py-md-1">
                                <a href="#sideservicios" data-bs-toggle='collapse' class="nav-link"><i
                                        class="bi bi-plug"></i> Servicios <i class="bi bi-chevron-down"></i></a>

                                <ul class="nav collapse flex-column" id="sideservicios" data-base-parent="#menuLateral">
                                    <li class="nav-item">
                                        <a href="" class="nav-link disabled"><i class="bi bi-truck"> Entrega en Domicilio</i></a>
                                    </li>
                                </ul>
                                <ul class="nav collapse flex-column" id="sideservicios" data-base-parent="#menuLateral">
                                    <li class="nav-item">
                                        <a href="" class="nav-link disabled"><i class="bi bi-shop"></i> Entrega en
                                            Tienda</a>
                                    </li>
                                </ul>
                            </li>
                            </li>
                        </ul>
                        <div class="redes d-lg-none py-3 ">
                            <a href="https://www.facebook.com/profile.php?id=100054430302386" target="_blank"><i
                                    class="bi bi-facebook px-2  fs-2"></i></a>
                            <a href="https://www.instagram.com/camilamuebleriasgto/" target="_blank"><i
                                    class="bi bi-instagram px-2  fs-2"></i></a>
                        </div>
                    </div>
            </div>

            </section>
        </div>
        </div>
    </nav>
    <section class="home-section">
        <div class="home-content d-none d-md-block">
            <header>
                <div class="icon">
                    <i class='bx bx-menu'></i>
                </div>
                <div class="logo">
                    <a href="<?= base_url() ?>index.php/principal/"><img
                            src="<?= base_url() ?>public/img/Logo-original.png" alt=""></a>
                </div>
            </header>
        </div>
        <div class="content">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/motos/cuatri.jpg" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-price">$42,990</h5>
                            <p class="custom-card-tittle">Colchon King Zise</p>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/motos/cuatri2.jpg" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-price">$42,990</h5>
                            <p class="custom-card-tittle">Base Matrimonial</p>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/motos/hondadio.jpg" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-price">$42,990</h5>
                            <p class="custom-card-tittle">Colchon King Zise</p>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/motos/cuatri.jpg" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-price">$42,990</h5>
                            <p class="custom-card-tittle">Base Matrimonial</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </section>

    <script>
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e) => {
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("showMenu");
        });
    }
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });
    </script>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>