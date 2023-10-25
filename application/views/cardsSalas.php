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
                <button onclick="returnHome()" class="btn btn-dark " style="background-color:#db600e; border-color:#db600e;">Regresar</button>
            </div>
            
        </div>
        <div class="titulo">
            <h1 style="color:#db600e;">Admin</h1>
        </div>
    </header>
    <section>
        <div class="content">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-12">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/salas/card-sofacama.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Sofa Cama</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertSofacama/"><button type="button" class="btn btn-dark" style="background-color:#db600e; border-color:#db600e;">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-12">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/salas/card-salamodular.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Sala Modular</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertSalamodular/"><button type="button" class="btn btn-dark"  style="background-color:#db600e; border-color:#db600e;">Agregar contenido</button></a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-12">
                    <div class="card">
                        <img src="<?= base_url() ?>public/img/salas/card-sofa.webp" alt="Imagen">
                        <div class="custom-card-content">
                            <h5 class="custom-card-title" style="color:#db600e;">Sofas</h5>
                            <a href="<?= base_url() ?>index.php/admin/insertSofas"><button type="button" class="btn btn-dark"  style="background-color:#db600e; border-color:#db600e;">Agregar contenido</button></a>
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