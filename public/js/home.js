const image = document.querySelector('.arrow')
function show() { 
  const submenu = document.querySelector(".submenu");
  submenu.style.display = (submenu.style.display === "block") ? "none" : "block";  

}
function categoria() { 
  const subcategoria = document.querySelector(".subcategoria");
  subcategoria.style.display = (subcategoria.style.display === "block") ? "none" : "block"; 

}
function redes() { 
  const subredes = document.querySelector(".subredes");
  subredes.style.display = (subredes.style.display === "block") ? "none" : "block"; 

}
function servicios() { 
  const subservicios = document.querySelector(".subservicios");
  subservicios.style.display = (subservicios.style.display === "block") ? "none" : "block"; 

}
function hide() {
  const submenu = document.querySelector(".submenu");
  submenu.style.display = "none";
}

const base_url="http://localhost/CamilaMueblerias/";
function regresar(){
  window.location.href = base_url+"index.php/admin/tarjetas";
}
function login(){
  window.location.href = base_url+"index.php/admin/";
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

function checkLogin(jsonLogin){
  $.ajax({
    url:base_url+"index.php/admin/login",
    dataType:"json",
    type:"post",
    data:jsonLogin,
    success:function(datos, estado, jhrx){
        console.log(datos);
        
        if(datos.status=="true"){
           window.location.href =base_url+"index.php/admin/tarjetas";

           
        } else {
            alert('Datos Incorrectos');
        }
    
    },
    error:function(jhrx,estado,errorA){
       console.log(errorA);
    }
    
   })
}

function uploadCard(){

}
