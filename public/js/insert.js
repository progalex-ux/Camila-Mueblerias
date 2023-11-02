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
function returns(){
    window.location.href = base_url+"index.php/admin/cardsElectrodomesticos";
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



reloadCardColchones();
  
  function reloadCardColchones() {
      $.ajax({
          url: base_url + "index.php/tarjetas/getCardColchones",
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
    var tarjetasContainer = $("#tarjetas");
    tarjetasContainer.empty(); // Limpia el contenedor antes de agregar las nuevas tarjetas

    function formatearNumeroConComas(numero) {
        return numero.toLocaleString();
    }

    tarjetas.forEach(function (valor, i, array) {
        var cardContainer = $("<div class='container text-center d-flex' style='width:100%'>");
        var col1 = $("<div class='d-flex justify-content-center align-items-center' style='width:5%; height:100px; border-bottom:1px solid rgba(0, 0, 0, 0.219);'>").text(valor.id);
        var col2 = $("<div class='d-flex justify-content-center align-items-center' style='width:25%; border-bottom:1px solid rgba(0, 0, 0, 0.219);'>").text(valor.titulo);
        var col3 = $("<div class='d-flex justify-content-center align-items-center' style='width:20%; border-bottom:1px solid rgba(0, 0, 0, 0.219);'>").text("$" + formatearNumeroConComas(valor.precio));
        var col4 = $("<div class='imagen d-flex justify-content-center align-items-center' style='width:35%; border-bottom:1px solid rgba(0, 0, 0, 0.219);'>").append(
            $("<img src='" + base_url + valor.image + "'>")
        );
        var col5 = $("<div class='d-flex justify-content-center align-items-center' style='width:15%; border-bottom:1px solid rgba(0, 0, 0, 0.219);'>").append(
            $("<button onclick='deleteCard(" + valor.id + ")' class='btn btn-dark border me-1' data-bs-toggle='tooltip' data-placement='top' data-card-id='" + valor.id + "'><i class='bi bi-x-circle'></i></button>"),
            $("<button onclick='editCard(" + valor.id + ")' class='btn btn-dark' data-bs-toggle='tooltip' data-placement='top' title='Editar'><i class='bi bi-pencil-square'></i></button>")
        );

        cardContainer.append(col1, col2, col3, col4, col5);
        tarjetasContainer.append(cardContainer);
    });
}


function deleteCard(id) {
    $.ajax({
        url: base_url + 'index.php/tarjetas/deleteCard/' + id,
        dataType: "json",
        type: 'DELETE',
        success: function (data, estado, jhrz) {
            if (data && data.status === 'success') {
              
                location.reload();
            } else {
                console.log('Respuesta JSON no válida:', data);
            }
        },
        error: function (jhrx, estado, error) {
            console.log(error);
        }
    });
}

function editCard(id) {
    // Realiza una solicitud AJAX para obtener los datos de la tarjeta con el ID especificado
    $.ajax({
      url: base_url + 'index.php/tarjetas/getCard/' + id,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        if (data && data.status === 'success') {
          const cardData = data.card;
          // Llena el formulario con los datos de la tarjeta
          $("#titulo").val(cardData.titulo);
          $("#precio").val(cardData.precio);
  
          // Actualiza la imagen en el formulario
          if (cardData.image) {
            // Asigna la URL de la imagen a la vista previa
            $("#preview-image").attr('src', base_url + cardData.image);
          }
  
          // Guarda el ID de la tarjeta que se está editando
          cardIdBeingEdited = id;
        } else {
          console.log('Respuesta JSON no válida:', data);
        }
      },
      error: function (jhrx, estado, error) {
        console.log(error);
      }
    });
  }
  
  function actualizarCard() {
    const titulo = $("#titulo").val();
    const precio = $("#precio").val();
  
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('precio', precio);
    formData.append('image', $('#image')[0].files[0]);
  
    if (cardIdBeingEdited !== null) {
      $.ajax({
        url: base_url + 'index.php/tarjetas/updateCard/' + cardIdBeingEdited,
        dataType: 'json',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
          if (data && data.status === 'success') {
            location.reload();
          } else {
            console.log('Respuesta JSON no válida:', data);
          }
        },
        error: function (jhrx, estado, error) {
          console.log(error);
        }
      });
    }
  }
  