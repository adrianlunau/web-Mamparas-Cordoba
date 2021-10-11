window.onload = function () {
    // Variables
    const imagenes = [
        "./img/carr-1.jpg",
        "./img/carr-2.jpg",
        "./img/carr-3.jpg"
        
    ];

    const timpoIntervalo = 3000;
    let posicionActual = 0;
    
    let $imagen = document.querySelector("#imagen");
    
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
        
    }    

    
    // Iniciar
    renderizarImagen();
    playIntervalo();
}
