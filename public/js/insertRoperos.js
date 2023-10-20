const base_url="http://localhost/CamilaMueblerias/";

function returnr(){
    window.location.href = base_url+"index.php/admin/cardsRecamaras";
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
          url: base_url+"index.php/tarjetas/saveCardRoperos",
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
  reloadCardRoperos();
  
  function reloadCardRoperos() {
      $.ajax({
          url: base_url + "index.php/tarjetas/getCardRoperos",
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
              $("<div class='card rounded-3 border-0'>").append(
                $("<div class='image'>").append(
                  $("<img class='object-fit-contain' src='" + base_url + valor.image + "'>")
                  ),
                  $("<div class='custom-card-content'>").append(
                      $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
                      $("<p class='custom-card-tittle'>").text(valor.titulo)
                  )
              )
          );
  
          $("#tarjetas").append($div);
      });
  }
  