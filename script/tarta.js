/* ---------------------------------
TARTA
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

// Modal
let botonEnviar = document.getElementById('add')
let botonCerrar = document.getElementById('cer');


/* FUNCIONES */

// Funcion para manejar otras funciones
function handleEvents() {

    // Header: Al hacer clic en un boton, se abe o se cierra el header responsive
    botonAbrirHeader.addEventListener('click', abreCortina);
    botonCerrarHeader.addEventListener('click', cierraCortina);

    // Accordion: Al hacer clic en el boton correspondiente, se abre el tab (version 1) o accordion (version 2)
    document.getElementById('primerBoton').addEventListener('click', mostrarTab);
    document.getElementById('primerBotonAccordeon').addEventListener('click', mostrarAccordion);

    document.getElementById('segundoBoton').addEventListener('click', mostrarTab);
    document.getElementById('segundoBotonAccordeon').addEventListener('click', mostrarAccordion);

    document.getElementById('tercerBoton').addEventListener('click', mostrarTab);
    document.getElementById('tercerBotonAccordeon').addEventListener('click', mostrarAccordion);

    // Modal: Al hacer clic, se abre o se cierra el modal
    botonEnviar.addEventListener('click', abrirModal)
    botonCerrar.addEventListener('click', cerrarModal);

}

// Funcion para abrir la cortina (menu responsive) cuando se hace clic en el boton
function abreCortina () {

    nav.style.width = '100%' // width de 0% a 100%

}

// Funcion para esconder la cortina (menu responsive) cuando se hace clic en el boton
function cierraCortina () {
   
    nav.style.width = '0' // width de 100% a 0%

}

// Funcion para mostrar tabs de descripción, ingredientes y ocasiones al hacer clic en el boton que corresponda
function mostrarTab (e) {

    let div = document.getElementsByClassName('contenedorTabs');

    for (let i = 0; i < div.length; i++) {
        
        div[i].style.display = 'none';
        
    }

    let value = parseInt(e.target.value);

    div[value].style.display = 'block';

}

// Funcion para mostrar accordion de descripción, ingredientes y ocasiones al hacer clic en el boton que corresponda
function mostrarAccordion (e) {
      
    let textos = document.getElementsByClassName('parrafoAccordeon');
  
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';

    }

    let buttonValue = parseInt(e.target.value); // coger boton por su valor al hacer clic

    textos[buttonValue].style.maxHeight = '20rem'; // mostrar este boton

}

// Funcion para aparecer modal después de hacer clic en boton para enviar el formulario
function abrirModal (){
        
    let modal = document.getElementById('modal');

    modal.style.display = 'flex'; // mostrar modal

}

// Funcion para cerrar modal al hacer click en boton x (cerrar)
function cerrarModal (){
    
    let modal = document.getElementById('modal');
    
    modal.style.display = 'none'; // esconder modal
    
}

// Al cargar la pagina, se ejecutan las funciones
window.onload = handleEvents;