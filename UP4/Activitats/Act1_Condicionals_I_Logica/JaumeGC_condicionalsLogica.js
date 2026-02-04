const prompt = require("prompt-sync")();

//Repte 1: El Control d'Accés
let usuari = prompt("Introdueix el nom d'usuari:");
let contrasenya = prompt("Introdueix la contrasenya:");

if (usuari === "usuari" && contrasenya === "1234") {
    console.log("Sessió iniciada correctament");
} else {
    console.log("Nom d'usuari o contrasenya incorrectes");
}

//Repte 2: Descomptes del Cinema
let edatR2 = Number(prompt("Introdueix la teva edat:"));
let preuBase = 10;
let preuFinal;

if (edatR2 < 12 || edatR2 > 65) {
    preuFinal = preuBase / 2;
} else {
    preuFinal = preuBase;
}
console.log(`El preu de l'entrada és ${preuFinal} €`);

//Repte 3: Classificador de Números
let num = Number(prompt("Introdueix un número:"));
if (num === 0) {
    console.log("El número és zero");
} else if (num > 0 && num % 2 === 0) {
    console.log("El número és positiu i parell");
} else if (num > 0 && num % 2 !== 0) {
    console.log("El número és positiu i senar");
} else {
    console.log("El número és negatiu");
}

//Repte 4: Classificador de Números
let temperatura= Number(prompt("Introdueix la temperatura actual"));
if(temperatura>30) {
    console.log("Posa't un banyador");
} else if (temperatura >= 20) {
    console.log("Posa't una camiseta");
} else if (temperatura >= 10) {
    console.log("Posa't una jaqueta");
} else {
    console.log("Posa't un abric");
}

//Repte 5 (variant amb switch)
let temps = Number(prompt("Introdueix la temperatura actual:"));
let missatge;
switch (true) {
    case temps > 30:
        missatge = "Posa't un banyador";
        break;
    case temps >= 20:
        missatge = "Posa't una camiseta";
        break;
    case temps >= 10:
        missatge = "Posa't una jaqueta";
        break;
    default:
        missatge = "Posa't un abric";
}
console.log(missatge);

//Repte 6: El Major de Tres
let aR6 = Number(prompt("Introdueix el primer número:"));
let bR6 = Number(prompt("Introdueix el segon número:"));
let cR6 = Number(prompt("Introdueix el tercer número:"));

let major;
if (aR6 > bR6 && aR6 > cR6) {
    major = aR6;
} else if (bR6 > aR6 && bR6 > cR6) {
    major = bR6;
} else {
    major = cR6;
}
console.log(`El número més gran és ${major}`);

//Repte 7: El Major de Tres
let num1R6 = Number(prompt("Introdueix el primer número:"));
let num2R6 = Number(prompt("Introdueix el segon número:"));
let num3R6 = Number(prompt("Introdueix el tercer número:"));

let majorR6 =
    num1R6 > num2R6 && num1R6 > num3R6 ? num1R6 :
        num2R6 > num1R6 && num2R6 > num3R6 ? num2R6 :
            num3R6;
console.log(`El número més gran és ${majorR6}`);

//Repte 7: El Major de Tres (ternari)
let xR7 = Number(prompt("Introdueix el primer número:"));
let yR7 = Number(prompt("Introdueix el segon número:"));
let zR7 = Number(prompt("Introdueix el tercer número:"));

let majorR7 =
    xR7 >= yR7 && xR7 >= zR7 ? xR7 :
        yR7 >= xR7 && yR7 >= zR7 ? yR7 :
            zR7;
console.log(`El número més gran és ${majorR7}`);

//Repte 8: Números iguals
let n1 = Number(prompt("Introdueix el primer número:"));
let n2 = Number(prompt("Introdueix el segon número:"));
let n3 = Number(prompt("Introdueix el tercer número:"));

let majorFinal;
if (n1 >= n2 && n1 >= n3) {
    majorFinal = n1;
} else if (n2 >= n1 && n2 >= n3) {
    majorFinal = n2;
} else {
    majorFinal = n3;
}
console.log(`El número més gran (o empatat) és ${majorFinal}`);

