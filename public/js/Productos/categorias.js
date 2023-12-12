const base_url="http://localhost/CamilaMueblerias/";

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
  
  function separador(identificador){
    localStorage.setItem("identificador", identificador);
    window.location.href = base_url + "index.php/principal/productos"
}
function  showCategory(category){
  localStorage.setItem("category", category)
  window.location.href = base_url + "index.php/principal/categorias"
}

var id = localStorage.getItem("insert");

switch (id){
    case "salas":
        var formHTML = `
    <form id="dataTarjeta" method="post" enctype="multipart/form-data">
        <div class="tittle">
            <h3>Formulario para agregar contenido</h3>
        </div>
        <div class="selected-image">
            <div id="image-container">
                <img id="preview-image" src="" alt="">
            </div>
        </div>
        <div class="image">
            <input class="form-control" type="file" name="image" id="image" onchange="loadImage()" required>
        </div>
        <div class="data">
            <label for="precio">Precio</label>
            <input class="form-control" type="number" name="precio" id="precio" required>
            <label for="titulo">Titulo</label>
            <input class="form-control" type="text" name="titulo" id="titulo" required>
            <label class="pt-1" for="identificador">Categorias</label>
            <select class="form-select" aria-label="Default select example" id="identificador" name="identificador">
                <option selected value="null" name="null" id="null">Seleccionar</option>
                <option value="SO" name="SO" id="SO">Sofas</option>
                <option value="SA" name="SA" id="SA">Salas modular</option>
                <option value="SCA" name="SCA" id="SCA">Sofa camas</option>
            </select>
        </div>
        <div class="send">
            <button type="button" class="btn btn-light border" onclick="registroTarjetas()">Agregar</button>
        </div>
    </form>
`;
        $("#form").append(formHTML);   
        break;
    case "cocinas":
      var formHTML = ` 
      <form id="dataTarjeta" method="post" enctype="multipart/form-data">
      <div class="tittle">
          <h3>Formulario para agregar contenido</h3>
      </div>
      <div class="selected-image">
          <div id="image-container">
              <img id="preview-image" src="" alt="">
          </div>
      </div>
      <div class="image">
          <input class="form-control" type="file" name="image" id="image" onchange="loadImage()" required>
      </div>
      <div class="data">
          <label for="precio">Precio</label>
          <input class="form-control" type="number" name="precio" id="precio" required>
          <label for="titulo">Titulo</label>
          <input class="form-control" type="text" name="titulo" id="titulo" required>
          <label class="pt-1" for="">Categorias</label>
          <select class="form-select" aria-label="Default select example" id="identificador"
              name="identificador">
              <option  selected value="null" name="null" id="null">Seleccionar</option>
              <option value="COM" name="COM" id="COM">Comedores</option>
              <option value="SI" name="SI" id="SI">Sillas</option>
              <option value="VI" name="VI" id="VI">Vitrinas</option>
          </select>
      </div>
      <div class="send">
          <button type="button" class="btn btn-light border" onclick="registroTarjetas()">Agregar</button>
      </div>
  </form>
        `;
        $("#form").append(formHTML); 
        break;
    case "recamaras":
      var formHTML = ` 
      <form id="dataTarjeta" method="post" enctype="multipart/form-data">
      <div class="tittle">
          <h3>Formulario para agregar contenido</h3>
      </div>
      <div class="selected-image">
          <div id="image-container">
              <img id="preview-image" src="" alt="">
          </div>
      </div>
      <div class="image">
          <input class="form-control" type="file" name="image" id="image" onchange="loadImage()" required>
      </div>
      <div class="data">
          <label for="precio">Precio</label>
          <input class="form-control" type="number" name="precio" id="precio" required>
          <label for="titulo">Titulo</label>
          <input class="form-control" type="text" name="titulo" id="titulo" required>
          <label class="pt-1" for="">Categorias</label>
              <select class="form-select" aria-label="Default select example" id="identificador" name="identificador">
                  <option  selected value="null" name="null" id="null">Seleccionar</option>
                  <option value="CO" name="CO" id="CO">Colchones</option>
                  <option value="CA" name="CA" id="CA">Cabeceras</option>
                  <option value="BA" name="BA" id="BA">Bases Cama</option>
                  <option value="BU" name="BU" id="BU">Buros</option>
                  <option value="RO" name="RO" id="RO">Roperos</option>
                  <option value="RE" name="RE" id="RE">Recamaras</option>
              </select>
      </div>
      <div class="send">
          <button type="button" class="btn btn-light border" onclick="registroTarjetas()">Agregar</button>
      </div>
  </form>
        `;
        $("#form").append(formHTML); 
        break;
    case "motos":
      var formHTML = ` 
      <form id="dataTarjeta" method="post" enctype="multipart/form-data">
      <div class="tittle">
          <h3>Formulario para agregar contenido</h3>
      </div>
      <div class="selected-image">
          <div id="image-container">
              <img id="preview-image" src="" alt="">
          </div>
      </div>
      <div class="image">
          <input class="form-control" type="file" name="image" id="image" onchange="loadImage()" required>
      </div>
      <div class="data">
          <label for="precio">Precio</label>
          <input class="form-control" type="number" name="precio" id="precio" required>
          <label for="titulo">Titulo</label>
          <input class="form-control" type="text" name="titulo" id="titulo" required>
          <label class="pt-1" for="">Categorias</label>
              <select class="form-select" aria-label="Default select example" id="identificador" name="identificador">
                  <option  selected value="null" name="null" id="null">Seleccionar</option>
                  <option value="MO" name="MO" id="MO">Motos</option>
                  <option value="CU" name="CU" id="CU">Cuatrimotos</option>
              </select>
      </div>
      <div class="send">
          <button type="button" class="btn btn-light border" onclick="registroTarjetas()">Agregar</button>
      </div>
    </form>
        `;
        $("#form").append(formHTML); 
        break;
    case "electronica":
      var formHTML = ` 
      <form id="dataTarjeta" method="post" enctype="multipart/form-data">
      <div class="tittle">
          <h3>Formulario para agregar contenido</h3>
      </div>
      <div class="selected-image">
          <div id="image-container">
              <img id="preview-image" src="" alt="">
          </div>
      </div>
      <div class="image">
          <input class="form-control" type="file" name="image" id="image" onchange="loadImage()" required>
      </div>
      <div class="data">
          <label for="precio">Precio</label>
          <input class="form-control" type="number" name="precio" id="precio" required>
          <label for="titulo">Titulo</label>
          <input class="form-control" type="text" name="titulo" id="titulo" required>
          <label class="pt-1" for="">Categorias</label>
          <select class="form-select" aria-label="Default select example" id="identificador"
              name="identificador">
              <option  selected value="null" name="null" id="null">Seleccionar</option>
              <option value="CE" name="CE" id="CE">Celulares</option>
              <option value="TA" name="TA" id="TA">Tablets</option>
              <option value="LA" name="LA" id="LA">Laptops</option>
              <option value="TE" name="TE" id="TE">Televisiones</option>
              <option value="BO" name="BO" id="BO">Bocinas</option>
          </select>
      </div>
      <div class="send">
          <button type="button" class="btn btn-light border" onclick="registroTarjetas()">Agregar</button>
      </div>
  </form>
        `;
        $("#form").append(formHTML); 
        break;
    case "electrodomesticos":
      var formHTML = ` 
      <form id="dataTarjeta" method="post" enctype="multipart/form-data">
      <div class="tittle">
          <h3>Formulario para agregar contenido</h3>
      </div>
      <div class="selected-image">
          <div id="image-container">
              <img id="preview-image" src="" alt="">
          </div>
      </div>
      <div class="image">
          <input class="form-control" type="file" name="image" id="image" onchange="loadImage()" required>
      </div>
      <div class="data">
          <label for="precio">Precio</label>
          <input class="form-control" type="number" name="precio" id="precio" required>
          <label for="titulo">Titulo</label>
          <input class="form-control" type="text" name="titulo" id="titulo" required>
          <label class="pt-1" for="">Categorias</label>
              <select class="form-select" aria-label="Default select example" id="identificador" name="identificador">
                  <option  selected value="null" name="null" id="null">Seleccionar</option>
                  <option value="MI" name="MI" id="MI">Microondas</option>
                  <option value="LI" name="LI" id="LI">Licuadoras</option>
                  <option value="ES" name="ES" id="ES">Estufas</option>
                  <option value="PA" name="PA" id="PA">Parrillas</option>
                  <option value="SE" name="SE" id="SE">Secadoras</option>
                  <option value="LAV" name="LAV" id="LAV">Lavadoras</option>
                  <option value="LAV" name="RE" id="RE">Refrigerador</option>
              </select>
      </div>
      <div class="send">
          <button type="button" class="btn btn-light border" onclick="registroTarjetas()">Agregar</button>
      </div>
  </form>
        `;
        $("#form").append(formHTML); 
        break;
}
var producto = localStorage.getItem("identificador");

switch (producto) {
// ELECTRODOMESTICOS
    case "MI":
        var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
        var product=`Microondas`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufa</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrilas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "ES":
        var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
        var product=`Estufas`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\">Microondas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrilas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "PA":
        var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
        var product=`Parrillas`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\"">Microondas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "LI":
        var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
        var product=`Licuadoras`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrillas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\">Microondas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "REF":
        var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
        var product=`Refrigeradores`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrillas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\">Microondas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "LAV":
        var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
        var product=`Lavadoras`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrillas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\">Microondas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "SE":
        var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
        var product=`Secadoras`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrillas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\">Microondas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;

//  ELECTRONICA
    case "CE":
        var categorylink=`<a href="#" onclick="showCategory('electronica');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electronica</a>`;
        var product=`Celulares`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TA');\">Tablets</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LA');\"">Laptops</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TE');\">Televisiones</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BO');\">Bocinas</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "TA":
        var categorylink = `<a href="#" onclick="showCategory('electronica');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electronica</a>`;
        var product=`Tablets`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CE');\">Celulares</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LA');\"">Laptops</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TE');\">Televisiones</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BO');\">Bocinas</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "LA":
        var categorylink = `<a href="#" onclick="showCategory('electronica');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electronica</a>`;
        var product=`Laptops`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CE');\">Celulares</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TA');\"">Tablets</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TE');\">Televisiones</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BO');\">Bocinas</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "TE":
        var categorylink=`<a href="#" onclick="showCategory('electronica');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electronica</a>`;
        var product=`Televisiones`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CE');\">Celulares</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TA');\"">Tablets</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LA');\">Laptops</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BO');\">Bocinas</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "BO":
        var categorylink=`<a href="#" onclick="showCategory('electronica');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electronica</a>`;
        var product=`Bocinas`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CE');\">Celulares</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TA');\"">Tablets</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LA');\">Laptops</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TE');\">Televisiones</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
// RECAMARAS
    case "CO":
        var categorylink=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
        var product=`Colchones`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CA');\">Cabeceras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BA');\"">Bases cama</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BU');\">Buros</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RO');\">Roperos</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RE');\">Recamaras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "CA":
        var categorylink=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
        var product=`Cabeceras`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CO');\">Colchones</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BA');\"">Bases cama</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BU');\">Buros</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RO');\">Roperos</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RE');\">Recamaras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "BA":
        var categorylink=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
        var product=`Bases cama`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CO');\">Colchones</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CA');\"">Cabeceras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BU');\">Buros</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RO');\">Roperos</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RE');\">Recamaras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "BU":
        var categorylink=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
        var product=`Buros`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CO');\">Colchones</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CA');\"">Cabeceras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BA');\">Bases cama</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RO');\">Roperos</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RE');\">Recamaras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "RO":
        var categorylink=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
        var product=`Roperos`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CO');\">Colchon</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CA');\"">Cabeceras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BA');\">Bases cama</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BU');\">Buros</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RE');\">Recamaras</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "RE":
        var link=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
        var product=`Recamaras`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CO');\">Colchon</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CA');\"">Cabeceras</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BA');\">Bases cama</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BU');\">Buros</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RO');\">Roperos</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
// Salas
    case "SO":
        var categorylink=`<a href="#" onclick="showCategory('salas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Salas</a>`;
        var product=`Sofas`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SA');\">Salas modular</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SCA');\"">Sofa camas</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "SA":
        var categorylink=`<a href="#" onclick="showCategory('salas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Salas</a>`;
        var product=`Salas modular`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SO');\">Sofas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SCA');\"">Sofa camas</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "SCA":
        var categorylink=`<a href="#" onclick="showCategory('salas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Salas</a>`;
        var product=`Sofa camas`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SO');\">Sofas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SA');\"">Salas modular</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
// Cocinas
    case "COM":
        var categorylink=`<a href="#" onclick="showCategory('cocinas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Cocinas</a>`;
        var product=`Comedores`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SI');\">Sillas</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('VI');\"">Vitrinas</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "SI":
        var categorylink=`<a href="#" onclick="showCategory('cocinas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Cocinas</a>`;
        var product=`Sillas`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('COM');\">Comedores</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('VI');\"">Vitrinas</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "VI":
        var categorylink=`<a href="#" onclick="showCategory('cocinas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Cocinas</a>`;
        var product=`Vitrinas`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('COM');\">Comedores</a>
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SI');\"">Sillas</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
//Motos
    case "MO":
        var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Motos</a>`;
        var product=`Motos`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CUA');\">Cuatrimotos</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
    case "CU":
        var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Motos</a>`;
        var product=`Cuatrimotos`;
        var links=`
        <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MOT');\">Motos</a>
        `;

        $("#categorylink").append(categorylink);
        $("#product").append(product);
        $("#links").append(links);
        break;
}
