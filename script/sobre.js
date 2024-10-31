/* ---------------------------------
SOBRE
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

// Slider de videos
let slider = document.getElementById('slider');
let diapositiva = document.querySelector('.slider__slide');
let botonAtrasVideos = document.getElementById('flechaPrevious');
let botonDelanteVideos = document.getElementById('flechaNext');

// Carousel de Ingredientes
let botonDelanteIngredientes = document.getElementById('proxima');
let botonAtrasIngredientes = document.getElementById('anterior');
let botonPausarIngredientes = document.getElementById('pausa');
let arrayBotones = document.getElementsByClassName("contenedor__boton");
let posicion = 0;
let estaPausado = false;
let intervalo = setInterval(proximaImagen,3000);
let arrayImagenes = [
    'images/limon.jpg', 
    'images/matcha.jpg', 
    'images/almendras.jpg', 
    'images/agave.jpg', 
    'images/sal.jpg', 
    'images/oliva.jpg', 
    'images/yogur.jpg', 
    'images/datiles.jpg', 
    'images/coco.jpg'];
let arrayTextos = [
    'Limón: Refuerza el sistema inmunológico gracias a su alto contenido de vitamina C, aumenta la energía, ayuda a la concentración con antioxidantes como flavonoides y carotenoides que mejoran la circulación, favorece la eliminación de toxinas',
    'Matcha: Aumenta el enfoque y la claridad mental con el aminoácido L-teanina, aporta antioxidantes que combaten el estrés oxidativo y ayudan a la longevidad, estimula el metabolismo, protege frente a problemas cardiovasculares',
    'Almendras: Aportan proteínas y grasas saludables para una energía sostenida sin picos de azúcar, mejoran la memoria y la concentración gracias a su contenido en vitamina E y antioxidantes, mantienen los niveles de colesterol en equilibrio',
    'Agave: Ayuda al cuerpo a eliminar el exceso de sal y agua naturalmente y endulza naturalmente sin provocar altibajos de energía con un bajo índice glucémico y alto en inulina, una fibra prebiótica que favorece la salud intestinal',
    'Sal marina: Rica en minerales esenciales vitales para el equilibrio corporal como magnesio y calcio, apoya la función muscular y nerviosa para mantener la mente y el cuerpo en armonía, estimula la circulación y promueve una piel revitalizada',
    'Aceite de oliva: Protege las células del daño y el envejecimiento con polifenoles y vitamina E, mejora la memoria y la salud cerebral gracias a sus ácidos grasos omega-3 y omega-6, beneficia al corazón al reducir el colesterol malo (LDL)',
    'Yogur griego: Aporta proteínas de alta calidad esenciales para la reparación y el fortalecimiento muscular, contribuye al equilibrio intestinal para mejorar el bienestar digestivo y ánimo y reduce la ansiedad siendo rica en probióticos',
    'Dátiles: Fuente de energía natural, perfecta para una inyección rápida de vitalidad; alivian el estrés gracias a su contenido de vitaminas del grupo B y triptófano, precursor de la serotonina; favorecen la digestión con su fibra natural',
    'Coco: Rica en ácidos grasos de cadena media que se convierten en energía de forma rápida, apoya el sistema inmunológico gracias a las propiedades antimicrobianas de ácido láurico, mejora la piel y el cabello con nutrientes esenciales'];

/* FUNCIONES */

// Funcion para manejar otras funciones
function handleEvents() {

    // Header: Al hacer clic en un boton, se abe o se cierra el header responsive
    botonAbrirHeader.addEventListener('click', abreCortina);
    botonCerrarHeader.addEventListener('click', cierraCortina);

    // Slider: Al hacer clic, se adelanta o se va hacia atras el slider de videos
    botonDelanteVideos.addEventListener('click', adelanteVideos);
    botonAtrasVideos.addEventListener('click', detrasVideos);

    // Carousel: Al hacer clic, se adelanta, se va hacia atras, se pausa o se puede elegir una imagen en específico del carousel de imagenes
    botonDelanteIngredientes.addEventListener('click', proximaImagen);
    botonAtrasIngredientes.addEventListener('click', anteriorImagen);
    botonPausarIngredientes.addEventListener('click', pausarCarousel);
    for (let i = 0; i < arrayBotones.length; i++) {
        arrayBotones[i].addEventListener('click', elegirImagen);
    }

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
function adelanteVideos() {

    let diapositivaAncho = diapositiva.clientWidth;
    slider.scrollLeft = slider.scrollLeft + diapositivaAncho;

}

// Funcion para hacer scroll a la izquierda del slider
function detrasVideos() {

    let diapositivaAncho = diapositiva.clientWidth;
    slider.scrollLeft = slider.scrollLeft - diapositivaAncho;

}

// Funcion para pausar carousel de fotos
function pausarCarousel () {

    if (estaPausado == false) {

        clearInterval(intervalo);
        estaPausado = true;
        
    } else {

        intervalo = setInterval(proximaImagen,2000);
        estaPausado = false;

    }

}

// Funcion para volver al inicio al llegar a la ultima foto del carousel
function proximaImagen() {

    posicion = posicion + 1;

    if (posicion == 9) {

        posicion = 0;

    }

    let imagen = document.getElementById('imagen');

    imagen.src = arrayImagenes[posicion];

    let texto = document.getElementById('texto');

    texto.innerHTML = arrayTextos[posicion];

    let arrayBotones = document.getElementsByClassName('contenedor__boton')

    for (let i = 0; i < arrayBotones.length; i++) {

        if (i == posicion) {

            arrayBotones[i].style.opacity = '1';

        } else {

            arrayBotones[i].style.opacity = '0.5';

        }

    }

}

// Funcion para volver al final al pasar por la primera foto del carousel
function anteriorImagen() {

    posicion = posicion - 1;

    if (posicion == -1) {

        posicion = 8;

    }

    let imagen = document.getElementById('imagen');

    imagen.src = arrayImagenes[posicion];

    let texto = document.getElementById('texto');

    texto.innerHTML = arrayTextos[posicion];

    let arrayBotones = document.getElementsByClassName('contenedor__boton')
    
    for (let i = 0; i < arrayBotones.length; i++) {

        if (i == posicion) {

            arrayBotones[i].style.opacity = '1';

        } else {

            arrayBotones[i].style.opacity = '0.5';

        }

    }

}

// Funcion para ir a una imagen específica del carousel al hacer clic en el boton correspondiente
function elegirImagen(e) {

    let valorBoton = e.target.value;

    for (let i = 0; i < arrayBotones.length; i++) {

        if (valorBoton == i) {

            arrayBotones[i].style.opacity = '1';

        } else {

            arrayBotones[i].style.opacity = '0.5';

        }

    }

    posicion = parseInt(valorBoton);

    let imagen = document.getElementById('imagen');

    imagen.src = arrayImagenes[posicion];

}

// Al cargar la pagina, se ejecutan las funciones
window.onload = handleEvents;
