/* ---------------------------------
CONTACTO
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

// Form de contacto
let form = document.getElementById('contacto');

// Modal
let botonEnviar = document.getElementById('env')
let botonCerrar = document.getElementById('cer');


/* FUNCIONES */

// Funcion para manejar otras funciones
function handleEvents () {

    // Header: Al hacer clic en un boton, se abe o se cierra el header responsive
    botonAbrirHeader.addEventListener('click', abreCortina);
    botonCerrarHeader.addEventListener('click', cierraCortina);

    // Form: No se envia el formulario hasta que el usuario quiera
    form.addEventListener('submit', noEnviarFormulario);

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

// Funcion para que no enviar el formulario antes de elegir enviarlo
function noEnviarFormulario(e){

    e.preventDefault(); 

}

// Funcion para aparecer modal después de hacer clic en boton para enviar el formulario
function abrirModal (){
        
    let modal = document.getElementById('modal');
    
    // Verificar que los campos requeridos estén completos:
    if (form.checkValidity()) {

        modal.style.display = 'flex'; // mostrar modal

    } else {

        // no mostrar modal
        
    }
}

// Funcion para cerrar modal al hacer click en boton x (cerrar)
function cerrarModal (){
    
    let modal = document.getElementById('modal');
    
    modal.style.display = 'none';
    
}

// Al cargar la pagina, se ejecutan las funciones
window.onload = handleEvents;