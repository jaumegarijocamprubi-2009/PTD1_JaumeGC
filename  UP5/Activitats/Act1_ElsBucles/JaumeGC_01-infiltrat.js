// CONFIGURACIÓ INICIAL
const prompt = require("prompt-sync")();

// 🕵️ REPTE 1: L’INFILTRAT
let numero;
do {
    numero = Number(prompt("Introdueix un número entre 1 i 20: "));
} while (isNaN(numero) || numero < 1 || numero > 20);

for (let i = 1; i <= 100; i++) {
    if (i === numero) {
        console.log("¡HE TROBAT L'INFILTRAT: " + i + "!");

    }
//EXTRA → Només múltiples de 5
    else if (i % 5 === 0) {
            console.log(i);
    }
}

//REPTE 2: GUARDIOLA INTERACTIVA
let objectiu;
do {
    objectiu = Number(prompt("Quants doblers vols estalviar? "));
} while (isNaN(objectiu) || objectiu <= 0);

let total = 0;
while (total < objectiu) {
    let aportacio;
    do {
        aportacio = Number(prompt("Quants doblers vols afegir a la guardiola? "));
    } while (isNaN(aportacio) || aportacio <= 0);
    total += aportacio;
    let restant=(objectiu>=total ? objectiu - total : 0)
    console.log("Total actual: " + total + "€");
    console.log("Falten: " + restant + "€");
}

//REPTE 3: ANALITZADOR DE NÚMEROS
let positius = 0;
let negatius = 0;
let zeros = 0;
let suma = 0;
let comptador = 1;

while (comptador <= 10) {
    let entrada = Number(prompt("Introdueix un número (" + comptador + "/10): "));
    if (isNaN(entrada)) {
        console.log("Error: introdueix un número vàlid.");
    } else {
        if (entrada > 0) {
            positius++;
        } else if (entrada < 0) {
            negatius++;
        } else {
            zeros++;
        }
        suma += entrada;
        comptador++;
    }
}
console.log("Positius: " + positius);
console.log("Negatius: " + negatius);
console.log("Zeros: " + zeros);
console.log("Suma total: " + suma);

/*
//Jocs de prova:
//Positius, negatius i zeros:
5, -3, 0, 8, -1, 0, 2, -7, 4, 1
⃣//Només positius:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//Només negatius:
-1, -2, -3, -4, -5, -6, -7, -8, -9, -10
//Només negatius i zeros:
0, -1, 0, -2, 0, -3, 0, -4, 0, -5
*/

// 🎭 REPTE 4: COMPTADOR D’AFORAMENT
const AFORAMENT_MAXIM = 50;
let personesDins = 0;

while (personesDins < AFORAMENT_MAXIM) {
    let grup = Number(prompt("Quanta gent vol entrar? "));
    if (isNaN(grup) || grup <= 0) {
        console.log("Error: introdueix un número vàlid.");
        continue;
    }
    if (personesDins + grup > AFORAMENT_MAXIM) {
        console.log("No podeu entrar, només queden " + (AFORAMENT_MAXIM - personesDins) + " llocs lliures.");
    } else {
        personesDins += grup;
        console.log("Hi ha " + personesDins + " persones. Queden " + (AFORAMENT_MAXIM - personesDins) + " llocs lliures.");
    }
}
console.log("🎉 El teatre està ple! (50 persones)");

//Intentar no fer operacions dins de console.log
//Millor crear noves variables
//Hi han operacions que també es poden fer amb un for
//Crear varibles el més clar possible.