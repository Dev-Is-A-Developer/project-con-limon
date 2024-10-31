/* ---------------------------------
CARRITO
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

// Eliminar productos del carrito
let buttonsEliminar = document.querySelectorAll('.carritoCard__boton');


/* FUNCIONES */

// Funcion para manejar otras funciones
function handleEvents() {

    // Header: Al hacer clic en un boton, se abe o se cierra el header responsive
    botonAbrirHeader.addEventListener('click', abreCortina);
    botonCerrarHeader.addEventListener('click', cierraCortina);

    // Eliminar productos: Al hacer clic, se elimina el producto del carrito correspondiente el boton
    buttonsEliminar.forEach(button => {
        button.addEventListener('click', eliminarProducto);
    });

}

// Funcion para abrir la cortina (menu responsive) cuando se hace clic en el boton
function abreCortina () {

    nav.style.width = '100%' // width de 0% a 100%

}

// Funcion para esconder la cortina (menu responsive) cuando se hace clic en el boton
function cierraCortina () {
   
    nav.style.width = '0' // width de 100% a 0%

}

// Funcion para eliminar producto buscando el article padre con la clase 'carrito__card' para eliminarlo
function eliminarProducto(e) {

    const articleToRemove = e.target.closest('.carrito__carritoCard');

    if (articleToRemove) {
        articleToRemove.remove();
    }

}

/* Al cargar la pagina, se ejecuta las funciones */
window.onload = handleEvents;