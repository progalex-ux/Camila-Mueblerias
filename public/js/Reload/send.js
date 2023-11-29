const base_url="http://localhost/CamilaMueblerias/";

function  showCategory(category){
    localStorage.setItem("category", category)
    window.location.href = base_url + "index.php/principal/categorias"
}
function separador(identificador){
    localStorage.setItem("identificador", identificador);
    window.location.href = base_url + "index.php/principal/productos"
}
function insertar(insert){
    localStorage.setItem("insert",insert);
    window.location.href = base_url + "index.php/admin/insertProducts"
}
