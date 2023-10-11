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
    var formData = new FormData();
    formData.append("image", $("#image")[0].files[0]);
    var price =$("#price").val();
    var tittle=$("#tittle").val();

		var tarjetas = {
			image : image,
			price : price,
			tittle : tittle,
		}
    enviarDatos(formData);
	
	
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
			console.log(datos);
		},
		error: function (jhrx, estado, error) {},
	});
}

cargarTarjetas();

function cargarTarjetas() {
	$.ajax({
		url: base_url+"index.php/tarjetas/obtenerTarjetas",
		dataType: "json",
		type: "post",
		data: {},
		success: function (datos, estado, jhrx) {
			console.log(datos);
			renderTarjetas(datos.tarjetas);
		},
		error: function (jhrx, estado, error) {},
	});
}

function renderTarjetas(tarjetas) {
	tarjetas.forEach(function (valor, i, array) {
		var $div = $("<div class ='col-xs-12 col-sm-6 col-md-4 col-lg-3>").append(
			
			$("<img  src='" + base_url + valor.image + "'>"),
			$("<div class='custom-card-content'>").append(
				$("<h5 class='custom-card-price'>").text(valor.price),
				$("<p class='custom-card-tittle'>").text(valor.tittle),
			)
		
		);

		$("#tarjetas").append($div);
	});
}
