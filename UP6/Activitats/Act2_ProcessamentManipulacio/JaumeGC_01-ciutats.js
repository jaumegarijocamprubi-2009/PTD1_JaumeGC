// =========================
// REPTE 1: CIUTATS
// =========================

let ciutats = ["Palma", "Madrid", "Barcelona", "València"]; // crea l'array de ciutats
console.log(ciutats); // mostra l'array original

for (const [i,ciutat] of ciutats.entries()) { // recorre totes les ciutats
    console.log(`Ciutat ${i+1}: ${ciutat.toUpperCase()}`); // mostra en majúscules
}

ciutats.unshift("Pamplona", "Sevilla"); // afegeix dues ciutats al principi
ciutats.push("Bilbao"); // afegeix una ciutat al final

console.log("La llista actualitzada es: " + ciutats.join(",")); // mostra nova llista

ciutats[3] = "Copenhague"; // canvia la quarta ciutat
console.log("La llista actualitzada es: " + ciutats.join(",")); // mostra llista actualitzada

let eliminades = []; // array per guardar eliminades
eliminades.push(ciutats.shift()); // elimina primera ciutat
eliminades.push(ciutats.pop()); // elimina última ciutat

console.log("Ciutats resultants: " + ciutats.join(" | ")); // mostra resultat final
console.log("Ciutats eliminades: " + eliminades.sort().join(" * ")); // mostra eliminades ordenades

// =========================
// REPTE 2: COMPTADOR DE PARAULES
// =========================

let frases = [ // llista de frases
    "Bon dia tot lo dia",
    "M'agrada la programació",
    "El sol brilla avui",
    "Vull un gelat de xocolata",
    "La vida és bella"
];

console.log("Llista de frases:");
console.log(frases); // mostra totes les frases

let total = 0; // acumulador de caràcters
for (const frase of frases) { // recorre cada frase
    console.log(`La frase: "${frase}" té ${frase.length} caràcters.`); // mostra longitud
    total += frase.length; // suma caràcters
}

console.log(`Totes les frases sumen: ${total} caràcters.`); // mostra total

// =========================
// REPTE 3: CERCADOR DE TRESORS
// =========================

const prompt = require("prompt-sync")(); // permet demanar dades a l'usuari

let cofre = ["Ferro", "Or", "Pedra", "Or", "Coure", "Or"]; // cofre amb elements
let repetidos=[] //crear array buida per després utilitzar-la a un bucle

// mostrem menú manualment sense Set (sense eliminar repetits)
let numero=1
for(let element of cofre){
    let encontrado=false

    for(let repetido of repetidos){
        if(repetido===element){
            encontrado=true
        }
    }
    if(encontrado===false) {
        console.log(numero + ") " + element)
        numero++
        repetidos.push(element);
    }
}

// Demanam a l'usuari quin element vol
let opcio = prompt("Tria un element del cofre: ");

// convertim opció a nom d'element
let elementTriat = repetidos[opcio -1];




// Comptam quantes vegades apareix l'element

let comptador = 0;
for (let i = 0; i < cofre.length; i++) {
    if (cofre[i] === elementTriat) {
        comptador++;
    }
}

// mostra resultat
console.log("Al cofre hi ha " + comptador + " unitats de " + elementTriat);

// =========================
// REPTE 4: OFERTES
// =========================

let preus = [12, 5, 80, 45, 2, 60]; // llista de preus
let ofertes = []; // array buit per guardar ofertes

for (const preu of preus) { // recorre tots els preus
    if (preu < 20) { // comprova si és oferta
        ofertes.push(preu); // afegeix a ofertes
    }
}

// ordenar ofertes de menor a major
for (let i = 0; i < ofertes.length; i++) { // recorre array
    for (let j = i + 1; j < ofertes.length; j++) { // compara amb següents
        if (ofertes[i] > ofertes[j]) { // si estan mal ordenats
            let temp = ofertes[i]; // guarda temporalment
            ofertes[i] = ofertes[j]; // intercanvia
            ofertes[j] = temp; // intercanvia
        }
    }
}

//ordenar ofertes de menor a major amb for:of.
let i = 0; // índex de la posició actual
for (let valorI of ofertes) { // recorre cada element (valor) de l' array
    let j = 0; // índex per comparar amb la resta
    for (let valorJ of ofertes) { // tornar a recorrer tot l' array.
        if (j > i) { //només comparem amb els elements següents
            if (ofertes[i] > ofertes[j]) { // si el valor actual és més gran que el següent
                let temp = ofertes[i];     // guardem el valor actual en una variable temporal
                ofertes[i] = ofertes[j];  // posem el valor més petit a la posició i
                ofertes[j] = temp;        // posem el valor gran a la posició j

            }
        }
        j++
    }
    i++
}

console.log(ofertes); // mostra ofertes ordenades

// =========================
// REPTE 5: TRANSFORMADOR DE NOMS
// =========================

let noms = ["joan", "maria", "pere", "laura", "toni"]; // noms en minúscula
let transformats = []; // nova llista per noms modificats
console.log("Llistat de noms: " + noms.join(","))
for (const nom of noms) { // recorre tots els noms
    let nouNom = nom[0].toUpperCase() + nom.slice(1); // posa primera lletra en majúscula
    transformats.push(nouNom); // afegeix a la nova llista
}
console.log("La llista dels noms transformats son: " + transformats.join(" - ")); // mostrar tot en una sola línia