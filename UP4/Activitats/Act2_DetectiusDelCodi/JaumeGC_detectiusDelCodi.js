const prompt = require("prompt-sync")();

//Repte 1: Validador piscina
let edat = Number(prompt("Introdueix la teva edat: "));
let sapNedar = prompt("Saps nedar? (true/false): ") === "true";

if (edat < 5) {
    console.log("Has d'anar a la piscina petita amb un adult.");
}
else if (edat <= 14) {
    if (sapNedar) {
        console.log("Pots anar a la piscina gran, però amb un adult.");
    } else {
        console.log("Has d'anar a la piscina petita amb un adult.");
    }
}
else {
    console.log("Pots anar a la piscina gran.");
}

//Repte 2: Compra amb enviament
let preu = Number(prompt("Introdueix el preu de la compra: "));
let distancia = Number(prompt("Introdueix la distància en km: "));
let codi = prompt("Introdueix el codi de descompte (o prem enter): ");

if (codi === "PTD126") {
    preu = preu * 0.9;
    console.log("S'ha aplicat un descompte del 10%");
}
let enviament;
if (preu > 100) {
    enviament = 0;
    console.log("Enviament gratuït");
}
else if (distancia <= 10) {
    enviament = 5;
}
else {
    enviament = 15;
}
let total = preu + enviament;
console.log("Cost enviament:", enviament, "€");
console.log("Total a pagar:", total, "€");

//Repte 3: Error en el codi
let edatR3 = 20;
if (edatR3 > 10) {
    console.log("Ets major de 10 anys.");
}
if (edat >= 18) {
    console.log("Ets major d'edat.");
}

//Repte 4: Error en les condicions
let nota = 10;
if (nota >= 9) {
    console.log("Excel·lent");
}
else if (nota >= 5) {
    console.log("Aprovat");
}
else {
    console.log("Suspès");
}

//Repte 5: Millora del codi
let teEntrada = true;
if (teEntrada) {
    console.log("Pots passar");
}

//Repte 6: Repte 2 més curt
let preuR6 = Number(prompt("Preu: "));
let distanciaR6 = Number(prompt("Distància: "));
let codiR6 = prompt("Codi: ");
if (codiR6 === "PTD126") preu *= 0.9;
let enviamentR6 = preu > 100 ? 0 : distancia <= 10 ? 5 : 15;
console.log("Total:", preu + enviament, "€");

//Repte 7
console.log("Pots passar");