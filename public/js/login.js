const base_url="http://localhost/CamilaMueblerias/";

function login(){
	window.location.href = base_url+"index.php/admin/";
  }
function home(){
  window.location.href = base_url+"index.php/principal/";
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
