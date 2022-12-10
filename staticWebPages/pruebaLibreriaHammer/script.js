/*Funcion de despliegue del menu*/
let hammer = new Hammer(document.body),
    menu = document.getElementById('nav'),
    message = document.getElementById('message');

hammer.on('swipeleft swiperight', function(event) {
    let type = event.type;
    if (type === 'swipeleft')  {
        menu.style.display="none"
        console.log("Swipe left to right for open");
    }
    
    else if (type === 'swiperight') {
        menu.style.display="block";
        console.log("Swipe right to left for open");
    }
    
});

/*--------------------------------------*/
let contenidoInicio = document.getElementById("contenidoInicio");
let contenidoProductos = document.getElementById("contenidoProductos");
let contenidoQuienes = document.getElementById("contenidoQuienesSomos");
let contenidoFaQ = document.getElementById("contenidoFaQ");

function mostrarInicio(){
    contenidoInicio.style.display = "block";
    contenidoProductos.style.display = "none";
    contenidoQuienes.style.display = "none";
    contenidoFaQ.style.display = "none";
}

function mostrarProductos(){
    contenidoInicio.style.display = "none";
    contenidoProductos.style.display = "block";
    contenidoQuienes.style.display = "none";
    contenidoFaQ.style.display = "none";
}
function mostrarQuienes(){
    contenidoInicio.style.display = "none";
    contenidoProductos.style.display = "none";
    contenidoQuienes.style.display = "block";
    contenidoFaQ.style.display = "none";
}
function mostrarFaQ(){
    contenidoInicio.style.display = "none";
    contenidoProductos.style.display = "none";
    contenidoQuienes.style.display = "none";
    contenidoFaQ.style.display = "block";
}


/*let contentActive = document.getElementById("linkProductos");*/
/*let contentActive = document.querySelector("#linkProductos");*/
/*let link = document.getComputedStyle(contentActive,":active");
console.log(contentActive);
console.log(link);*/
/*contentActive.style.active = */

/*Hammer(containerElement).on("drag",function(event){
    alert("drag!!");
});
*/

/*var containerElement = document.getElementById('nav');
var activeRegion = ZingTouch.Region(containerElement);*/
