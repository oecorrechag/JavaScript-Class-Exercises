var vp = document.getElementById('villaplatzi');
var papel = vp.getContext('2d');

function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false,
    x: [],
    y: [],
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    x:0,
    y:0
};
var pollo = {
    url: "pollo.png",
    cargaOK: false,
    x: [],
    y: [],
};
var oveja = {
    url: "oveja.png",
    cargaOK: false,
    x: [],
    y: [],
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

oveja.imagen = new Image();
oveja.imagen.src = oveja.url;
oveja.imagen.addEventListener('load', cargarOveja);

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
function cargarOveja(){
    oveja.cargaOK = true;
    dibujar()
}

var cantidad_vacas = aleatorio(0,5);
var cantidad_cerdos = aleatorio(0,2);
var cantidad_pollos = aleatorio(0,15);
var cantidad_ovejas = aleatorio(0,10);

function dibujar(){

    if(fondo.cargaOK == true){
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if(vaca.cargaOK == true){
        console.log('vacas' + cantidad_vacas)
        for(var v = 0; v <= cantidad_vacas; v++){
            var x = (aleatorio(0, 8) * 50);
            var y = (aleatorio(0, 8) * 50);
			vaca.x[v] = x;
			vaca.y[v] = y;
            papel.drawImage(vaca.imagen, x, y);
        }
    }

    if(cerdo.cargaOK == true){
        console.log('cerdos' + cantidad_cerdos)
        var x = (aleatorio(0, 8) * 50);
        var y = (aleatorio(0, 8) * 50);
        cerdo.x = x;
        cerdo.y = y;
        papel.drawImage(cerdo.imagen, x, y);
    }

    if(pollo.cargaOK == true){
        console.log('pollos' + cantidad_pollos)
        for(var p = 0; p <= cantidad_pollos; p++){
            var x = (aleatorio(0, 8) * 50);
            var y = (aleatorio(0, 8) * 50);
			pollo.x[p] = x;
			pollo.y[p] = y;
            papel.drawImage(pollo.imagen, x, y);
        }
    }

    if(oveja.cargaOK == true){
        console.log('ovejas' + cantidad_ovejas)
        for(var o = 0; o <= cantidad_ovejas; o++){
            var x = (aleatorio(0, 8) * 50);
            var y = (aleatorio(0, 8) * 50);
			oveja.x[o] = x;
			oveja.y[o] = y;
            papel.drawImage(oveja.imagen, x, y);
        }
    }

}


function moverCerdo(x,y){
	papel.drawImage(cerdo.imagen,x,y);
}



function dibujarOtraVez(){//redibujamos los objetos, solo que sin el ciclo y utilizando los numero aleatorios de la funcion dibujar

	if(fondo.cargaOK){
		papel.drawImage(fondo.imagen , 0 , 0);
	}
    
    if(vaca.cargaOK){
        for(var v = 0; v <= cantidad_vacas; v++){
            papel.drawImage(vaca.imagen , vaca.x[v] , vaca.y[v]);
			console.log(cantidad_vacas);
		}
	 }
    
    if(pollo.cargaOK){
        for( var p = 0; p <= cantidad_pollos; p++){
            papel.drawImage(pollo.imagen , pollo.x[p] , pollo.y[p]);
			console.log(cantidad_pollos);
		}
	 }

     if(oveja.cargaOK){
        for( var o = 0; o <= cantidad_ovejas; o++){
            papel.drawImage(oveja.imagen , oveja.x[o] , oveja.y[o]);
			console.log(cantidad_ovejas);
		}
	 }

}


document.addEventListener("keydown", moverTecla);//identificamos el evento del teclado y restamos o sumamos posicion, segun la tecla 
function moverTecla(evento){
    var movimiento = 5;

    switch (evento.keyCode){
        case teclas.UP:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.y = cerdo.y - movimiento;
        break;
        
        case teclas.DOWN:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.y = cerdo.y + movimiento;				
        break;
        
        case teclas.LEFT:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.x = cerdo.x - movimiento;				
        break;
        
        case teclas.RIGHT:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.x = cerdo.x + movimiento;				
        break;
        
        default:
            console.log("Otra tecla");
        break;
}	
}	










// document.addEventListener("keydown", dibujarTeclado);

// function dibujarTeclado(evento){

//     console.log(evento)

//     var movimiento = 5;

//     switch(evento.keyCode){
//         case teclas.UP:
//             //papel.drawImage(fondo.imagen, 0, 0);
//             papel.drawImage(cerdo.imagen, x, y);
//             y = y - movimiento;
//         break;
//     }
//     switch(evento.keyCode){
//         case teclas.DOWN:
//             //papel.drawImage(fondo.imagen, 0, 0);
//             papel.drawImage(cerdo.imagen, x, y);
//             y = y + movimiento;
//         break;
//     }
//     switch(evento.keyCode){
//         case teclas.LEFT:
//             //papel.drawImage(fondo.imagen, 0, 0);
//             papel.drawImage(cerdo.imagen, x, y);
//             x = x - movimiento;
//         break;
//     }
//     switch(evento.keyCode){
//         case teclas.RIGHT:
//             //papel.drawImage(fondo.imagen, 0, 0);
//             papel.drawImage(cerdo.imagen, x, y);
//             x = x + movimiento;
//         break;
//     }


// }