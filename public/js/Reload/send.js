const base_url="http://localhost/CamilaMueblerias/";

function  showCategory(category){
    localStorage.setItem("category", category)
    window.location.href = base_url + "index.php/principal/categorias"
}
