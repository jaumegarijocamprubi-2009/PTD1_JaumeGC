//Exercici 1
const prompt = require("prompt-sync")();

const contrasenya = "jmf12345";
let longitud = contrasenya.length;
console.log(longitud);
console.log(longitud > 8);
//-------------------------------------

//Exercici 2
let nomUsuari = "Jaume25";
console.log(nomUsuari.toUpperCase());
console.log(nomUsuari.toLowerCase());

//--------------------------------------------
//Exercici 3
//1. Defineix una nova constant que guardi el text “programacio i tractament de dades i”.
const text = "programacio i tractament de dades i";

// 2. Resultat amb la primera lletra de cada paraula en majúscula.
const resultat = "Programacio I Tractament De Dades I";
// 3. Mostrar el resultat
console.log(resultat);
// 4. Mostrar el text tot en majúscules seguit del missatge, en una línia
console.log(text.toUpperCase() + " és una assignatura molt interessant!");
//----------------------------------------------------------------------

//Exercici 4
let correu= "jaumegarijocamprubi@alumnes.iesllucmajor.org"
let domini = correu.split("@")[1];
console.log("El domini és: " + domini);
let posicioArrova = correu.indexOf("@");
domini= correu.slice(posicioArrova + 1);
console.log("El domini és: " + domini);
//--------------------------------------------

//Exercici 5
let nom = prompt("Introdueix el teu nom: ");
console.log("Hola " + nom + "!La teva inicial és la " + nom[0].toUpperCase() + " i el teu nom té " + nom.length + " lletres.")
let nom2 = prompt("Introdueix el teu nom: ");
console.log("Hola " + nom2 + "!La darrera lletra del teu nom és la " + nom2[nom2.length - 1].toUpperCase() + ".");