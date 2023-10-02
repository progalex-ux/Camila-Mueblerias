<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/insert.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <title>Camila Mueblerias</title>
</head>

<body>
    <section>
        <div class="lineas">
            <div class="line1"></div>
        </div>
        <div class="boton">
        <button onclick='regresar()'><i class="bi bi-arrow-90deg-left"></i> Regresar</button>
        </div>
        <div class="container-fluid">
            <div class="content">
                <div class="mb-3">
                    <label for="" class="form-label">Precio</label>
                    <input type="text" name="price" class="form-control" id="" required>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Titulo</label>
                    <input type="text" name="tittle" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Imagen</label>
                    <input type="file" name="image" class="form-control" required>
                </div>
                <button type="button" class="btn btn-primary" onclick="ulpoadCard()">Subir</button>
            </div>
        </div>
        <div class="lineas">
            <div class="line2"></div>
        </div>
    </section>

    <script src="<?= base_url() ?>public/jquery/jquery.js"></script>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
    <script src="<?= base_url() ?>public/js/home.js"></script>
</body>

</html>