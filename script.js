let menuVisible = false;

// Función para ocultar o mostrar el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculta el menú despues de que se selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}