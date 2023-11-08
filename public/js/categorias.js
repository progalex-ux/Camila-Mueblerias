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
        alert("Producto insertado correctamente!");
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
  
    tarjetas.forEach(function (valor, i, array) {
      if (identificadorVista === 'SCA' && valor.identificador === 'SCA') {
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
      } else if (identificadorVista === 'SO' && valor.identificador === 'SO') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'SA' && valor.identificador === 'SA') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'COM' && valor.identificador === 'COM') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'SI' && valor.identificador === 'SI') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'VI' && valor.identificador === 'VI') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'MI' && valor.identificador === 'MI') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'LI' && valor.identificador === 'LI') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'ES' && valor.identificador === 'ES') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'PA' && valor.identificador === 'PA') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'SE' && valor.identificador === 'SE') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'LAV' && valor.identificador === 'LAV') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'CE' && valor.identificador === 'CE') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'TA' && valor.identificador === 'TA') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'LA' && valor.identificador === 'LA') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'TE' && valor.identificador === 'TE') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'BO' && valor.identificador === 'BO') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      }
      else if (identificadorVista === 'BU' && valor.identificador === 'BU') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'CO' && valor.identificador === 'CO') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'CA' && valor.identificador === 'CA') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'BA' && valor.identificador === 'BA') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'RO' && valor.identificador === 'RO') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'RE' && valor.identificador === 'RE') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'MO' && valor.identificador === 'MO') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
            ),
            $("<div class='custom-card-content'>").append(
              $("<h5 class='custom-card-price'>").text("$" + formatearNumeroConComas(valor.precio)),
              $("<p class='custom-card-tittle'>").text(valor.titulo)
            )
          )
        );
        $("#tarjetas").append($div);
      } else if (identificadorVista === 'CU' && valor.identificador === 'CU') {
        var $div = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>").append(
          $("<div class='card rounded-3 border-0'>").append(
            $("<div class='image'>").append(
              $("<img class='object-fit-cover' src='" + base_url + valor.image + "'>")
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
  
  