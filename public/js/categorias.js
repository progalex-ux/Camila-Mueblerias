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

  
    tarjetas.forEach(function (valor, i, array) {
      if (identificadorVista === 'SCA' && valor.identificador === 'SCA') {
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
      } else if (identificadorVista === 'SO' && valor.identificador === 'SO') {
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
      } else if (identificadorVista === 'SA' && valor.identificador === 'SA') {
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
      } else if (identificadorVista === 'COM' && valor.identificador === 'COM') {
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
      } else if (identificadorVista === 'SI' && valor.identificador === 'SI') {
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
      } else if (identificadorVista === 'VI' && valor.identificador === 'VI') {
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
      } else if (identificadorVista === 'MI' && valor.identificador === 'MI') {
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
      } else if (identificadorVista === 'LI' && valor.identificador === 'LI') {
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
      } else if (identificadorVista === 'ES' && valor.identificador === 'ES') {
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
      } else if (identificadorVista === 'PA' && valor.identificador === 'PA') {
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
      } else if (identificadorVista === 'SE' && valor.identificador === 'SE') {
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
      } else if (identificadorVista === 'LAV' && valor.identificador === 'LAV') {
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
      } else if (identificadorVista === 'CE' && valor.identificador === 'CE') {
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
      } else if (identificadorVista === 'TA' && valor.identificador === 'TA') {
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
      } else if (identificadorVista === 'LA' && valor.identificador === 'LA') {
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
      } else if (identificadorVista === 'TE' && valor.identificador === 'TE') {
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
      } else if (identificadorVista === 'BO' && valor.identificador === 'BO') {
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
      else if (identificadorVista === 'BU' && valor.identificador === 'BU') {
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
      } else if (identificadorVista === 'CO' && valor.identificador === 'CO') {
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
      } else if (identificadorVista === 'CA' && valor.identificador === 'CA') {
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
      } else if (identificadorVista === 'BA' && valor.identificador === 'BA') {
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
      } else if (identificadorVista === 'RO' && valor.identificador === 'RO') {
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
      } else if (identificadorVista === 'RE' && valor.identificador === 'RE') {
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
      } else if (identificadorVista === 'MO' && valor.identificador === 'MO') {
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
      } else if (identificadorVista === 'CU' && valor.identificador === 'CU') {
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
      } else if (identificadorVista === 'REF' && valor.identificador === 'REF') {
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
  
  function toggleMenu() {
    var dropdown = document.getElementById("myDropdown");
    
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  
  document.addEventListener("click", function (event) {
    if (!event.target.matches('.menu-button') && !event.target.matches('#menu-icon')) {
      var dropdown = document.getElementById("myDropdown");
    
      dropdown.style.display = "none";
    }
  });
  
  
  const recamarasButton = document.querySelector('.menu-content a:first-child');
  const subdropdownRecamaras = document.querySelector('#subdropdown-recamaras');
  
  recamarasButton.addEventListener('mouseenter', function () {
    subdropdownRecamaras.style.display = 'block';
  });
  
  recamarasButton.addEventListener('mouseleave', function (e) {
    if (e.relatedTarget !== subdropdownRecamaras) {
        subdropdownRecamaras.style.display = 'none';
    }
  });
  
  subdropdownRecamaras.addEventListener('mouseenter', function () {
    subdropdownRecamaras.style.display = 'block';
  });
  
  subdropdownRecamaras.addEventListener('mouseleave', function () {
    subdropdownRecamaras.style.display = 'none';
  });
  
  const cocinasButton = document.querySelector('.menu-content a:nth-child(3)');
  const subdropdownCocinas = document.querySelector('#subdropdown-cocinas');
  
  cocinasButton.addEventListener('mouseenter', function () {
    subdropdownCocinas.style.display = 'block';
  });
  
  cocinasButton.addEventListener('mouseleave', function (e) {
    if (e.relatedTarget !== subdropdownCocinas) {
        subdropdownCocinas.style.display = 'none';
    }
  });
  
  subdropdownCocinas.addEventListener('mouseenter', function () {
    subdropdownCocinas.style.display = 'block';
  });
  
  subdropdownCocinas.addEventListener('mouseleave', function () {
    subdropdownCocinas.style.display = 'none';
  });
  
  const salasButton = document.querySelector('.menu-content a:nth-child(5)');
  const subdropdownSalas = document.querySelector('#subdropdown-salas');
  
  
  salasButton.addEventListener('mouseenter', function () {
    subdropdownSalas.style.display = 'block';
  });
  
  salasButton.addEventListener('mouseleave', function (e) {
    if (e.relatedTarget !== subdropdownSalas) {
        subdropdownSalas.style.display = 'none';
    }
  });
  
  subdropdownSalas.addEventListener('mouseenter', function () {
    subdropdownSalas.style.display = 'block';
  });
  
  subdropdownSalas.addEventListener('mouseleave', function () {
    subdropdownSalas.style.display = 'none';
  });
  
  const electrodomesticosButton = document.querySelector('.menu-content a:nth-child(7)');
  const subdropdownElectrodomesticos = document.querySelector('#subdropdown-electrodomesticos');
  
  
  electrodomesticosButton.addEventListener('mouseenter', function () {
    subdropdownElectrodomesticos.style.display = 'block';
  });
  
  electrodomesticosButton.addEventListener('mouseleave', function (e) {
    if (e.relatedTarget !== subdropdownElectrodomesticos) {
        subdropdownElectrodomesticos.style.display = 'none';
    }
  });
  
  subdropdownElectrodomesticos.addEventListener('mouseenter', function () {
    subdropdownElectrodomesticos.style.display = 'block';
  });
  
  subdropdownElectrodomesticos.addEventListener('mouseleave', function () {
    subdropdownElectrodomesticos.style.display = 'none';
  });
  
  const electronicaButton = document.querySelector('.menu-content a:nth-child(9)');
  const subdropdownElectronica = document.querySelector('#subdropdown-electronica');
  
  
  electronicaButton.addEventListener('mouseenter', function () {
    subdropdownElectronica.style.display = 'block';
  });
  
  electronicaButton.addEventListener('mouseleave', function (e) {
    if (e.relatedTarget !== subdropdownElectronica) {
        subdropdownElectronica.style.display = 'none';
    }
  });
  
  subdropdownElectronica.addEventListener('mouseenter', function () {
    subdropdownElectronica.style.display = 'block';
  });
  
  subdropdownElectronica.addEventListener('mouseleave', function () {
    subdropdownElectronica.style.display = 'none';
  });