/* ---------------------------------
INICIO
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

// Slider de Productos Destacados
let sliderContenedor = document.getElementById('slider');
let diapositiva = document.querySelector('.slider__slide');
let botonAtrasSlider = document.getElementById('flechaPrevious');
let botonDelanteSlider = document.getElementById('flechaNext');

// Carousel de Imagenes
let botonDelante = document.getElementById('proxima');
let botonAtras = document.getElementById('anterior');
let botonPausar = document.getElementById('pausa');
let posicion = 0;
let estaPausado = false;
let intervalo = setInterval(proximaImagen,2000);
let arrayImagenes = 
    ['images/inicio-fondant-verde.jpg', 
    'images/inicio-mandarina.jpg', 
    'images/inicio-cereza.jpg',
    'images/inicio-frambuesa.jpg',
    'images/inicio-crema.jpg',
    'images/inicio-frutos-rojos.jpg',
    'images/inicio-pomelo.jpg',
    'images/inicio-tartaleta-higo.jpg',
    'images/inicio-frutas-azucar.jpg',
    'images/inicio-vainilla.jpg',
    'images/inicio-melocoton.jpg',
    'images/inicio-fresa.jpg',
    'images/inicio-limon-lavanda.jpg',
    'images/inicio-creme-puffs.jpg',
    'images/inicio-lima.jpg',
    'images/inicio-tartaletas-frambuesa.jpg',
    'images/inicio-zanahoria.jpg',
    'images/inicio-bizcocho.jpg'];


/* FUNCIONES */

// Funcion para manejar otras funciones
function handleEvents() {

    // Header: Al hacer clic en un boton, se abe o se cierra el header responsive
    botonAbrirHeader.addEventListener('click', abreCortina);
    botonCerrarHeader.addEventListener('click', cierraCortina);

    // Slider: Al hacer clic, se adelanta o se va hacia atras el slider de productos destacados
    botonDelanteSlider.addEventListener('click', adelanteSlider);
    botonAtrasSlider.addEventListener('click', detrasSlider);

    // Carousel: Al hacer clic, se adelanta, se va hacia atras o se pausa el carousel de imagenes
    botonDelante.addEventListener('click', proximaImagen);
    botonAtras.addEventListener('click', anteriorImagen);
    botonPausar.addEventListener('click', pausarCarousel);

}

// Funcion para abrir la cortina (menu responsive) cuando se hace clic en el boton
function abreCortina () {

    nav.style.width = '100%' // width de 0% a 100%

}

// Funcion para esconder la cortina (menu responsive) cuando se hace clic en el boton
function cierraCortina () {
   
    nav.style.width = '0' // width de 100% a 0%

}

// Funcion para hacer scroll a la derecha del slider
function adelanteSlider() {

    let diapositivaAncho = diapositiva.clientWidth;
    sliderContenedor.scrollLeft = sliderContenedor.scrollLeft + diapositivaAncho;

}

// Funcion para hacer scroll a la izquierda del slider
function detrasSlider() {

    let diapositivaAncho = diapositiva.clientWidth;
    sliderContenedor.scrollLeft = sliderContenedor.scrollLeft - diapositivaAncho;

}

// Funcion para volver al inicio al llegar a la ultima foto del carousel
function proximaImagen() {

    posicion = posicion + 1;

    if (posicion == 18) {

        posicion = 0;

    }

    let imagen = document.getElementById('imagen');

    imagen.src = arrayImagenes[posicion];

}

// Funcion para volver al final al pasar por la primera foto de carousel
function anteriorImagen() {

    posicion = posicion - 1;

    if (posicion == -1) {

        posicion = 17;

    }

    let imagen = document.getElementById('imagen');

    imagen.src = arrayImagenes[posicion];

}

// Funcion para pausar carousel
function pausarCarousel () {

    if (estaPausado == false) {

        clearInterval(intervalo);
        estaPausado = true;
        
    } else {

        intervalo = setInterval(proximaImagen,2000);
        estaPausado = false;

    }

}

// Al cargar la pagina, se ejecutan las funciones
window.onload = handleEvents;
