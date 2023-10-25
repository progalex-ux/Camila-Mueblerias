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
                <button onclick="returnHome()" class="btn btn-dark border-0" style="background-color:#db600e;">Regresar</button>
            </div>
            
        </div>
        <div class="titulo">
            <h1 style=" color:#db600e;">Admin</h1>
        </div>
    </header>
    <section>
        <div class="content">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/cocinas/comedor-card.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Comedores</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertComedores/"><button type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/cocinas/silla-card.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Sillas</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertSillas/"><button type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/cocinas/vitrina-card.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Vitrinas</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertVitrinas"><button type="button" class="btn btn-dark border-0" style="background-color:#db600e;">Agregar contenido</button></a>
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