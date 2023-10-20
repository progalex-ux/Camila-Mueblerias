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

