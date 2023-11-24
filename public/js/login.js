const base_url="http://localhost/CamilaMueblerias/"; // 192.168.1.69
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

function login(){
	window.location.href = base_url+"index.php/admin/";
  }
function home(){
  window.location.href = base_url+"index.php/principal/";
}
function returnHome(){
  window.location.href = base_url+"index.php/admin/tarjetas";
}
function loginUser(){
    var usuario =$("#usuario").val();
    var contrasena=$("#contrasena").val();

    var jsonLogin = {
      usuario: usuario,
      contrasena : contrasena

    }
    console.log(jsonLogin)
    checkLogin(jsonLogin);
}

function checkLogin(jsonLogin) {
  $.ajax({
    url: base_url + "index.php/admin/login",
    dataType: "json",
    type: "post",
    data: jsonLogin,
    success: function (datos, estado, jhrx) {
      console.log(datos);

      if (datos.status == "true") {
        window.location.href = base_url + "index.php/admin/tarjetas";
      } else {
        toastr.error('Usuario o Contraseña Incorrectos');
      }
    },
    error: function (jhrx, estado, errorA) {
      console.log(errorA);
    }
  });
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
