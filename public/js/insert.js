const base_url="http://localhost/CamilaMueblerias/";

function returnHome(){
  window.location.href = base_url+"index.php/admin/tarjetas";
}
function home(){
  window.location.href = base_url+"index.php/principal/";
}
function login(){
	window.location.href = base_url+"index.php/admin/";
  }

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

function registroTarjetas() {
	var titulo = $("#titulo").val();
	var precio = $("#precio").val();
	var image = $("#image").val();
	var datosTarjeta = new FormData($("#dataTarjeta")[0]);
	var tarjeta = {
		image: image,
		titulo: titulo,
		precio: precio
	};
	enviarDatos(datosTarjeta);
}


function enviarDatos(jsonTarjeta) {
	$.ajax({
		url: base_url+"index.php/tarjetas/guardarTarjetas",
		dataType: "json",
		type: "post",
		data: jsonTarjeta,
		contentType: false,
		processData: false,
		success: function (datos, estado, jhrx) {
            alert("Producto insertado correctamente!");
			location.reload();
		},
		error: function (jhrx, estado, error) {},
	});
}
reloadCardEstufa();
cargarTarjetas();

function cargarTarjetas() {
    $.ajax({
        url: base_url + "index.php/tarjetas/obtenerTarjetas",
        dataType: "json",
        type: "post",
        data: {},
        success: function (datos, estado, jhrx) {
           
            renderTarjetas(datos.tarjetas);
        },
        error: function (jhrx, estado, error) {
            console.log("Error");
        },
    });
}
function renderTarjetas(tarjetas) {
   
    function formatearNumeroConComas(numero) {
        return numero.toLocaleString();
    }

    tarjetas.forEach(function (valor, i, array) {	
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
            $("<div class='card'>").append(
                $("<img src='" + base_url + valor.image + "'>"),
                $("<div class='custom-card-content'>").append(
                    $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
                    $("<p class='custom-card-tittle'>").text(valor.titulo)
                )
            )
        );

        $("#tarjetas").append($div);
    });
}

function reloadCardEstufa() {
    $.ajax({
        url: base_url + "index.php/tarjetas/getCardEstufa",
        dataType: "json",
        type: "post",
        data: {},
        success: function (datos, estado, jhrx) {
           
            renderTarjetas(datos.tarjetas);
        },
        error: function (jhrx, estado, error) {
            console.log("Error");
        },
    });
}
function renderTarjetas(tarjetas) {
   
    function formatearNumeroConComas(numero) {
        return numero.toLocaleString();
    }

    tarjetas.forEach(function (valor, i, array) {	
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
            $("<div class='card'>").append(
                $("<img src='" + base_url + valor.image + "'>"),
                $("<div class='custom-card-content'>").append(
                    $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
                    $("<p class='custom-card-tittle'>").text(valor.titulo)
                )
            )
        );

        $("#tarjetas").append($div);
    });
}
