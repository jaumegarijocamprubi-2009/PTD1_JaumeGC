const prompt = require("prompt-sync")();
let nom = prompt("Com et dius?");
let edat = prompt("Quants anys tens?");
let anyNaixement = 2025 - Number(edat); //Modificam el tipus de la variable edat a Number

console.log("Hola " + nom + ", vas néixer l'any " + anyNaixement);