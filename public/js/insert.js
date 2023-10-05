const base_url="http://localhost/CamilaMueblerias/";
function returnHome(){
  window.location.href = base_url+"index.php/admin/tarjetas";
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

function saveData(){
  var price = $("#price").val();
  var tittle = $("#tittle").val();
  var image = $("#image").val();
  

    var jsonData = {
      image: image,
      price : price,
      tittle : tittle
    }
    console.log(jsonData);
}
function sendData(jsonData){
  $.ajax({
    url: base_url+"index.php/admin/",
    dataType:"json",
    type:"post",
    data:jsonData,
    success: function (datos,estado,jhrx){
      console.log(datos);

    },
    error: function (jhrx,estado,errorA){
      console.log(errorA);
    }
  });
}
function getData() {
  $.ajax({
    url:base_url+"index.php/admin/",
    dataType:"json",
    type:"get",
    success: function (datos, estado, jhrx) {
      console.log(datos);
      renderCard(datos.noticias);
  },
  error: function (jhrx, estado, errorA) {
      console.log(errorA);
  }
  });
}
getData();

function renderCard(contenido) {
  console.log(contenido);
  $("section").empty();

  if (contenido.length >= 0) {
      contenido.forEach(function (valor, i, array) {
          var $div = $("<div class='card'>").append(
              $("<div class='contenido'>").append(
                  $("<div class='ladoIzq'>").append(
                      $("<h2 class='titulo'>").text(valor.Titulo),
                      $("<div class='cuerpo'>").append(
                          $("<p>").text(valor.Descripcion),
                          $("<button onclick='getUser(" + valor.id + ")' class='btn'>").text("Actualizar"),
                          $("<button onclick='deletedUser(" + valor.id + ")' class='btn'>").text("Borrar")
                      )
                  )
              )
          );
          $("section").append($div);
      });
  } else {
      $("section").append(
          $("<h2 class='cards'>").text("Aún no existen noticias, ingresa una nueva.")
      );
  }
}