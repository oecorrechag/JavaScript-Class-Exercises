var imagenes = []
imagenes["Cauchin"] = 'vaca.png';
imagenes["Pokacho"] = 'pollo.png';
imagenes["Tocinauro"] = 'cerdo.png';

// var pokacho = new Pakiman("Pokacho", 80, 50);
// var cauchin = new Pakiman("Cauchin", 100, 30);
// var tocinauro = new Pakiman("Tocinauro", 120, 40);

// pokacho.mostrar();
// cauchin.mostrar();
// tocinauro.mostrar();

var coleccion = [];
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var pakin of coleccion){
    pakin.mostrar();
}