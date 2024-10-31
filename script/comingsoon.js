/* ---------------------------------
COMING SOON (EVENTOS)
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

// Animacion del intro
let capa = document.querySelector('.capaIntro');
let logo = document.querySelector('.capaIntro__texto')
let palabras = document.querySelectorAll('.capaIntro__textoPalabra');

// Lateral Scroll
let contenedorScroll = document.querySelector('.scroll');

/* FUNCIONES */ 

// Funcion para manejar otras funciones
function handleEvents() {

    // Header: Al hacer clic en un boton, se abe o se cierra el header responsive
    botonAbrirHeader.addEventListener('click', abreCortina);
    botonCerrarHeader.addEventListener('click', cierraCortina);

    // Animacion: Al cargar la página, se hace una animación de intro de "coming soon"
    hacerAnimacion();

    // Lateral Scroll: Al hacer scroll, se va el contenido centrado en la página hacia la izquierda
    contenedorScroll.addEventListener('wheel', hacerScroll);

}

// Funcion para abrir la cortina (menu responsive) cuando se hace clic en el boton
function abreCortina () {

    nav.style.width = '100%' // width de 0% a 100%

}

// Funcion para esconder la cortina (menu responsive) cuando se hace clic en el boton
function cierraCortina () {
   
    nav.style.width = '0' // width de 100% a 0%

}

// Funcion para ejecutar la animacion de una pantalla de intro con animaciones al cargar
function hacerAnimacion() {

    // Se ejecuta un for loop para añadir la clase 'entrada' para mostrar el nombre de la marca
    for (let i = 0; i < palabras.length; i++) {

        setTimeout(()=>{

            palabras[i].classList.add('entrada');

        }, i*500); // se tarda en volver a hacer el loop para que venga más tarde la segunda palabra

    }

    // Después de 2.2 segundos, se ejecuta un for loop para cambiar la clase 'entrada' a 'salida' para que se vaya el nombre
    setTimeout(() => {

        for (let i = 0; i < palabras.length; i++) {

            setTimeout(() => {

                palabras[i].classList.remove('entrada');
                palabras[i].classList.add('salida');

            }, i*50) // se tarda en volver a hacer el loop para que vaya un poco más tarde la segunda palabra

        }
        
    },2500)

    // La capa se va para arriba despues de la salida de las palabras
    setTimeout(() => {

        capa.style.top = '-100vh';

    },3000)

    // No se puede hacer scroll hasta terminar el intro, 4 segundos
    setTimeout(() => {

        document.body.style.overflow = 'auto';

    },4000)

}

// Funcion para mover el texto del lateral scroll a la izquierda al hacer scroll hacia abajo
function hacerScroll(e) {

    e.preventDefault();

    contenedorScroll.scrollLeft = contenedorScroll.scrollLeft + e.deltaY;

}

// Al cargar la pagina, se ejecutan las funciones
window.onload = handleEvents;
