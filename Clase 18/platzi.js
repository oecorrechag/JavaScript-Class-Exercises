var vp = document.getElementById('villaplatzi');
var papel = vp.getContext('2d');

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};



// agregar imagen al canvas, se guarda la tile en fondo y la funcion dibujar la pone
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', cargarPollo);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar()
}
function cargarVacas(){
    vaca.cargaOK = true;
    dibujar()
}
function cargarCerdo(){
    cerdo.cargaOK = true;
    dibujar()
}
function cargarPollo(){
    pollo.cargaOK = true;
    dibujar()
}

var cantidad_vacas = aleatorio(0,5);
var cantidad_cerdos = aleatorio(0,2);
var cantidad_pollos = aleatorio(0,15);

function dibujar(){

    if(fondo.cargaOK == true){
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if(vaca.cargaOK == true){
        console.log('vacas' + cantidad_vacas)
        for(var v=0; v<= cantidad_vacas; v++){
            var x = (aleatorio(0, 8) * 50);
            var y = (aleatorio(0, 8) * 50);
            papel.drawImage(vaca.imagen, x, y);
        }
    }

    if(cerdo.cargaOK == true){
        console.log('cerdos' + cantidad_cerdos)
        for(var v=0; v<= cantidad_cerdos; v++){
            var x = (aleatorio(0, 8) * 50);
            var y = (aleatorio(0, 8) * 50);
            papel.drawImage(cerdo.imagen, x, y);
        }
    }

    if(pollo.cargaOK == true){
        console.log('pollos' + cantidad_pollos)
        for(var v=0; v<= cantidad_pollos; v++){
            var x = (aleatorio(0, 8) * 50);
            var y = (aleatorio(0, 8) * 50);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}




function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}






// var z;

// for(var i=0; i<10; i++){
//     var z = aleatorio(10,20);
//     document.write(z + ', ')
// }