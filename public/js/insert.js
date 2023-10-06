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
    sendData(jsonData);
}

function sendData(jsonData){
  $.ajax({
    url: base_url+"index.php/tarjetas/recamaras",
    dataType:"json",
    type:"post",
    data:jsonData,
    success: function (datos,estado,jhrx){
      console.log(datos);
    },
    error: function (jhrx,estado,errorA){
      console.log(errorA);
      console.log(jhrx.responseText)
    }
  });
}