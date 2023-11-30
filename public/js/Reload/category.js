const base_url="http://localhost/CamilaMueblerias/";
var getData = localStorage.getItem("category")
var main = document.getElementById("mainget");

switch (getData){
    case "salas":
        
    var $section = $("<section>").append(
        $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
          $("<div class='carousel-inner'>").append(
            $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
              $("<img src='" + base_url + "public/img/salas/sala-carousel.avif' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
              $("<div class='carousel-caption d-block'>").append(
                $("<h3>").text("Salas")
              )
            )
          )
        ),
      
        $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
            $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Sofa camas' data-bs-custom-class='custom-tooltip-class'>").append(
              $("<a onclick=\"separador('SCA');\">").append(
                $("<img src='" + base_url + "public/img/salas/sofacama1.png' alt=''>")
              )
            ),
           
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip'data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Salas Modular' data-bs-custom-class='custom-tooltip-class'>").append(
              $("<a onclick=\"separador('SA');\">").append(
                $("<img src='" + base_url + "public/img/salas/salamodu.webp' alt=''>")
              )
            ),
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Sofas' data-bs-custom-class='custom-tooltip-class'>").append(
                $("<a 7>").append(
                  $("<img src='" + base_url + "public/img/salas/sofa.webp' alt=''>")
                )
              ),
            
            
            
            
          ),
          $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
              $("<div class='row ' style='width: 100%;'>").append(
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                  $("<div class='card rounded-bottom-1 '>").append(
                    $("<div class='image' style='width:100%; height:85%;'>").append(
                      $("<a onclick=\"separador('SCA');\">").append(
                        $("<img class='object-fit-contain' src='" + base_url + "public/img/salas/card-sofacama.webp' alt=''>")
                      )
                    ),
                    $("<div class='boton' style='width:100%; height:15%;'>").append(
                      $("<a onclick=\"separador('SCA');\">").append(
                        $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Sofa camas")
                      )
                    )
                  )
                ),
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a onclick=\"separador('SA');\">").append(
                          $("<img class='object-fit-contain' src='" + base_url + "public/img/salas/card-salamodular.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a onclick=\"separador('SA');\">").append(
                          $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Salas modular")
                        )
                      )
                    )
                  ),
                  $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a onclick=\"separador('SO');\">").append(
                          $("<img class='object-fit-contain' src='" + base_url + "public/img/salas/card-sofa.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a onclick=\"separador('SO');\">").append(
                          $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Sofas")
                        )
                      )
                    )
                  )   
                )
              )
          );
      $("#mainget").append($section);

        break;
    case "cocinas":
        
    var $section = $("<section>").append(
        $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
          $("<div class='carousel-inner'>").append(
            $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
              $("<img src='" + base_url + "public/img/cocinas/cocina-carousel.jpg' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
              $("<div class='carousel-caption d-block'>").append(
                $("<h3>").text("Cocinas")
              )
            )
          )
        ),
      
        $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
            $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Comedores' data-bs-custom-class='custom-tooltip-class'>").append(
              $("<a onclick=\"separador('COM');\">").append(
                $("<img src='" + base_url + "public/img/cocinas/sello-comedor.png' alt=''>")
              )
            ),
           
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Sillas' data-bs-custom-class='custom-tooltip-class'>").append(
              $("<a onclick=\"separador('SI');\">").append(
                $("<img src='" + base_url + "public/img/cocinas/sello-silla.png'  alt=''>")
              )
            ),
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Vitrinas' data-bs-custom-class='custom-tooltip-class'>").append(
                $("<a onclick=\"separador('VI');\">").append(
                  $("<img src='" + base_url + "public/img/cocinas/sello-vitrina.png' alt=''>")
                )
              ),
            
            
            
            
          ),
          $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
              $("<div class='row' style='width: 100%;'>").append(
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                  $("<div class='card rounded-bottom-1'>").append(
                    $("<div class='image' style='width:100%; height:85%;'>").append(
                      $("<a onclick=\"separador('COM');\">").append(
                        $("<img class='object-fit-contain' src='" + base_url + "public/img/cocinas/comedor-card.webp' alt=''>")
                      )
                    ),
                    $("<div class='boton' style='width:100%; height:15%;'>").append(
                      $("<a onclick=\"separador('COM');\">").append(
                        $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Comedores")
                      )
                    )
                  )
                ),
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a onclick=\"separador('SI');\">").append(
                          $("<img class='object-fit-contain' src='" + base_url + "public/img/cocinas/silla-card.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a onclick=\"separador('SI');\">").append(
                          $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Sillas")
                        )
                      )
                    )
                  ),
                  $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a onclick=\"separador('VI');\">").append(
                          $("<img class='object-fit-contain' src='" + base_url + "public/img/cocinas/vitrina-card.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a onclick=\"separador('VI');\">").append(
                          $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Vitrinas")
                        )
                      )
                    )
                  ),   
                )
              )
          );
      
     
      $("#mainget").append($section);
    
        break;
    case "recamaras":

        var $section = $("<section>").append(
            $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
              $("<div class='carousel-inner'>").append(
                $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
                  $("<img src='" + base_url + "public/img/recamaras/recamara-carousel.jpg' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
                  $("<div class='carousel-caption d-block'>").append(
                    $("<h3>").text("Recamaras")
                  )
                )
              )
            ),
          
            $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-custom-class='custom-tooltip' data-bs-title='Bases para cama' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('BA');\">").append(
                    $("<img src='" + base_url + "public/img/recamaras/basecama-sello.webp' alt=''>")
                  )
                ),
               
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Buros' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('BU');\">").append(
                    $("<img src='" + base_url + "public/img/recamaras/sello-buro.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Roperos' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('RO');\">").append(
                    $("<img src='" + base_url + "public/img/recamaras/sello-ropero.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Cabeceras' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('CA');\">").append(
                    $("<img src='" + base_url + "public/img/recamaras/sello-cabecera.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Recamaras' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('RE');\">").append(
                    $("<img src='" + base_url + "public/img/recamaras/sello-recamara.png' alt=''>")
                  )
                ),
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Colchones' data-bs-custom-class='custom-tooltip-class'>").append(
                    $("<a onclick=\"separador('CO');\">").append(
                      $("<img src='" + base_url + "public/img/recamaras/sello-colchon.png' alt=''>")
                    )
                  )
              ),
          
              
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                  $("<div class='row' style='width: 100%;'>").append(                    
                    $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                      $("<div class='card rounded-bottom-1'>").append(
                        $("<div class='image' style='width:100%; height:85%;'>").append(
                          $("<a onclick=\"separador('CO');\">").append(
                            $("<img class='object-fit-contain' src='" + base_url + "public/img/recamaras/sello-colchon.png' alt=''>")
                          )
                        ),
                        $("<div class='boton' style='width:100%; height:15%;'>").append(
                          $("<a onclick=\"separador('CO');\">").append(
                            $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Colchones")
                          )
                        )
                      )
                    ),
                    
                    $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('BA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/recamaras/basecama-sello.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('BA');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Bases cama")
                            )
                          )
                        )
                      ),
                    
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('BU');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/recamaras/sello-buro.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('BU');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Buros")
                            )
                          )
                        )
                      ),
                   
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('RO');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/recamaras/sello-ropero.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('RO');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Roperos")
                            )
                          )
                        )
                      ),

                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('CA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/recamaras/sello-cabecera.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('CA');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Cabeceras")
                            )
                          )
                        )
                      ),
             
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('RE');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/recamaras/sello-recamara.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('RE');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Recamaras")
                            )
                          )
                        )
                      )
                    )
                  )
              );
          
         
          $("#mainget").append($section);
        break;

    case "electrodomesticos":

        var $section = $("<section>").append(
            $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
              $("<div class='carousel-inner'>").append(
                $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
                  $("<img src='" + base_url + "public/img/electrodomesticos/electro.jpg' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
                  $("<div class='carousel-caption d-block'>").append(
                    $("<h3>").text("Electrodomesticos")
                  )
                )
              )
            ),
          
            $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Estufas' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('ES');\">").append(
                    $("<img src='" + base_url + "public/img/electrodomesticos/estufa.png' alt=''>")
                  )
                ),
               
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Microondas' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('MI');\">").append(
                    $("<img src='" + base_url + "public/img/electrodomesticos/microondas.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Licuadoras' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('LI');\">").append(
                    $("<img src='" + base_url + "public/img/electrodomesticos/licuadora.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Parrilla' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('PA');\">").append(
                    $("<img src='" + base_url + "public/img/electrodomesticos/parrilla.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Secadora' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('SE');\">").append(
                    $("<img src='" + base_url + "public/img/electrodomesticos/secadora.png' alt=''>")
                  )
                ),
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Lavadora' data-bs-custom-class='custom-tooltip-class'>").append(
                    $("<a onclick=\"separador('LAV');\">").append(
                      $("<img src='" + base_url + "public/img/electrodomesticos/lavadora.png' alt=''>")
                    )
                  ),
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Refrigerador' data-bs-custom-class='custom-tooltip-class'>").append(
                    $("<a onclick=\"separador('REF');\">").append(
                      $("<img src='" + base_url + "public/img/electrodomesticos/refrigerador.png' alt=''>")
                    )
                  )
              ),
          
             
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                  $("<div class='row' style='width: 100%;'>").append(                   
                    
                    
                    $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('ES');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-estufa.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('ES');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Estufas")
                            )
                          )
                        )
                      ),
                    
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('MI');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-microondas.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('MI');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Microondas")
                            )
                          )
                        )
                      ),
                   
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('LI');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/licuadora.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('LI');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Licuadoras")
                            )
                          )
                        )
                      ),

                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('PA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-parrilla.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('PA');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Parrillas")
                            )
                          )
                        )
                      ),
             
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('LAV');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-lavadora.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('LAV');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Lavadoras")
                            )
                          )
                        )
                      ),

                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('SE');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-secadora.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('SE');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Secadoras")
                            )
                          )
                        )
                      ),

                    )
                  )
              );
          
         
          $("#mainget").append($section);
        break;

    case "electronica":

        var $section = $("<section>").append(
            $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
              $("<div class='carousel-inner'>").append(
                $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
                  $("<img src='" + base_url + "public/img/electronica/electronica-carousel.webp' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
                  $("<div class='carousel-caption d-block'>").append(
                    $("<h3>").text("Electronica")
                  )
                )
              )
            ),
          
            $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Celulares' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('CE');\">").append(
                    $("<img src='" + base_url + "public/img/electronica/sello-phone.webp' alt=''>")
                  )
                ),
               
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Tablets' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('TA');\">").append(
                    $("<img src='" + base_url + "public/img/electronica/sello-ipad.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Laptops' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('LA');\">").append(
                    $("<img src='" + base_url + "public/img/electronica/sello-laptop.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Televisiones' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('TE');\">").append(
                    $("<img src='" + base_url + "public/img/electronica/sello-tv.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Bocinas' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('BO');\">").append(
                    $("<img src='" + base_url + "public/img/electronica/sello-bocina.png' alt=''>")
                  )
                )
              ),
          
             
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                  $("<div class='row' style='width: 100%;'>").append(
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                      $("<div class='card rounded-bottom-1'>").append(
                        $("<div class='image' style='width:100%; height:85%;'>").append(
                          $("<a onclick=\"separador('CE');\">").append(
                            $("<img class='object-fit-contain' src='" + base_url + "public/img/electronica/sello-phone.webp' alt=''>")
                          )
                        ),
                        $("<div class='boton' style='width:100%; height:15%;'>").append(
                          $("<a onclick=\"separador('CE');\">").append(
                            $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Celulares")
                          )
                        )
                      )
                    ),                   
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('TA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electronica/sello-ipad.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('TA');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Tablets")
                            )
                          )
                        )
                      ),              
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('LA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electronica/sello-laptop.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('LA');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Laptops")
                            )
                          )
                        )
                      ),    
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('TE');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electronica/sello-tv.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('TE');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Televisiones")
                            )
                          )
                        )
                      ),
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('BO');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electronica/sello-bocina.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('BO');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Bocinas")
                            )
                          )
                        )
                      )
                    )
                  )
              );        
          $("#mainget").append($section);        
        break;

    case "motos":
        var $section = $("<section>").append(
            $("<div id='hero-carousel' class='carousel slide' data-bs-ride='carousel'>").append(
              $("<div class='carousel-inner'>").append(
                $("<div class='carousel-item active c-item' data-bs-interval='5000'>").append(
                  $("<img src='" + base_url + "public/img/motos/motos-carousel.png' class='d-block w-100 c-image object-fit-cover' alt='item1'>"),
                  $("<div class='carousel-caption d-block'>").append(
                    $("<h3>").text("Motos")
                  )
                )
              )
            ),
            $("<div class='sellos d-none d-md-flex d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Cuatrimoto' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('CUA');\">").append(
                    $("<img src='" + base_url + "public/img/motos/sello-cuatrimoto.png' alt=''>")
                  )
                ),         
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-custom-class='custom-tooltip' data-bs-placement='bottom' data-bs-title='Motos' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a onclick=\"separador('MOT');\">").append(
                    $("<img src='" + base_url + "public/img/motos/sello-motoneta.png' alt=''>")
                  )
                ),       
              ),
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                  $("<div class='row' style='width: 100%;'>").append(
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                      $("<div class='card rounded-bottom-1'>").append(
                        $("<div class='image' style='width:100%; height:85%;'>").append(
                          $("<a onclick=\"separador('MOT');\">").append(
                            $("<img class='object-fit-contain' src='" + base_url + "public/img/motos/portada.webp' alt=''>")
                          )
                        ),
                        $("<div class='boton' style='width:100%; height:15%;'>").append(
                          $("<a onclick=\"separador('MOT');\">").append(
                            $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Motos")
                          )
                        )
                      )
                    ),                
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a onclick=\"separador('CUA');\">").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/motos/cuatri.jpg' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a onclick=\"separador('CUA');\">").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Cuatrimotos")
                            )
                          )
                        )
                      ),   
                    )
                  )
              );
        $("#mainget").append($section);         
        break;
}
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function separador(identificador){
    localStorage.setItem("identificador", identificador);
    window.location.href = base_url + "index.php/principal/productos"
}
function  showCategory(category){
  localStorage.setItem("category", category)
  window.location.href = base_url + "index.php/principal/categorias"
}