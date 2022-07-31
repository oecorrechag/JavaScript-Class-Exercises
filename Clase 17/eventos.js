var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

//alert("todo bien")
//console.log('todo bien en consola')

// para saber el keyCode
// document.addEventListener("keydown", pruebaconsola);
document.addEventListener("mousemove", pruebaconsola);
function pruebaconsola(evento){
    console.log(evento);
}

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d');

var x = 150;
var y = 150;

// dibujarLinea('red', 100,100,200,200, papel);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado(evento){

    var colorcito = 'blue';
    var movimiento = 5;

    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
    }
    switch(evento.keyCode){
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
    }
    switch(evento.keyCode){
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
    }
    switch(evento.keyCode){
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
    }


}






