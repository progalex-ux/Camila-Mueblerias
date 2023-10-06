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
    <header>
        <div class="logo">
            <div class="boton">
                <button onclick="returnHome()" class="btn btn-light">Regresar</button>
            </div>

        </div>
        <div class="titulo">
            <h1>Administrador</h1>
        </div>
    </header>
    <main>
        <section>
            <div class="container">
                <div class="tittle">
                    <h3>Formulario para agregar tarjetas</h3>
                </div>
                <div class="selected-image">
                    <div id="image-container">
                        <img id="preview-image" src="" alt="">
                    </div>
                </div>
                <div class="image">
                    <input type="file" id="image" name="image" accept="image/png, image/jpeg, image/webp, image/avif" onchange="loadImage()" required>
                </div>
                <div class="data">
                    <label for="price">Precio</label>
                    <input type="number" name="price" id="price" required>
                    <label for="tittle">Titulo</label>
                    <input type="text" name="tittle" id="tittle" required>
                </div>
                <div class="send">
                    <button type="button" class="btn btn-light border" onclick="saveData()">Agregar</button>
                </div>
            </div>
        </section>
    </main>

    <script src="<?= base_url() ?>public/jquery/jquery.js"></script>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
    <script src="<?= base_url() ?>public/js/insert.js"></script>
</body>

</html>