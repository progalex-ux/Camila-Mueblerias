function toggleMenu() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
  } else {
      dropdown.style.display = "block";
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.menu-button')) {
      var dropdown = document.getElementById("myDropdown");
      if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
      }
  }
}
function toggleiconMenu(){
  var dropdown = document.getElementById("myDropdownicon");
  if(dropdown.style.display === "block"){
    dropdown.style.display = "none";
  } else{
     dropdown.style.display = "block";
  }
}
window.onclick = function(event) {
  if(!event.target.matches('#menu-icon')){
    var dropdown = document.getElementById("myDropdownicon");
    if(dropdown.style.display === "block"){
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block;"
    }
  }
}
