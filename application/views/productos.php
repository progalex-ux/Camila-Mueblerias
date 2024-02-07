<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/menu/menu.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/vistas/productos.css">
    <link rel="icon" href="<?= base_url() ?>assets/img/logo/logo.icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/bootstrap/css/bootstrap.min.css">
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
            <a class="position-absolute top-50 start-0 translate-middle-y d-md-block d-lg-none"
                data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i class="bi bi-list fs-1" style="color:white;"></i>
            </a>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main class="d-flex w-100" style="min-height:100vh;">
        <aside class="z-1 d-none d-lg-block" style="width: 20%; height: 100vh; border-right: 1px solid rgba(0, 0, 0, 0.13);">
            <div class="sidebar-tittle d-flex ps-2 breadcrumb" style="border-bottom: 1px solid rgba(0, 0, 0, 0.13);">
                <i class="bi bi-dash-circle fs-6 pt-4"></i>&nbsp<h6 class="pt-4"><span id="categorylink"></span> / <a href="<?= base_url() ?>index.php/secciones/bocinas" class="link-offset-2 link-underline link-underline-opacity-0 " style="color:black; font-size:13px" id="product"></a></h6>
                </div>
                <div class="categorias-tecno d-flex justify-content-start" style="width:100%; height:15%;">
                    <ul class="d-flex flex-column " id="links">
                        
                    </ul>
                </div>
        </aside>       
        <section > 
            <div class="container-fluid">
                <div class="row" id="tarjetas" style="max-width: 100%;">
                    
                    
                </div>
            </div>
        </section>
    </main>

    <footer class="position-static d-block justify-content-center align-middle w-100 z-3" style="height:15vh; top:94px;  background-color:#FF7216;">
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
<scipt src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src="<?= base_url() ?>assets/js/redirection/baseurl.js"></script>
<script src="<?= base_url() ?>assets/js/menu/menu.js"></script>
<script src="<?= base_url() ?>assets/js/vistas/productos.js"></script>    
</body>
</html>