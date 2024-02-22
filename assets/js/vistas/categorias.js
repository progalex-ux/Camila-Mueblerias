function separador(productos){
  var productos = localStorage.setItem("productos",productos)
  window.location.href= base_url + "index.php/home/productos";
}
function showCategory(category){
var category = localStorage.setItem("category",category)
window.location.href= base_url + "index.php/home/categorias";
}
var category = localStorage.getItem("category");

switch (category){
    case "salas":
        
    var $section = $("<section>").append(
        $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
          $("<div class='carousel-inner'>").append(
            $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
              $("<img src='" + base_url + "assets/img/categorias/sala-carousel.avif' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
              $("<div class='carousel-caption d-block'>").append(
                $("<h3>").text("Salas")
              )
            )
          )
        ),
      
        $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
            $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Sofa camas'>").append(
              $("<a onclick=\"separador('SCA');\">").append(
                $("<img src='" + base_url + "assets/img/categorias/sofacama1.webp' alt=''>")
              )
            ),
           
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip'data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Salas Modular' >").append(
              $("<a onclick=\"separador('SA');\">").append(
                $("<img src='" + base_url + "assets/img/categorias/salamodu.webp' alt=''>")
              )
            ),
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Sofas' >").append(
                $("<a 7>").append(
                  $("<img src='" + base_url + "assets/img/categorias/sofa.webp' alt=''>")
                )
              ),
            
            
            
            
          ),
          $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
              $("<div class='row ' style='width: 100%;'>").append(
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                  $("<div class='card rounded-bottom-1 ' style='height:270px'>").append(
                    $("<div class='image' style='width:100%; height:85%;'>").append(
                      $("<a onclick=\"separador('SCA');\">").append(
                        $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/card-sofacama.webp' alt=''>")
                      )
                    ),
                    $("<div class='boton' style='width:100%; height:15%;'>").append(
                      $("<a onclick=\"separador('SCA');\">").append(
                        $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Sofa camas")
                      )
                    )
                  )
                ),
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a onclick=\"separador('SA');\">").append(
                          $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/card-salamodular.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a onclick=\"separador('SA');\">").append(
                          $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Salas modular")
                        )
                      )
                    )
                  ),
                  $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a onclick=\"separador('SO');\">").append(
                          $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/card-sofa.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a onclick=\"separador('SO');\">").append(
                          $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Sofas")
                        )
                      )
                    )
                  )   
                )
              )
          );
      var tittle = `Salas | Camila Mueblerias`;
      $("#titulo").append(tittle)
      $("#mainget").append($section);
      $(document).ready(function () {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });

        break;
    case "cocinas":
        
    var $section = $("<section>").append(
        $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
          $("<div class='carousel-inner'>").append(
            $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
              $("<img src='" + base_url + "assets/img/categorias/cocina-carousel.webp' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
              $("<div class='carousel-caption d-block'>").append(
                $("<h3>").text("Cocinas")
              )
            )
          )
        ),
      
        $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
            $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Comedores'>").append(
              $("<a onclick=\"separador('COM');\">").append(
                $("<img src='" + base_url + "assets/img/categorias/sello-comedor.png' alt=''>")
              )
            ),
           
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Sillas' >").append(
              $("<a onclick=\"separador('SI');\">").append(
                $("<img src='" + base_url + "assets/img/categorias/sello-silla.png'  alt=''>")
              )
            ),
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Vitrinas'>").append(
                $("<a onclick=\"separador('VI');\">").append(
                  $("<img src='" + base_url + "assets/img/categorias/sello-vitrina.png' alt=''>")
                )
              ),
            
            
            
            
          ),
          $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
              $("<div class='row' style='width: 100%;'>").append(
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                  $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                    $("<div class='image' style='width:100%; height:85%;'>").append(
                      $("<a onclick=\"separador('COM');\">").append(
                        $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/comedor-card.webp' alt=''>")
                      )
                    ),
                    $("<div class='boton' style='width:100%; height:15%;'>").append(
                      $("<a onclick=\"separador('COM');\">").append(
                        $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Comedores")
                      )
                    )
                  )
                ),
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a onclick=\"separador('SI');\">").append(
                          $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/silla-card.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a onclick=\"separador('SI');\">").append(
                          $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Sillas")
                        )
                      )
                    )
                  ),
                  $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a onclick=\"separador('VI');\">").append(
                          $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/vitrina-card.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a onclick=\"separador('VI');\">").append(
                          $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Vitrinas")
                        )
                      )
                    )
                  ),   
                )
              )
          );
      
      var tittle = `Cocinas | Camila Mueblerias`;
      $("#titulo").append(tittle)
      $("#mainget").append($section);
      $(document).ready(function () {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });
    
        break;
    case "recamaras":

        var $section = $("<section>").append(
            $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
              $("<div class='carousel-inner'>").append(
                $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
                  $("<img src='" + base_url + "assets/img/categorias/recamara-carousel.webp' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
                  $("<div class='carousel-caption d-block'>").append(
                    $("<h3>").text("Recamaras")
                  )
                )
              )
            ),
          
            $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-custom-class='custom-tooltip' data-bs-title='Bases para cama' >").append(
                  $("<a onclick=\"separador('BA');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/basecama-sello.webp' alt=''>")
                  )
                ),
               
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Buros' >").append(
                  $("<a onclick=\"separador('BU');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-buro.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Roperos'>").append(
                  $("<a onclick=\"separador('RO');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-ropero.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Cabeceras' >").append(
                  $("<a onclick=\"separador('CA');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-cabecera.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Recamaras' >").append(
                  $("<a onclick=\"separador('RE');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-recamara.webp' alt=''>")
                  )
                ),
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Colchones' >").append(
                    $("<a onclick=\"separador('CO');\">").append(
                      $("<img src='" + base_url + "assets/img/categorias/sello-colchon.webp' alt=''>")
                    )
                  )
              ),
          
              
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                  $("<div class='row' style='width: 100%;'>").append(                    
                    $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                      $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                        $("<div class='image' style='width:100%; height:85%;'>").append(
                          $("<a onclick=\"separador('CO');\">").append(
                            $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/sello-colchon.webp' alt=''>")
                          )
                        ),
                        $("<div class='boton' style='width:100%; height:15%;'>").append(
                          $("<a onclick=\"separador('CO');\">").append(
                            $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Colchones")
                          )
                        )
                      )
                    ),
                    
                    $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('BA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/basecama-sello.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('BA');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Bases cama")
                            )
                          )
                        )
                      ),
                    
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('BU');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/sello-buro.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('BU');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Buros")
                            )
                          )
                        )
                      ),
                   
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('RO');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/sello-ropero.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('RO');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Roperos")
                            )
                          )
                        )
                      ),

                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('CA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/sello-cabecera.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('CA');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Cabeceras")
                            )
                          )
                        )
                      ),
             
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('RE');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/sello-recamara.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('RE');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Recamaras")
                            )
                          )
                        )
                      )
                    )
                  )
              );
          
          var tittle = `Recamaras | Camila Mueblerias`;
          $("#titulo").append(tittle)
          $("#mainget").append($section);
          $(document).ready(function () {
            $('[data-bs-toggle="tooltip"]').tooltip();
        });
        break;

    case "electrodomesticos":

        var $section = $("<section>").append(
            $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
              $("<div class='carousel-inner'>").append(
                $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
                  $("<img src='" + base_url + "assets/img/categorias/electro.webp' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
                  $("<div class='carousel-caption d-block'>").append(
                    $("<h3>").text("Electrodomesticos")
                  )
                )
              )
            ),
          
            $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Estufas' >").append(
                  $("<a onclick=\"separador('ES');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/estufa.png' alt=''>")
                  )
                ),
               
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Microondas' >").append(
                  $("<a onclick=\"separador('MI');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/microondas.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Licuadoras' >").append(
                  $("<a onclick=\"separador('LI');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/licuadora.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Parrilla' >").append(
                  $("<a onclick=\"separador('PA');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/parrilla.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Secadora' >").append(
                  $("<a onclick=\"separador('SE');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/secadora.png' alt=''>")
                  )
                ),
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Lavadora' >").append(
                    $("<a onclick=\"separador('LAV');\">").append(
                      $("<img src='" + base_url + "assets/img/categorias/lavadora.png' alt=''>")
                    )
                  ),
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Refrigerador' >").append(
                    $("<a onclick=\"separador('REF');\">").append(
                      $("<img src='" + base_url + "assets/img/categorias/refrigerador.png' alt=''>")
                    )
                  )
              ),
          
             
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                  $("<div class='row' style='width: 100%;'>").append(                   
                    
                    
                    $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('ES');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/card-estufa.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('ES');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Estufas")
                            )
                          )
                        )
                      ),
                    
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('MI');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/card-microondas.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('MI');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Microondas")
                            )
                          )
                        )
                      ),
                   
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('LI');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/licuadora.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('LI');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Licuadoras")
                            )
                          )
                        )
                      ),

                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('PA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/card-parrilla.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('PA');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Parrillas")
                            )
                          )
                        )
                      ),
             
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('LAV');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/card-lavadora.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('LAV');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Lavadoras")
                            )
                          )
                        )
                      ),

                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('SE');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/card-secadora.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('SE');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Secadoras")
                            )
                          )
                        )
                      ),

                    )
                  )
              );
          
          var tittle = `Electrodomesticos | Camila Mueblerias`;
          $("#titulo").append(tittle)
          $("#mainget").append($section);
          $(document).ready(function () {
            $('[data-bs-toggle="tooltip"]').tooltip();
        });
        break;

    case "electronica":

        var $section = $("<section>").append(
            $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
              $("<div class='carousel-inner'>").append(
                $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
                  $("<img src='" + base_url + "assets/img/categorias/electronica-carousel.webp' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
                  $("<div class='carousel-caption d-block'>").append(
                    $("<h3>").text("Electronica")
                  )
                )
              )
            ),
          
            $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Celulares' >").append(
                  $("<a onclick=\"separador('CE');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-phone.webp' alt=''>")
                  )
                ),
               
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Tablets' >").append(
                  $("<a onclick=\"separador('TA');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-ipad.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Laptops' >").append(
                  $("<a onclick=\"separador('LA');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-laptop.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Televisiones' >").append(
                  $("<a onclick=\"separador('TE');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-tv.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Bocinas' >").append(
                  $("<a onclick=\"separador('BO');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-bocina.png' alt=''>")
                  )
                )
              ),
          
             
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                  $("<div class='row' style='width: 100%;'>").append(
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                      $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                        $("<div class='image' style='width:100%; height:85%;'>").append(
                          $("<a onclick=\"separador('CE');\">").append(
                            $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/sello-phone.webp' alt=''>")
                          )
                        ),
                        $("<div class='boton' style='width:100%; height:15%;'>").append(
                          $("<a onclick=\"separador('CE');\">").append(
                            $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Celulares")
                          )
                        )
                      )
                    ),                   
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('TA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/sello-ipad.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('TA');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Tablets")
                            )
                          )
                        )
                      ),              
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('LA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/sello-laptop.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('LA');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Laptops")
                            )
                          )
                        )
                      ),    
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('TE');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/sello-tv.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('TE');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Televisiones")
                            )
                          )
                        )
                      ),
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('BO');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/sello-bocina.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('BO');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Bocinas")
                            )
                          )
                        )
                      )
                    )
                  )
              );       
          var tittle = `Electronica | Camila Mueblerias`;
          $("#titulo").append(tittle) 
          $("#mainget").append($section);       
          $(document).ready(function () {
            $('[data-bs-toggle="tooltip"]').tooltip();
        }); 
        break;

    case "motos":
        var $section = $("<section>").append(
            $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
              $("<div class='carousel-inner'>").append(
                $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
                  $("<img src='" + base_url + "assets/img/categorias/motos-carousel.webp' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
                  $("<div class='carousel-caption d-block'>").append(
                    $("<h3>").text("Motos")
                  )
                )
              )
            ),
            $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Cuatrimoto' >").append(
                  $("<a onclick=\"separador('CUA');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-cuatrimoto.webp' alt=''>")
                  )
                ),         
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Motos' >").append(
                  $("<a onclick=\"separador('MOT');\">").append(
                    $("<img src='" + base_url + "assets/img/categorias/sello-motoneta.webp' alt=''>")
                  )
                ),       
              ),
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                  $("<div class='row' style='width: 100%;'>").append(
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                      $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                        $("<div class='image' style='width:100%; height:85%;'>").append(
                          $("<a onclick=\"separador('MOT');\">").append(
                            $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/portada.webp' alt=''>")
                          )
                        ),
                        $("<div class='boton' style='width:100%; height:15%;'>").append(
                          $("<a onclick=\"separador('MOT');\">").append(
                            $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Motos")
                          )
                        )
                      )
                    ),                
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                        $("<div class='card rounded-bottom-1' style='height:270px'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('CUA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "assets/img/categorias/cuatri.jpg' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('CUA');\">").append(
                              $("<button class='btn botun rounded-bottom-1 border-0' style='width:100%; height:100%;'>").text("Cuatrimotos")
                            )
                          )
                        )
                      ),   
                    )
                  )
              );
        var tittle = `Motos | Camila Mueblerias`;
        $("#titulo").append(tittle)
        $("#mainget").append($section); 
        $(document).ready(function () {
          $('[data-bs-toggle="tooltip"]').tooltip();
      });        
        break;
}
