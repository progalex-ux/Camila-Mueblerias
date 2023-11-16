<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/insert.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <title>Admin | Camila Mueblerias</title>
</head>

<body>
<header>
        <div class="logo">
            <div class="boton">
                <a href="<?= base_url() ?>index.php/admin/tarjetas"><button class="btn btn-light border"><i
                            class="bi bi-arrow-90deg-left" style="color:#000;"></i></button></a>
            </div>

        </div>

        <div class="titulo d-flex justify-content-between" style="width:55%;">
            <div>
                <h1 style="color:#db600e;">Admin </h1>
            </div>
            <div>
                
                <a href="<?= base_url() ?>index.php/admin/changedata">
                    <button class="btn btn-light custom-tooltip" data-bs-toggle="tooltip" data-placement="bottom"
                        title="Modificar contenido">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-tools" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.960 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Z M9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                        </svg>
                    </button>
                    
                </a>
            </div>
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
                            <option  selected value="null" name="null" id="null">Seleccionar</option>
                            <option value="SO" name="SO" id="SO">Sofas</option>
                            <option value="SA" name="SA" id="SA">Salas modular</option>
                            <option value="SCA" name="SCA" id="SCA">Sofa camas</option>
                        </select>
                    </div>
                    <div class="send">
                        <button type="button" class="btn btn-light border" onclick="registroTarjetas()">Agregar</button>
                    </div>
                </form>
            </div>

        </section>
    </main>
    <script src="<?= base_url() ?>public/jquery/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>

    <script src="<?= base_url() ?>public/js/categorias.js"></script>

    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>

</body>

</html>