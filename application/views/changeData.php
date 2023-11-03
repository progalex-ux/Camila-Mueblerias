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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <title>Admin | Camila Mueblerias</title>
</head>

<body style="background-color:white;">
    <header class="d-flex" style="height:60px; border-bottom:1px solid rgba(0, 0, 0, 0.219);">
        <div class="logo" style="width:45%;">
            <div class="mt-2 ms-1"><a class="icon-link icon-link-hover link-offset-2 link-underline link-underline-opacity-0" href="<?= base_url() ?>index.php/admin/"
                    style="color:black;"><button class="btn btn-light border-0 rounded-pill mt-1 ms-1"><i
                            class="bi bi-arrow-left" style="color:black;"></i> Cerrar sesión</button></a></div>

        </div>
        <div class="titulo d-flex justify-content-between" style="width:55%;">
            <div>
                <h1 style="color:#db600e;">Admin </h1>
            </div>
            <div>
                <a class="link-offset-2 link-underline link-underline-opacity-0" href="<?= base_url() ?>index.php/admin/tarjetas" >
                    <button class="btn btn-light custom-tooltip" data-bs-toggle="tooltip" data-placement="bottom"
                        title="Agregar contenido" data-bs-custom-class="custom-tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    </header>
    <main class="d-flex" style="width:100%; height:100vh;">
        <section>
            <div class="column">
                <div class="container text-center d-flex mt-3" style="width:100%">
                    <div class="d-flex justify-content-center align-items-center"
                        style="width:5%; height:50px; border:1px solid white; background-color:#17202A; color:white;">
                        <span>#</span>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                        style="width:25%; border:1px solid white; background-color:#17202A; color:white;">
                        <span>Titulo</span>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                        style="width:20%; border:1px solid white; background-color:#17202A; color:white;">
                        <span>Precio</span>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                        style="width:30%; border:1px solid white; background-color:#17202A; color:white;">
                        <span>Imagen</span>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                        style="width:20%; border:1px solid white; background-color:#17202A; color:white;">
                        <span>Accion</span>
                    </div>  
                </div>
            </div>
            <div class="column" id="tarjetas"></div>
        </section>
        <aside style="border-left:1px solid  rgba(0, 0, 0, 0.192);">
            <div class="formulario" id="formul">
                <form id="dataTarjeta" method="post" enctype="multipart/form-data">
                    <div class="tittle d-flex justify-content-center" style="width:100%; height:10%; border-bottom:1px solid rgba(0, 0, 0, 0.219);">
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
                            onclick="actualizarCard()">Guardar</button>
                    </div>
                </form>
            </div>
        </aside>
    </main>   
<script src="<?= base_url() ?>public/jquery/jquery.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>    
<script src="<?= base_url() ?>public/js/insert.js"></script>
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
<script>
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
</script>
</body>
</html>