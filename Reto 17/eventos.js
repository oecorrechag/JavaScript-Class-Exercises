// alert("todo bien")
// console.log('todo bien en consola')

// para saber el keyCode
// document.addEventListener("keydown", pruebaconsola);
// document.addEventListener("mousemove", pruebaconsola);
// function pruebaconsola(evento){
//    console.log(evento);
// }

var canvas = document.getElementById("canvas");
var papel = canvas.getContext('2d');
var coordenadas = canvas.getBoundingClientRect();
var x = 0, y = 0, dibujando = false, color = 'red', grosor = 2;

function defcolor(c){
    color = c;
}

function defgrosor(g){
    grosor = g;
}

canvas.addEventListener("mousedown", function(e){
    x = e.clientX - coordenadas.left;
    y = e.clientY - coordenadas.top;
    dibujando = true;
});

canvas.addEventListener("mousemove", function(e){
    if(dibujando == true){
        dibujar(x, y, e.clientX - coordenadas.left, e.clientY - coordenadas.top, papel);
        x = e.clientX - coordenadas.left;
        y = e.clientY - coordenadas.top;
    }
});

canvas.addEventListener("mouseup", function(e){
    if(dibujando == true){
        dibujar(x, y, e.clientX - coordenadas.left, e.clientY - coordenadas.top, papel);
        x = 0;
        y = 0;
        dibujando = false;
    }
    {
        console.log(e);
    }
});


function dibujar(xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

