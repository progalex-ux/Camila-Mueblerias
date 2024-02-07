const base_url="http://localhost/CamilaMueblerias/"; 

function login(){
    window.location.replace(base_url+"index.php/admin/");
}
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))