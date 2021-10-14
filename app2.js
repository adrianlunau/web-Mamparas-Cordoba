window.onload = function () {
    // Variables
    const imagenes = [
        "./img/carr-1.jpg",
        "./img/carr-2.jpg",
        "./img/carr-3.jpg"
        
    ];

    const timpoIntervalo = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector("#retroceder");
    let $botonAvanzar = document.querySelector("#avanzar");
    let $imagen = document.querySelector("#imagen");
    let $botonPlay = document.querySelector("#play");
    let $botonStop = document.querySelector("stop");
    
    let intervalo;

    //Funciones

    //Funcion cambia la imagen a la siguiente posicion

    function pasarFoto() {
        if(posicionActual >= imagenes.length -1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    //Funcion que cambia la foto en la anterior posicion

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = imagenes.length -1;

        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    //Funcion que renderiza la imagen

    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${imagenes[posicionActual]})`
    }

    //Activa el autoplay

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, timpoIntervalo);
        //desactivamos los botones de control
        $botonAvanzar.setAttribute("disabled", true);
        $botonRetroceder.setAttribute("disabled", true);
        $botonPlay.setAttribute("disabled", true);
        $botonStop.removeAttribute("disabled")
    }

    //Para el autoplay
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    //Eventos
    $botonAvanzar.addEventListener("click", pasarFoto);
    $botonRetroceder.addEventListener("click", retrocederFoto);
    $botonPlay.addEventListener("click", playIntervalo);
    $botonStop.addEventListener("click", stopIntervalo);
    // Iniciar
    renderizarImagen();
    playIntervalo();
}


// ---------------------------------------------------------

// Funciones para el menu hamburguesa

let $botonHamburguesa = document.querySelector("#boton-hamburguesa")
let $menuNav = document.querySelector("#menuNav")

function desplegarMenu (e) {
    e.preventDefault()

    if ($menuNav.classList.contains("open")){
        $menuNav.classList.remove("open")
        console.log("open");
    } else {
        $menuNav.classList.add("open")
    }
}

// Eventos
$botonHamburguesa.addEventListener("click", desplegarMenu)