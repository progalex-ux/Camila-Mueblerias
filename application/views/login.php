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
                    <div class="empty"></div>
                    <div class="imagen">
                        <img src="<?= base_url() ?>public/img/user.png" alt="">
                    </div>
                    <div class="tittle">
                        <h4>Admin</h4>
                    </div>
                    <div class="vacio"></div>
                    <div class="datos-login">
                        <label for="usuario">Usuario</label>
                        <input type="text" name="usuario" id="usuario">
                        <label for="contrasena">Contraseña</label>
                        <input type="password" name="contrasena" id="contrasena">
                    </div>
                    <div class="boton">
                            <button class="btn btn-dark" onclick="loginUser()">Ingresar</button>
                    </div>
                    <div class="empty"></div>
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