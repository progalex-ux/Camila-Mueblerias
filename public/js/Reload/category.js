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
            $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Celulares' data-bs-custom-class='custom-tooltip-class'>").append(
              $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                $("<img src='" + base_url + "public/img/salas/sofacama1.png' alt=''>")
              )
            ),
           
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Tablets' data-bs-custom-class='custom-tooltip-class'>").append(
              $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                $("<img src='" + base_url + "public/img/salas/salamodu.webp' alt=''>")
              )
            ),
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Tablets' data-bs-custom-class='custom-tooltip-class'>").append(
                $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                  $("<img src='" + base_url + "public/img/salas/sofa.webp' alt=''>")
                )
              ),
            
            
            
            
          ),
          $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
            $("<div class='content' style='width:88%; height:auto;'>").append(
              $("<div class='row' style='max-width: 100%;'>").append(
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                  $("<div class='card rounded-bottom-1'>").append(
                    $("<div class='image' style='width:100%; height:85%;'>").append(
                      $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                        $("<img class='object-fit-contain' src='" + base_url + "public/img/salas/card-sofacama.webp' alt=''>")
                      )
                    ),
                    $("<div class='boton' style='width:100%; height:15%;'>").append(
                      $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                        $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Motos")
                      )
                    )
                  )
                ),
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                          $("<img class='object-fit-contain' src='" + base_url + "public/img/salas/card-salamodular.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                          $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Cuatrimotos")
                        )
                      )
                    )
                  ),
                  $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                          $("<img class='object-fit-contain' src='" + base_url + "public/img/salas/card-sofa.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                          $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Cuatrimotos")
                        )
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
            $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Celulares' data-bs-custom-class='custom-tooltip-class'>").append(
              $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                $("<img src='" + base_url + "public/img/cocinas/sello-comedor.png' alt=''>")
              )
            ),
           
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Tablets' data-bs-custom-class='custom-tooltip-class'>").append(
              $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                $("<img src='" + base_url + "public/img/cocinas/sello-silla.png'  alt=''>")
              )
            ),
            $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Tablets' data-bs-custom-class='custom-tooltip-class'>").append(
                $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                  $("<img src='" + base_url + "public/img/cocinas/sello-vitrina.png' alt=''>")
                )
              ),
            
            
            
            
          ),
          $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
            $("<div class='content' style='width:88%; height:auto;'>").append(
              $("<div class='row' style='max-width: 100%;'>").append(
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                  $("<div class='card rounded-bottom-1'>").append(
                    $("<div class='image' style='width:100%; height:85%;'>").append(
                      $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                        $("<img class='object-fit-contain' src='" + base_url + "public/img/cocinas/comedor-card.webp' alt=''>")
                      )
                    ),
                    $("<div class='boton' style='width:100%; height:15%;'>").append(
                      $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                        $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Comedores")
                      )
                    )
                  )
                ),
                
                $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                          $("<img class='object-fit-contain' src='" + base_url + "public/img/cocinas/silla-card.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                          $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Sillas")
                        )
                      )
                    )
                  ),
                  $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                    $("<div class='card rounded-bottom-1'>").append(
                      $("<div class='image' style='width:100%; height:85%;'>").append(
                        $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                          $("<img class='object-fit-contain' src='" + base_url + "public/img/cocinas/vitrina-card.webp' alt=''>")
                        )
                      ),
                      $("<div class='boton' style='width:100%; height:15%;'>").append(
                        $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                          $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Vitrinas")
                        )
                      )
                    )
                  ),
                  
                
                  
                )
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
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Celulares' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                    $("<img src='" + base_url + "public/img/recamaras/basecama-sello.webp' alt=''>")
                  )
                ),
               
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Tablets' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                    $("<img src='" + base_url + "public/img/recamaras/sello-buro.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Laptops' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/laptop'>").append(
                    $("<img src='" + base_url + "public/img/recamaras/sello-ropero.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Televisiones' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                    $("<img src='" + base_url + "public/img/recamaras/sello-cabecera.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Bocinas' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/bocinas'>").append(
                    $("<img src='" + base_url + "public/img/recamaras/sello-recamara.png' alt=''>")
                  )
                ),
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Bocinas' data-bs-custom-class='custom-tooltip-class'>").append(
                    $("<a href='" + base_url + "index.php/secciones/bocinas'>").append(
                      $("<img src='" + base_url + "public/img/recamaras/sello-colchon.png' alt=''>")
                    )
                  )
              ),
          
              $("<div class='sellosd d-md-none d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='content-sello d-flex' style='width:70%;'>").append(
                 
                  $("<div class='sello ms-4 rounded-5'>").append(
                    $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                      $("<img src='" + base_url + "public/img/electronica/sello-tv.png' alt=''>")
                    )
                  ),
                  $("<div class='sello ms-5 rounded-5'>").append(
                    $("<a href='" + base_url + "index.php/secciones/bocinas'>").append(
                      $("<img src='" + base_url + "public/img/electronica/sello-bocina.png' alt=''>")
                    )
                  )
                  
                )
              ),
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                $("<div class='content' style='width:88%; height:auto;'>").append(
                  $("<div class='row' style='max-width: 100%;'>").append(
                    
                    $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                      $("<div class='card rounded-bottom-1'>").append(
                        $("<div class='image' style='width:100%; height:85%;'>").append(
                          $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                            $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-lavadora.webp' alt=''>")
                          )
                        ),
                        $("<div class='boton' style='width:100%; height:15%;'>").append(
                          $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                            $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Lavadora")
                          )
                        )
                      )
                    ),
                    
                    $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-estufa.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Estufa")
                            )
                          )
                        )
                      ),
                    
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/laptop'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-microondas.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/laptop'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Microondas")
                            )
                          )
                        )
                      ),
                   
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/licuadora.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Licuadora")
                            )
                          )
                        )
                      ),

                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-parrilla.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Parrilla")
                            )
                          )
                        )
                      ),
             
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/electronica/bocinas'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-secadora.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/electronica/bocinas'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Secadora")
                            )
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
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Celulares' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                    $("<img src='" + base_url + "public/img/electrodomesticos/estufa.png' alt=''>")
                  )
                ),
               
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Tablets' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                    $("<img src='" + base_url + "public/img/electrodomesticos/microondas.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Laptops' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/laptop'>").append(
                    $("<img src='" + base_url + "public/img/electrodomesticos/licuadora.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Televisiones' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                    $("<img src='" + base_url + "public/img/electrodomesticos/parrilla.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Bocinas' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/bocinas'>").append(
                    $("<img src='" + base_url + "public/img/electrodomesticos/secadora.png' alt=''>")
                  )
                ),
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Bocinas' data-bs-custom-class='custom-tooltip-class'>").append(
                    $("<a href='" + base_url + "index.php/secciones/bocinas'>").append(
                      $("<img src='" + base_url + "public/img/electrodomesticos/lavadora.png' alt=''>")
                    )
                  )
              ),
          
              $("<div class='sellosd d-md-none d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='content-sello d-flex' style='width:70%;'>").append(
                 
                  $("<div class='sello ms-4 rounded-5'>").append(
                    $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                      $("<img src='" + base_url + "public/img/electronica/sello-tv.png' alt=''>")
                    )
                  ),
                  $("<div class='sello ms-5 rounded-5'>").append(
                    $("<a href='" + base_url + "index.php/secciones/bocinas'>").append(
                      $("<img src='" + base_url + "public/img/electronica/sello-bocina.png' alt=''>")
                    )
                  )
                  
                )
              ),
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                $("<div class='content' style='width:88%; height:auto;'>").append(
                  $("<div class='row' style='max-width: 100%;'>").append(
                    
                    $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                      $("<div class='card rounded-bottom-1'>").append(
                        $("<div class='image' style='width:100%; height:85%;'>").append(
                          $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                            $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-lavadora.webp' alt=''>")
                          )
                        ),
                        $("<div class='boton' style='width:100%; height:15%;'>").append(
                          $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                            $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Lavadora")
                          )
                        )
                      )
                    ),
                    
                    $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-estufa.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Estufa")
                            )
                          )
                        )
                      ),
                    
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/laptop'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-microondas.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/laptop'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Microondas")
                            )
                          )
                        )
                      ),
                   
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/licuadora.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Licuadora")
                            )
                          )
                        )
                      ),

                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-parrilla.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Parrilla")
                            )
                          )
                        )
                      ),
             
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/electronica/bocinas'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electrodomesticos/card-secadora.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/electronica/bocinas'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Secadora")
                            )
                          )
                        )
                      )
                    )
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
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Celulares' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                    $("<img src='" + base_url + "public/img/electronica/sello-phone.webp' alt=''>")
                  )
                ),
               
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Tablets' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                    $("<img src='" + base_url + "public/img/electronica/sello-ipad.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Laptops' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/laptop'>").append(
                    $("<img src='" + base_url + "public/img/electronica/sello-laptop.webp' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Televisiones' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                    $("<img src='" + base_url + "public/img/electronica/sello-tv.png' alt=''>")
                  )
                ),
                
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Bocinas' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/bocinas'>").append(
                    $("<img src='" + base_url + "public/img/electronica/sello-bocina.png' alt=''>")
                  )
                )
              ),
          
              $("<div class='sellosd d-md-none d-flex justify-content-center' style='background-color:#F2F3F4;'>").append(
                $("<div class='content-sello d-flex' style='width:70%;'>").append(
                 
                  $("<div class='sello ms-4 rounded-5'>").append(
                    $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                      $("<img src='" + base_url + "public/img/electronica/sello-tv.png' alt=''>")
                    )
                  ),
                  $("<div class='sello ms-5 rounded-5'>").append(
                    $("<a href='" + base_url + "index.php/secciones/bocinas'>").append(
                      $("<img src='" + base_url + "public/img/electronica/sello-bocina.png' alt=''>")
                    )
                  )
                )
              ),
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                $("<div class='content' style='width:88%; height:auto;'>").append(
                  $("<div class='row' style='max-width: 100%;'>").append(
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                      $("<div class='card rounded-bottom-1'>").append(
                        $("<div class='image' style='width:100%; height:85%;'>").append(
                          $("<a onclick=\"identificador('CE');\">").append(
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
                            $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electronica/sello-ipad.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Tablets")
                            )
                          )
                        )
                      ),
                    
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/laptop'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electronica/sello-laptop.webp' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/laptop'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Laptops")
                            )
                          )
                        )
                      ),
                   
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electronica/sello-tv.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/televisiones'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Televisiones")
                            )
                          )
                        )
                      ),
             
                      $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/electronica/bocinas'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/electronica/sello-bocina.png' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/electronica/bocinas'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Bocinas")
                            )
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
                $("<div class='sello rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Celulares' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                    $("<img src='" + base_url + "public/img/motos/sello-cuatrimoto.png' alt=''>")
                  )
                ),
               
                $("<div class='sello d-none d-md-flex ms-5 rounded-5' data-bs-toggle='tooltip' data-bs-placement='bottom' data-bs-title='Tablets' data-bs-custom-class='custom-tooltip-class'>").append(
                  $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                    $("<img src='" + base_url + "public/img/motos/sello-motoneta.png' alt=''>")
                  )
                ),
                
                
                
                
              ),
              $("<div class='content d-flex justify-content-center' style='width:100%; height:auto;'>").append(
                $("<div class='content' style='width:88%; height:auto;'>").append(
                  $("<div class='row' style='max-width: 100%;'>").append(
                    
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                      $("<div class='card rounded-bottom-1'>").append(
                        $("<div class='image' style='width:100%; height:85%;'>").append(
                          $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                            $("<img class='object-fit-contain' src='" + base_url + "public/img/motos/portada.webp' alt=''>")
                          )
                        ),
                        $("<div class='boton' style='width:100%; height:15%;'>").append(
                          $("<a href='" + base_url + "index.php/secciones/telefonos'>").append(
                            $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Motos")
                          )
                        )
                      )
                    ),
                    
                    $("<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>").append(
                        $("<div class='card rounded-bottom-1'>").append(
                          $("<div class='image' style='width:100%; height:85%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                              $("<img class='object-fit-contain' src='" + base_url + "public/img/motos/cuatri.jpg' alt=''>")
                            )
                          ),
                          $("<div class='boton' style='width:100%; height:15%;'>").append(
                            $("<a href='" + base_url + "index.php/secciones/tablets'>").append(
                              $("<button class='btn botun rounded-bottom-1' style='width:100%; height:100%;'>").text("Cuatrimotos")
                            )
                          )
                        )
                      ),
                    
                      
                    )
                  )
                )
              );
          
         
          $("#mainget").append($section);
          
        break;
}
function separador(identificador){
    localStorage.setItem("identificador", identificador);
    window.location.href = base_url + "index.php/principal/productos"
}