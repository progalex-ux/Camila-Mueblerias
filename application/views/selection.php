<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/selection.css">
    <title>Admin | Camila Mueblerias</title>
</head>

<body>
    <main style="width:100%; min-height:100vh;">
        <section style="width:100%; height:100vh;">
            <div class="content " style="width:100%; height:100%;">
                <div class="row" style="max-width:100%;">

                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="card rounded-1">
                            <div class="carousel-item active c-item" data-bs-interval="5000">
                                <img src="<?= base_url() ?>public/img/recamaras/portada.webp"
                                    class="d-block w-100 c-image object-fit-cover" alt="item1">
                                <div class="carousel-caption d-none d-md-block">
                                    <a href="<?= base_url() ?>index/admin/changedata"><button class="btn btn-light border-1 rounded-1">Modificar productos</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="card rounded-1">
                            <div class="carousel-item active c-item" data-bs-interval="5000">
                                <img src="<?= base_url() ?>public/img/recamaras/portada.webp"
                                    class="d-block w-100 c-image object-fit-cover" alt="item1">
                                <div class="carousel-caption d-none d-md-block">
                                    <a href="<?= base_url() ?>index.php/admin/tarjetas"><button class="btn btn-light border-1 rounded-1">Agregar productos</button></a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    </main>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>