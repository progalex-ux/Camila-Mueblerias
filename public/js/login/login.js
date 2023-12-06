const base_url="http://localhost/CamilaMueblerias/"; 

function loginUser(){
    var usuario =$("#usuario").val();
    var contrasena=$("#contrasena").val();

    var jsonLogin = {
      usuario: usuario,
      contrasena : contrasena

    }
    console.log(jsonLogin)
    checkLogin(jsonLogin);
}

function checkLogin(jsonLogin) {
  $.ajax({
    url: base_url + "index.php/admin/login",
    dataType: "json",
    type: "post",
    data: jsonLogin,
    success: function (datos, estado, jhrx) {
      console.log(datos);

      if (datos.status == "true") {
        window.location.href = base_url + "index.php/admin/tarjetas";
      } else {
        toastr.error('Usuario o Contraseña Incorrectos');
      }
    },
    error: function (jhrx, estado, errorA) {
      console.log(errorA);
    }
  });
}

