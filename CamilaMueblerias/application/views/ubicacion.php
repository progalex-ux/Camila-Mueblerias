<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/ubicacion.css">
    <title>Camila Mueblerias</title>
</head>

<body>
<header>
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
        <div class="secciones">
            <div class="categorias">
                <div class="menu">
                    <div><button class="menu-button" onclick="toggleMenu()">Categorias<i class="bi bi-chevron-down"></i></button></div>
                    <div class="menu-content" id="myDropdown">
                        <a href="<?= base_url() ?>index.php/principal/recamaras">Recamaras</a>
                        <a href="<?= base_url() ?>index.php/principal/salas">Salas</a>
                        <a href="<?= base_url() ?>index.php/principal/cocinas">Cocinas</a>
                        <a href="<?= base_url() ?>index.php/principal/electrodomesticos">Electrodomesticos</a>
                        <a href="<?= base_url() ?>index.php/principal/electronica">Electronica</a>
                        <a href="<?= base_url() ?>index.php7principal/motos">Motos</a>
                    </div>
                </div>
            </div>
            <a href="<?= base_url() ?>index.php/principal/ubicacion">Ubicacion</a>
        </div>
        <div class="logo">
            <a href="<?= base_url() ?>index.php/principal/"><img src="<?= base_url() ?>public/img/Logo-original.png" alt=""></a>

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
                                <a href="<?= base_url() ?>index.php/principal/recamaras" class="nav-link">Recamaras</a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sidemenu" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="<?= base_url() ?>index.php/principal/cocinas" class="nav-link">Cocinas</a>
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
                        <a href="#sideservicios" data-bs-toggle='collapse' class="nav-link"><i class="bi bi-plug"></i>
                            Servicios <i class="bi bi-chevron-down"></i></a>

                        <ul class="nav collapse flex-column" id="sideservicios" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="" class="nav-link disabled"><i class="bi bi-truck"> Entrega en
                                        Domicilio</i></a>
                            </li>
                        </ul>
                        <ul class="nav collapse flex-column" id="sideservicios" data-base-parent="#menuLateral">
                            <li class="nav-item">
                                <a href="" class="nav-link disabled"><i class="bi bi-shop"> Entrega en
                                        Tienda</i></a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="redes d-lg-none py-3">
                    <a href="https://www.facebook.com/profile.php?id=100054430302386" target="_blank"><i
                            class="bi bi-facebook px-2  fs-2"></i></a>
                    <a href="https://www.instagram.com/camilamuebleriasgto/" target="_blank"><i
                            class="bi bi-instagram px-2  fs-2"></i></a>
                    <a href="<?= base_url() ?>index.php/admin/" target="_blank"><i
                            class="bi bi-person-circle px-2  fs-2"></i></a>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div class="container">
            <iframe class='mapa'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239640.95118958634!2d-101.13314989251425!3d20.20111427214437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cc8d512be2b31%3A0x7c1d1f19516c54c5!2sAldama%204%2C%20Zona%20Centro%2C%2038700%20Tarimoro%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1695930610968!5m2!1ses-419!2smx"
                 style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </main>
    <script>
    function toggleMenu() {
        var dropdown = document.getElementById("myDropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }
    window.onclick = function(event) {
        if (!event.target.matches('.menu-button')) {
            var dropdown = document.getElementById("myDropdown");
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        }
    }
    </script>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>