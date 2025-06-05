var texto = "almenosdos palabraslargas";

var posicionEspacio = texto.indexOf(" ");

var primeraLetraPalabra1 = texto.substring(0, 1).toUpperCase();
var restoPalabra1 = texto.substring(1, posicionEspacio).toLowerCase();

var primeraLetraPalabra2 = texto.substring(posicionEspacio + 1, posicionEspacio + 2).toUpperCase();
var restoPalabra2 = texto.substring(posicionEspacio + 2).toLowerCase();

var palabra1 = primeraLetraPalabra1 + restoPalabra1;
var palabra2 = primeraLetraPalabra2 + restoPalabra2;
var string = palabra1 + " " + palabra2;

console.log(string);
