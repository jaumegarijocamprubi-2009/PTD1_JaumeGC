//Repte 1: Codi erroni
//Sense usar l’ordinador, identifica els errors i explica què falla. Arregla-ho
//Després, amb l’ordinador, identifica els errors al codi i afegeix un comentari amb l’explicació

// Quadrat de 4x4 d'asteriscs
let mida = 4;
let fila = "";

for (let i = 0; i < mida; i++) {
    for (let i = 0; i < mida; i++) {
        fila += "* ";
        console.log(fila);
    }
}

/*
Errors del codi:
1. Els dos bucles utilitzen la mateixa variable (i). El segon hauria de tenir una altra variable, per exemple j.
2. El console.log està dins del bucle interior, així que imprimeix la fila cada vegada que s’afegeix un asterisc.
3. La variable fila no es reinicia a cada fila, així que els asteriscs es van acumulant.
 */
console.log("--------------------------------------------------------------")

// Versió corregida
let mida2=4
for(let i=0; i<mida2; i++){
    let fila2=""
    for(let j=0; j<mida2; j++){
        fila2+= "*";
    }
    console.log(fila2);
}
console.log("-----------------------------------------------------------------")
//Repte 2: Efecte slowMotion
let mida3 = 4; // mida del quadrat (4 files i 4 columnes)
for (let i = 0; i < mida3; i++) { // bucle que controla les files
    let fila3 = ""; // reiniciem la fila a cada nova iteració
    for (let j = 0; j < mida3; j++) {
        { // bucle que controla les columnes
            fila3 += "* "; // afegim un asterisc a la fila

            // mostrem en quin punt del programa estem
            console.log("Estic a la fila " + i + ", columna " + j + ". El valor actual de la fila és " + fila3);
        }
    }
}
console.log("----------------------------------------------------------------------")
//Repte 3 – Rectangle personalitzat
const prompt = require("prompt-sync")();

let amplada = Number(prompt("Introdueix l'amplada:"));
let alcada = Number(prompt("Introdueix l'alçada:"));
console.log("El quadrat numèric és:");

for (let i = 0; i < alcada; i++) {
    let fila = "";
    for (let j = 0; j < amplada; j++) {
        fila += (i + j) + " ";
    }
    console.log(fila);
}

//Repte 4: Inicials
let mida4 = 4;
console.log("Dibuixant la lletra 'L'...");
for (let i = 0; i < mida4; i++) {
    let fila = "";
    for (let j = 0; j < mida4; j++) {
        if (j === 0 || i === mida4 - 1) {
            fila += "* ";
        } else {
            fila += "  ";
        }
    }
    console.log(fila);
}