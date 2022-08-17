var imagenes = []
imagenes[50] = 'vaca.png';
imagenes[20] = 'pollo.png';
imagenes[10] = 'cerdo.png';

class Billete{
    constructor(v,c){
        this.valor = v; 
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }

    mostrar(){
        document.body.appendChild(this.imagen);
    }

}

var caja = [];
var entregado = [];

// Dinero disponible en el cajero
caja.push(new Billete (50,3));
caja.push(new Billete (20,2));
caja.push(new Billete (10,2));

// dinero que se le pide al cajero
var dinero;
// variables para la funcion entregarDinero
var div = 0;
var papeles = 0;
var restante = 210;

function entregarDinero(){

    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var bi of caja){
        if(dinero > 0){
            div = Math.floor(dinero/bi.valor);
            
            if(div > bi.cantidad){
                papeles = bi.cantidad;
            }
            else{
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles, bi.valor));
            dinero = dinero - (bi.valor * papeles);
            restante = restante - (bi.valor * papeles);

        }
    }

    if(dinero > 0 || restante < 0){
        resultado.innerHTML = "Fondos insuficientes";
    }
    else{
        for(var e of entregado){
            if (e.cantidad > 0){
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
            }   
        }
    }

    console.log("dinero restante " + restante)

}


var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero)

