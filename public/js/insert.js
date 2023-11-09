const base_url="http://localhost/CamilaMueblerias/";
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
    var tarjetasContainer = $("#tarjetas");
    tarjetasContainer.empty(); 

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
        var col5 = $("<div class='d-flex justify-content-center align-items-center' style='width:20%; border-bottom:1px solid rgba(0, 0, 0, 0.219);'>").append(
            $("<button onclick='deleteCard(" + valor.id + ")' class='btn btn-dark border me-1' data-bs-toggle='tooltip' data-placement='top' data-card-id='" + valor.id + "'><i class='bi bi-x-circle'></i></button>"),
            $("<a href='#formul'><button onclick='editCard(" + valor.id + ")' class='btn btn-dark' data-bs-toggle='tooltip' data-placement='top' title='Editar'><i class='bi bi-pencil-square'></i></button></a>")
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
    $.ajax({
      url: base_url + 'index.php/tarjetas/getCard/' + id,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        if (data && data.status === 'success') {
          const cardData = data.card;
          $("#titulo").val(cardData.titulo);
          $("#precio").val(cardData.precio);
          if (cardData.image) {

            $("#preview-image").attr('src', base_url + cardData.image);
          }        
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

    // Mostrar información sobre la imagen antes de la solicitud AJAX
    console.log("Nombre del archivo: " + formData.get('image').name);
    console.log("Tipo de archivo: " + formData.get('image').type);
    console.log("Tamaño del archivo: " + formData.get('image').size + " bytes");

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
