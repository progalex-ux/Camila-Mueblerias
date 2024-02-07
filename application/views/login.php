<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url() ?>assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/admin/login.css">
    <link rel="icon" href="<?= base_url() ?>assets/img/logo/logo.icon">
    <title>Login | Camila Mueblerias</title>
</head>
<body >
    <main>
        <section>
            <div class="login-contenedor d-flex " >
                <div class="login">
                    <div class="empty "><a href="<?= base_url() ?>index.php/home/" class="btn btn-light border-0 mt-1" data-toggle="tooltip" data-placement="top" title="Inicio" style="background-color:transparent;"><i class="bi bi-arrow-left fs-4" style="color:white;"></i></a></i></div>
                    <div class="empty"></div>
                    <div class="imagen">
                    <svg style="color:white;" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                     <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                     <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>
                    <div class="tittle">
                        <h4 style="color:white;">Admin</h4>
                    </div>
                    <div class="vacio"></div>
                    <div class="datos-login d-flex flex-column">
                        <label style="color:#85929E ;" for="usuario" style="color:white;">Usuario</label>
                        <input style="background-color:#1B2631; color:white;" type="text" name="usuario" id="usuario" autocomplete="off"  class="form-control">
                        <label style="color:#85929E ;" for="contrasena" style="color:white;">Contraseña</label>
                        <input style="background-color:#1B2631; color:white;" type="password" name="contrasena" id="contrasena" class="form-control">
                    </div>
                    <div class="boton">
                        <button class="btn btn-dark border-0" onclick="loginUser()"
                            style="background-color:#283747; height:100%">Ingresar</button>
                    </div>
                    <div class="empty"></div>
                </div>
            </div>
        </section>
    </main>
    <script src="<?= base_url() ?>assets/JQuery/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="<?= base_url() ?>assets/js/redirection/baseurl.js"></script>
    <script src="<?= base_url() ?>assets/js/login/login.js"></script>
</body>
</html>