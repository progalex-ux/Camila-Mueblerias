const base_url="http://localhost/CamilaMueblerias/";
function returns(){
    window.location.href = base_url+"index.php/admin/cardsElectrodomesticos";
}
function returnse(){
    window.location.href = base_url+"index.php/admin/cardsElectronica";
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
    var identificador = $("#identificador").val();

   
    if (!titulo || !precio || !image || identificador === "null") {
      toastr.error('Todos los campos son obligatorios. Por favor, llénelos antes de enviar el formulario o seleccione una categoría.');
      return;
  }

    var datosTarjeta = new FormData($("#dataTarjeta")[0]);
    var tarjeta = {
        image: image,
        titulo: titulo,
        precio: precio,
        identificador: identificador,
    };
    enviarDatos(datosTarjeta);
}
  
  function enviarDatos(jsonTarjeta) {
    $.ajax({
      url: base_url + "index.php/tarjetas/saveCardCategorias",
      dataType: "json",
      type: "post",
      data: jsonTarjeta,
      contentType: false,
      processData: false,
      success: function (datos, estado, jhrx) {
        toastr.success("Producto insertado correctamente!");
        location.reload();
      },
      error: function (jhrx, estado, error) {},
    });
  }
  
  reloadCardCategorias();
  
  function reloadCardCategorias() {
    $.ajax({
      url: base_url + "index.php/tarjetas/getCardCategorias",
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
  
    var identificadorVista = localStorage.getItem("identificador");
  
    tarjetas.forEach(function (valor) {
      if (identificadorVista === valor.identificador) {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image d-flex justify-content-center'>").append(
              $("<img class='object-fit-contain' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      }
    });
  }
  
  