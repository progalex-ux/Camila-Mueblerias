<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Cards | Admin | Camila Mueblerias</title>
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/card.css">
</head>

<body>
    <header>
        <div class="logo">
            <div class="boton">
                <button onclick="returnHome()" class="btn btn-dark">Regresar</button>
            </div>
            
        </div>
        <div class="titulo">
            <h1>Admin</h1>
        </div>
    </header>
    <section>
        <div class="content">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/electronica/sello-phone.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title">Celulares</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertTelefonos/"><button type="button" class="btn btn-dark">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/electronica/sello-ipad.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title">Tablets</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertTablets/"><button type="button" class="btn btn-dark">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/electronica/sello-laptop.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title">Laptops</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertLaptop"><button type="button" class="btn btn-dark">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/electronica/sello-tv.png" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title">Televisiones</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertTelevisiones/"><button
                            type="button" class="btn btn-dark">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/electronica/sello-bocina.png" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title">Bocinas</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertBocinas/"><button
                            type="button" class="btn btn-dark">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

        
            </div>
        </div>
    </section>
    <script src="<?= base_url() ?>public/jquery/jquery.js"></script>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
    <script src="<?= base_url() ?>public/js/insert.js"></script>
</body>

</html>