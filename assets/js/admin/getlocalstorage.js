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
      alert('Todos los campos son obligatorios. Por favor, llénelos antes de enviar el formulario o seleccione una categoría.');
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
  