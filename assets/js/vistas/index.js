function showCategory(category){
    var category = localStorage.setItem("category",category)
    window.location.href= base_url + "index.php/home/categorias";
}
function separador(productos){
    var productos = localStorage.setItem("productos",productos)
    window.location.href= base_url + "index.php/home/productos";
}