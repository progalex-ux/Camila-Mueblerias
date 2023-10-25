<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Admin | Camila Mueblerias</title>
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/card.css">
</head>

<body>
    <header>
        <div class="logo">
            <div class="boton">
                <button onclick="home()" class="btn btn-dark border-0" style="background-color:#db600e;">Regresar</button>
            </div>
            
        </div>
        <div class="titulo">
            <h1 style="color:#db600e;">Admin</h1>
        </div>
    </header>
    <section>
        <div class="content">
            <div class="row d-flex justify-content-center">
                <div class="col-xs-12 col-sm-6 col-md-5">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/salas/portada-s.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Salas</h5>
                            <a href="<?= base_url() ?>index.php/admin/cardsSalas/"><button type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-5">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/recamaras/portada-r.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Recamaras</h5>
                            <a href="<?= base_url() ?>index.php/admin/cardsRecamaras/"><button type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-5">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/cocinas/portada-c.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Cocinas</h5>
                            <a href="<?= base_url() ?>index.php/admin/cardsCocinas"><button type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-5">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/electronica/portada.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Electronica</h5>
                            <a href="<?= base_url() ?>index.php/admin/cardsElectronica/"><button
                            type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-5">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/electrodomesticos/portada.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Electrodomesticos</h5>
                            <a href="<?= base_url() ?>index.php/admin/cardsElectrodomesticos/"><button
                            type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-5">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/motos/portada.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Motos</h5>
                            <a href="<?= base_url() ?>index.php/admin/insert/"><button
                            type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</button></a>
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