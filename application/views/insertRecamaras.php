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
    <title>Admin | Camila Mueblerias</title>
</head>

<body>
    <header>
        <div class="logo">
            <div class="boton">
                <a href="<?= base_url() ?>index.php/admin/tarjetas"><button class="btn btn-light border"><i class="bi bi-arrow-90deg-left" style="color:#000;"></i></button></a>
            </div>

        </div>
        <div class="titulo">
            <h1 style="color:#db600e;">Admin</h1>
        </div>
    </header>
    <main>
        <section>
       
            <div class="container">
            <form id="dataTarjeta" method="post" enctype="multipart/form-data">
                <div class="tittle">
                    <h3>Formulario para agregar contenido</h3>
                </div>
                <div class="selected-image">
                    <div id="image-container">
                        <img id="preview-image" src="" alt="">
                    </div>
                </div>
                <div class="image">
                    <input class="form-control" type="file" name="image" id="image" onchange="loadImage()" required>
                </div>
                <div class="data">
                    <label for="precio">Precio</label>
                    <input class="form-control" type="number" name="precio" id="precio" required>
                    <label for="titulo">Titulo</label>
                    <input class="form-control" type="text" name="titulo" id="titulo" required>
                    <label class="pt-1" for="">Categorias</label>
                        <select class="form-select" aria-label="Default select example" id="identificador" name="identificador">
                            <option value="CO" name="CO" id="CO">Colchones</option>
                            <option value="CA" name="CA" id="CA">Cabeceras</option>
                            <option value="BA" name="BA" id="BA">Bases Cama</option>
                            <option value="BU" name="BU" id="BU">Buros</option>
                            <option value="RO" name="RO" id="RO">Roperos</option>
                            <option value="RE" name="RE" id="RE">Recamaras</option>
                        </select>
                </div>
                <div class="send">
                    <button type="button" class="btn btn-light border" onclick="registroTarjetas()">Agregar</button>
                </div>
            </div>

        </section>
    </main>
    <script src="<?= base_url() ?>public/jquery/jquery.js"></script>
    <script src="<?= base_url() ?>public/js/categorias.js"></script>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
