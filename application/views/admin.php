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
    <link rel="stylesheet" href="<?= base_url() ?>public/css/cards/card.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <title>Admin | Camila Mueblerias</title>
</head>

<body>
    <header class="d-flex" style="height:60px; ">
        <div class="logo">
            <div class="ms-1" style="display:flex; align-items: center;"><a
                    class="icon-link icon-link-hover link-offset-2 link-underline link-underline-opacity-0"
                    href="<?= base_url() ?>index.php/admin/" style="color:black;"><button
                        class="btn btn-light border-0 rounded-pill  ms-1"><i class="bi bi-box-arrow-left fs-5"
                            style="color:black;"></i></button></a> </div>

        </div>
        <div class="titulo d-flex justify-content-between" style="width:55%;">
            <div>
                <h1 style="color:#db600e;">Admin </h1>
            </div>

        </div>
        <div style="display:flex; align-items: center;">
            <a href="<?= base_url() ?>index.php/admin/changedata">
                <button class="btn btn-light custom-tooltip" data-bs-toggle="tooltip" data-placement="bottom"
                    title="Modificar contenido">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-tools" viewBox="0 0 16 16">
                        <path
                            d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.960 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Z M9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                    </svg>
                </button>
            </a>
            
        </div>
    </header>
    <section id="seccion">

    </section>
    <script src="<?= base_url() ?>public/jquery/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
    </script>
    <script src="<?= base_url() ?>public/js/Reload/admin.js"></script>

</body>

</html>