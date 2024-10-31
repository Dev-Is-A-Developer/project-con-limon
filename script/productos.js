/* ---------------------------------
PRODUCTOS
Estructura:
- Variables globales
- Funciones para los eventos
- Función para ejecutar las funciones
--------------------------------- */

/* VARIABLES */

// Header y Responsive Header
let botonAbrirHeader = document.getElementById('botonAbreCortina');
let botonCerrarHeader = document.getElementById('botonCierraCortina');
let nav = document.getElementById('navegacion');

// Boton Volver Arriba
const botonVolverArriba = document.getElementById("botonArriba");

/* FUNCIONES */

// Funcion para mostrar boton de volver arriba cuando el usuario hace scroll hasta 100px desde "top"
window.onscroll = function() {
  
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {

        botonVolverArriba.style.display = "block";
    
    } else {
    
        botonVolverArriba.style.display = "none";

    }

};

// Funcion para volver arriba cuando el usuario hace clic en el boton de volver arriba
botonVolverArriba.addEventListener("click", function() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// Funcion para manejar otras funciones (de onload)
function handleEvents() {
    
    // Header: Al hacer clic en un boton, se abe o se cierra el header responsive
    botonAbrirHeader.addEventListener('click', abreCortina);
    botonCerrarHeader.addEventListener('click', cierraCortina);

}

// Funcion para abrir la cortina (menu responsive) cuando se hace clic en el boton
function abreCortina () {

    nav.style.width = '100%' // width de 0% a 100%
  
}

// Funcion para esconder la cortina (menu responsive) cuando se hace clic en el boton
function cierraCortina () {
 
    nav.style.width = '0' // width de 100% a 0%
  
}

// Al cargar la pagina, se ejecutan las funciones de abreCortina y cierraCortina
window.onload = handleEvents;