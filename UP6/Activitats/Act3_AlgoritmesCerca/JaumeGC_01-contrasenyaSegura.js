//-------REPTE 1-----------------

//configuració inicial:
const prompt = require("prompt-sync")();

let contrasenyes = ["1234", "qwerty", "admin123", "password"]; // Creem un array amb contrasenyes insegures
console.log(contrasenyes); // Mostrem l'array per consola

let inputUser = prompt("Escriu una contrasenya:"); // Demanem a l'usuari una contrasenya
let esInsegura = false; // Variable per saber si la contrasenya és insegura

for(let i=0; i<contrasenyes.length; i++){ //Recorrem totes les contrasenyes de l' array.
    if(inputUser===contrasenyes[i]){ // comparem la contrasenya de l'usuari amb cada element.
        esInsegura=true    // Marquem que és insegura si coincideix.
        break // sortim del bucle.
    }
}

if(esInsegura){ //comprovem si és insegura
    console.log("Contrasenya insegura!!!") //Avisem que no es segura.
} else {
    console.log("Contrasenya segura!!!"); // Informem que és segura
}

//---------------REPTE 2----------------------
let temperatures = [18, 22, 15, 30, 24, 19, 21]; // Array amb temperatures
let maxim = temperatures[0]; // Inicialitzem el màxim amb el primer valor
let minim = temperatures[0]; // Inicialitzem el mínim amb el primer valor
let suma = 0; // Variable per sumar totes les temperatures

for (let i = 0; i < temperatures.length; i++) { // Recorrem totes les temperatures
    if (temperatures[i] > maxim) { // Si trobem un valor més gran
        maxim = temperatures[i]; // Actualitzem el màxim
    }
    if(temperatures[i]<minim){
        minim=temperatures[i];
    }
    suma = suma + temperatures[i]; // Anem sumant cada temperatura
}
let mitjana = suma / temperatures.length; // Calculem la mitjana
console.log("Temperatures màximes de la setmana passada: " + temperatures.join(",")); // Mostrem les temperatures
console.log("La temperatura màxima més alta de la setmana passada va ser de " + maxim +
    " graus, la més baixa va ser de " + minim +
    " graus i la mitjana va ser de " + mitjana.toFixed(2) + " graus."); // Mostrem resultats

// -------------------- REPTE 3 --------------------
// Part 1: índex manual
let colors = ["vermell", "blau", "verd", "groc", "negre"]; // Array de colors
let colorUser = prompt("Escriu un color:"); // Demanem un color
let trobat = false; // Variable per saber si l'hem trobat

for (let i = 0; i < colors.length; i++) { // Recorrem l'array de colors
    if (colorUser === colors[i]) { // Comparem el color introduït amb cada element
        console.log("El color " + colorUser + " està a la posició " + i); // Mostrem la posició
        trobat = true; // Marquem que l'hem trobat
        break; // Sortim del bucle
    }
}

if (!trobat) { // Si no s'ha trobat el color
    console.log("No he trobat el color " + colorUser + " al llistat de colors."); // Avisem
}

// Part 2: amb indexOf
let posicio = colors.indexOf(colorUser); // Busquem la posició amb indexOf
if (posicio !== -1) { // Si el resultat és diferent de -1 vol dir que existeix
    console.log("El color " + colorUser + " està a la posició " + posicio); // Mostrem la posició
} else {
    console.log("No he trobat el color " + colorUser + " al llistat de colors."); // Avisem si no existeix
}

// -------------------- REPTE 4 --------------------
let inventari = [15, 0, 8, 22, 0, 45, 3]; // Array amb quantitats de productes
let stockDisponible = []; // Creem un array buit per guardar productes disponibles

for (let i = 0; i < inventari.length; i++) { // Recorrem l'inventari
    if (inventari[i] > 0) { // Comprovem si el producte no està esgotat
        stockDisponible.push(inventari[i]); // Afegim el producte a l'array disponible
    }
}

console.log("Total de productes: " + inventari.length); // Mostrem total de productes
console.log("Número de productes disponibles: " + stockDisponible.length); // Mostrem disponibles
console.log("Productes disponibles: " + stockDisponible.join(" - ")); // Mostrem productes separats

// -------------------- REPTE 5 --------------------
let preus = [10.5, 25, 4.99, 100, 50]; // Array de preus sense IVA
let preusIVA = []; // Array per guardar preus amb IVA

for (let i = 0; i < preus.length; i++) { // Recorrem els preus
    let preuAmbIVA = preus[i] * 1.21; // Apliquem el 21% d'IVA
    preusIVA.push(preuAmbIVA.toFixed(2)); // Guardem amb 2 decimals
}

console.log("Llista de preus sense IVA: " + preus.join(",")); // Mostrem preus originals
console.log("Llista de preus amb IVA: " + preusIVA.join(",")); // Mostrem amb IVA
preusIVA.sort(function(a, b) { // Funció que compara dos números
    return b - a; // Si b és més gran que a, el posa abans (ordre descendent)
});
console.log("Llista de preus amb IVA ordenada de major a menor: " + preusIVA.join(" | ")); // Mostrem ordenats


