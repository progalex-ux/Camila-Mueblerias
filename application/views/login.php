<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Camila Mueblerias</title>
    <link rel="stylesheet" href="<?= base_url() ?>public/css/login.css">
    <link rel="icon" href="<?= base_url() ?>public/img/logos/Logo.icon">
    <link rel="stylesheet" href="<?= base_url() ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>

<body>
    <main>
        <section>
            <div class="login-contenedor">
                <div class="imagen-login">
                    <img src="<?= base_url() ?>public/img/recamaras/portada.webp" alt="">
                </div>
                <div class="login">
                    <div class="empty d-flex justify-content-end"><a href="<?= base_url() ?>index.php/principal/"><button class="btn btn-light border-0"><i class="bi bi-house fs-4"></i></button></a></div>
                    <div class="empty"></div>
                    <div class="imagen">
                        <img src="<?= base_url() ?>public/img/user.png" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            
                            
                        </div>
                    </div>
                    <div class="tittle">
                        <h4>Admin</h4>
                    </div>
                    <div class="vacio"></div>
                    <div class="datos-login">
                        <label for="usuario">Usuario</label>
                        <input type="text" name="usuario" id="usuario" class="form-control">
                        <label for="contrasena">Contraseña</label>
                        <input type="password" name="contrasena" id="contrasena" class="form-control">
                    </div>
                    <div class="boton">
                        <button class="btn btn-dark" onclick="loginUser()"
                            style="background-color:#db600e; border-color:#db600e;">Ingresar</button>
                    </div>
                    <div class="empty"></div>
                </div>
            </div>
        </section>
    </main>
    <script src="<?= base_url() ?>public/jquery/jquery.js"></script>
    <script src="<?= base_url() ?>public/bootstrap/js/bootstrap.min.js"></script>
    <script src="<?= base_url() ?>public/js/login.js"></script>

</body>

</html>