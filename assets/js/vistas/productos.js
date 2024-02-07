var productos = localStorage.getItem("productos");
switch (productos) {
    // ELECTRODOMESTICOS
        case "MI":
            var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
            var product=`Microondas`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufa</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrilas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "ES":
            var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
            var product=`Estufas`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\">Microondas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrilas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "PA":
            var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
            var product=`Parrillas`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\"">Microondas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "LI":
            var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
            var product=`Licuadoras`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrillas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\">Microondas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "REF":
            var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
            var product=`Refrigeradores`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrillas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\">Microondas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "LAV":
            var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
            var product=`Lavadoras`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrillas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\">Microondas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SE');\">Secadoras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "SE":
            var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electrodomesticos</a>`;
            var product=`Secadoras`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('ES');\">Estufas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('PA');\"">Parrillas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MI');\">Microondas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LI');\">Licuadoras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('REF');\">Refrigeradores</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LAV');\">Lavadoras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
    
    //  ELECTRONICA
        case "CE":
            var categorylink=`<a href="#" onclick="showCategory('electronica');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electronica</a>`;
            var product=`Celulares`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TA');\">Tablets</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LA');\"">Laptops</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TE');\">Televisiones</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BO');\">Bocinas</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "TA":
            var categorylink = `<a href="#" onclick="showCategory('electronica');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electronica</a>`;
            var product=`Tablets`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CE');\">Celulares</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LA');\"">Laptops</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TE');\">Televisiones</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BO');\">Bocinas</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "LA":
            var categorylink = `<a href="#" onclick="showCategory('electronica');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electronica</a>`;
            var product=`Laptops`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CE');\">Celulares</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TA');\"">Tablets</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TE');\">Televisiones</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BO');\">Bocinas</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "TE":
            var categorylink=`<a href="#" onclick="showCategory('electronica');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electronica</a>`;
            var product=`Televisiones`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CE');\">Celulares</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TA');\"">Tablets</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LA');\">Laptops</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BO');\">Bocinas</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "BO":
            var categorylink=`<a href="#" onclick="showCategory('electronica');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Electronica</a>`;
            var product=`Bocinas`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CE');\">Celulares</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TA');\"">Tablets</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('LA');\">Laptops</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('TE');\">Televisiones</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
    // RECAMARAS
        case "CO":
            var categorylink=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
            var product=`Colchones`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CA');\">Cabeceras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BA');\"">Bases cama</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BU');\">Buros</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RO');\">Roperos</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RE');\">Recamaras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "CA":
            var categorylink=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
            var product=`Cabeceras`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CO');\">Colchones</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BA');\"">Bases cama</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BU');\">Buros</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RO');\">Roperos</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RE');\">Recamaras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "BA":
            var categorylink=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
            var product=`Bases cama`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CO');\">Colchones</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CA');\"">Cabeceras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BU');\">Buros</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RO');\">Roperos</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RE');\">Recamaras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "BU":
            var categorylink=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
            var product=`Buros`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CO');\">Colchones</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CA');\"">Cabeceras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BA');\">Bases cama</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RO');\">Roperos</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RE');\">Recamaras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "RO":
            var categorylink=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
            var product=`Roperos`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CO');\">Colchon</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CA');\"">Cabeceras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BA');\">Bases cama</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BU');\">Buros</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RE');\">Recamaras</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "RE":
            var link=`<a href="#" onclick="showCategory('recamaras');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Recamaras</a>`;
            var product=`Recamaras`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CO');\">Colchon</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CA');\"">Cabeceras</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BA');\">Bases cama</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('BU');\">Buros</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('RO');\">Roperos</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
    // Salas
        case "SO":
            var categorylink=`<a href="#" onclick="showCategory('salas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Salas</a>`;
            var product=`Sofas`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SA');\">Salas modular</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SCA');\"">Sofa camas</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "SA":
            var categorylink=`<a href="#" onclick="showCategory('salas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Salas</a>`;
            var product=`Salas modular`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SO');\">Sofas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SCA');\"">Sofa camas</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "SCA":
            var categorylink=`<a href="#" onclick="showCategory('salas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Salas</a>`;
            var product=`Sofa camas`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SO');\">Sofas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SA');\"">Salas modular</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
    // Cocinas
        case "COM":
            var categorylink=`<a href="#" onclick="showCategory('cocinas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Cocinas</a>`;
            var product=`Comedores`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SI');\">Sillas</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('VI');\"">Vitrinas</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "SI":
            var categorylink=`<a href="#" onclick="showCategory('cocinas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Cocinas</a>`;
            var product=`Sillas`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('COM');\">Comedores</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('VI');\"">Vitrinas</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "VI":
            var categorylink=`<a href="#" onclick="showCategory('cocinas');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Cocinas</a>`;
            var product=`Vitrinas`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('COM');\">Comedores</a>
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('SI');\"">Sillas</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
    //Motos
        case "MO":
            var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Motos</a>`;
            var product=`Motos`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('CUA');\">Cuatrimotos</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
        case "CU":
            var categorylink=`<a href="#" onclick="showCategory('motos');" onclick="" class="breadcrumb-item" style="color:black; text" id="category">Motos</a>`;
            var product=`Cuatrimotos`;
            var links=`
            <a class="link pt-1 ps-1 link-offset-2 link-underline link-underline-opacity-0 " style="font-size:14px;" href="#" onclick=\"separador('MOT');\">Motos</a>
            `;
    
            $("#categorylink").append(categorylink);
            $("#product").append(product);
            $("#links").append(links);
            break;
    }
    