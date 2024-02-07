function insertar (insert){
    localStorage.setItem("insert",insert)
    window.location.href = base_url + "index.php/admin/insert"
}
