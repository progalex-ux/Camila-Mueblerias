<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/change.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <title>Admin | Camila Mueblerias</title>
</head>

<body style="background-color:white;">
    <header class="d-flex" style="height:60px; border-bottom:1px solid rgba(0, 0, 0, 0.219);">
        <div class="logo" style="width:45%;">
            <div class="mt-2 ms-1"><a href="<?= base_url() ?>index.php/admin/" style="color:black;"><button
                        class="btn btn-light border-secondary rounded-pill mt-1 ms-1">Cerrar sesión</button></a> </div>

        </div>
        <div class="titulo d-flex justify-content-between" style="width:55%;">
            <div>
                <h1 style="color:#db600e;">Admin</h1>
            </div>
            <div >
                <a href="<?= base_url() ?>index.php/admin/tarjetas"><button class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg></button></a>
                <a href="<?= base_url() ?>index.php/admin/changedata"><button class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                        <path
                            d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                    </svg></button></a>
            </div>
        </div>
    </header>
    <main class="d-flex" style="width:100%; height:100vh;">
        <section style="width:70%; height:100%;">
            <div class="column d-flex justify-content-center flex-column">
                <div class="container text-center d-flex mt-3" style="width:100%">
                    <div style="width:5%;  border:1px solid rgba(0, 0, 0, 0.219);"><span>#</span></div>
                    <div style="width:25%; border:1px solid rgba(0, 0, 0, 0.219);"><span>Titulo</span>
                    </div>
                    <div style="width:20%; border:1px solid rgba(0, 0, 0, 0.219);"><span>Precio</span>
                    </div>
                    <div style="width:35%; border:1px solid rgba(0, 0, 0, 0.219);"><span>Imagen</span>
                    </div>
                    <div style="width:15%; border:1px solid rgba(0, 0, 0, 0.219);"><span>Accion</span>
                    </div>

                </div>
                <div class="container text-center d-flex" style="width:100%;">
                    <div class="id" style="width:5%;  border:1px solid rgba(0, 0, 0, 0.219);"><span>1</span></div>
                    <div class="titulo" style="width:25%; border:1px solid rgba(0, 0, 0, 0.219);"><span>Cama King
                            Size</span></div>
                    <div class="precio" style="width:20%; border:1px solid rgba(0, 0, 0, 0.219);"><span>$9,999</span>
                    </div>
                    <div class="imagen" style="width:35%; border:1px solid rgba(0, 0, 0, 0.219);"><span><img
                                src="<?= base_url() ?>public/img/Logo-original.png" class="object-fit-cover"
                                alt=""></span></div>
                    <div class="accion" style="width:15%; border:1px solid rgba(0, 0, 0, 0.219);"><span><button
                                class="btn btn-danger mt-1">Eliminar</button><button class="btn btn-warning mt-1 "
                                style="color:#fff;">&nbsp;Editar &nbsp;</button></span></div>
                </div>
            </div>
        </section>
        <aside style="width:30%; height:100%; border-left:1px solid  rgba(0, 0, 0, 0.192);">

            <div class="formulario">
                <form action="">
                    <div class="tittle d-flex justify-content-center"
                        style="width:100%; height:10%; border-bottom:1px solid rgba(0, 0, 0, 0.219);">
                        <h3>Actualizar contenido</h3>
                    </div>
                    <div class="selected-image">
                        <div id="image-container">
                            <img id="preview-image" src="" alt="">
                        </div>
                    </div>
                    <div class="image">
                        <input class="form-control" type="file" name="image" id="image" onchange="loadImage()" required>
                    </div>
                    <div class="data d-flex flex-column mt-3" style="width:90%;">
                        <label class="ps-2" for="precio">Precio:</label>
                        <input type="number" name="precio" id="precio" class="form-control ms-2 border-secondary-subtle"
                            required>
                        <label class="ps-2" for="titulo">Titulo:</label>
                        <input type="text" name="titulo" id="titulo" class="form-control ms-2 border-secondary-subtle"
                            required>
                    </div>
                    <div class="send d-flex justify-content-center">
                        <button style="width:85%;" type="button" class="btn btn-success border mt-4"
                            onclick="registroTarjetas()">Guardar</button>
                    </div>

                </form>
            </div>
        </aside>
    </main>
    <script>
    function loadImage() {
        const input = document.getElementById('image');
        const preview = document.getElementById('preview-image');

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                preview.src = e.target.result;
            };

            reader.readAsDataURL(input.files[0]);
        } else {
            preview.src = '';
        }
    }
    </script>
</body>

</html>