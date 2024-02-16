<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/admin/tarjetas.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="icon" href="<?= base_url() ?>assets/img/logo/logo.icon">
    <title>Admin | Camila Mueblerias</title>
</head>
<body>
<header class="d-flex" style="height:60px; ">
        <div class="logo" >
            <div class="ms-1" style="display:flex; align-items: center;"><a class="ms-2 icon-link icon-link-hover link-offset-2 link-underline link-underline-opacity-0" href="<?= base_url() ?>index.php/admin/"
                    style="color:black;"><i
                            class="bi bi-box-arrow-left fs-5" style="color:black;"></i></a> </div>

        </div>
        <div class="titulo d-flex justify-content-between" style="width:55%;">
            <div>
                <h1 style="color:#db600e;">Admin </h1>
            </div>
            
        </div>
        <div style="display:flex; align-items: center;">  
                <a href="<?= base_url() ?>index.php/admin/modificarTarjetas" class="btn btn-light custom-tooltip" data-bs-toggle="tooltip" data-placement="bottom" title="Modificar contenido">     
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.960 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Z M9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                        </svg>
                </a>
        </div>
    </header>
    <section >
        <div class="content d-flex justify-content-center">
             <div class="row ">
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card" style="height:360px">
                        <div class="image">
                            <img src="<?= base_url() ?>assets/img/admin/portada-s.webp" alt="Imagen">
                        </div>
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Salas </h5>
                            <a href="#"  class="btn btn-dark border-0" onclick="insertar('salas');" style="background-color:#db600e;">Agregar contenido</a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card" style="height:360px">
                        <div class="image">
                        <img src="<?= base_url() ?>assets/img/admin/portada-r.webp" alt="Imagen">
                        </div>
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Recamaras</h5>
                            <a href="#" onclick="insertar('recamaras');" type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card" style="height:360px">
                        <div class="image">
                        <img src="<?= base_url() ?>assets/img/admin/portada-c.webp" alt="Imagen">
                        </div>
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Cocinas</h5>
                            <a href="#" onclick="insertar('cocinas');" type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card" style="height:360px">
                        <div class="image">
                        <img src="<?= base_url() ?>assets/img/admin/portada-e.webp" alt="Imagen">
                        </div>
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Electronica</h5>
                            <a href="#" onclick="insertar('electronica');" type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card" style="height:360px">
                        <div class="image">
                        <img src="<?= base_url() ?>assets/img/admin/portada-ele.webp" alt="Imagen">
                        </div>
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Electrodomesticos</h5>
                            <a href="#" onclick="insertar('electrodomesticos');" type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card" style="height:360px">
                        <div class="image">
                        <img src="<?= base_url() ?>assets/img/admin/portada-m.webp" alt="Imagen">
                        </div>
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Motos</h5>
                            <a href="#" onclick="insertar('motos');" type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="<?= base_url() ?>assets/JQuery/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
    <script src="<?= base_url() ?>assets/js/redirection/baseurl.js"></script>
    <script src="<?= base_url() ?>assets/js/admin/setlocalstorage.js"></script>
</body>
</html>