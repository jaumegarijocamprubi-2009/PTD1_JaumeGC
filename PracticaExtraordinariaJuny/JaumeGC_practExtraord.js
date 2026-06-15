// Llista de noms de les pocions
let llistaPocions = ["Curativa", "Antidot", "Veri"];

// Estoc de cada poció (mateix índex que la llista)
let estocPocions = [12, 0, 8];

// Preu de cada poció (mateix índex que la llista)
let preusPocions = [15, 30, 50];

// Variable que indica si el magatzem està obert o tancat
let magatzemObert = true;
// Color vermell per missatges d’error a consola
const RED = "\x1b[31m";
// Color blanc (normal) per missatges informatius
const WHITE = "\x1b[0m";
// Afegim una nova poció al principi de la llista
llistaPocions.unshift("Revitalitzant");
console.log(llistaPocions); //mostrar-ho amb console.log després de actualitzar-ho (unshift)
// Afegim un nou estoc al final de la llista d’estocs
estocPocions.push(5);
console.log(estocPocions) //mostrar-ho amb console.log després d'actualitzar-ho
// Afegim un nou preu al final de la llista de preus
preusPocions.push(40);
console.log(preusPocions) //mostrar-ho actualitzat despres d'actualitzar-ho
// Posam la funció per demanar dades per teclat
const prompt = require("prompt-sync")();
// FUNCIÓ: comprovar si hi ha estoc d’una poció
function comprovarEstoc() {
    // Mostra totes les pocions separades per |
    console.log("Pocions: " + llistaPocions.join(" | "));
    // Demana a l’usuari quina poció vol comprovar
    let tria = prompt("Tria una poció: ");
    // Busca la posició de la poció dins la llista
    let index = llistaPocions.indexOf(tria);
    // Si no existeix la poció dins la llista
    if (index === -1) {
        console.log(RED + "Error: poció no trobada" + WHITE);
        return;
    }
    // Si hi ha estoc disponible
    if (estocPocions[index] > 0) {
        console.log(WHITE + "Disponible. Hi ha " + estocPocions[index] + " unitats.");
    }
    // Si no hi ha estoc
    else {
        console.log(WHITE + "Producte Exhaurit");
    }
}
// FUNCIÓ: calcular el valor total del magatzem
function calcularValorMagatzem() {
    // Variable per guardar el total acumulat
    let total = 0;
    // Recorrem totes les pocions
    for (let i = 0; i < llistaPocions.length; i++) {
        // Multipliquem estoc x preu i ho sumem al total
        total += estocPocions[i] * preusPocions[i];
    }
    // Mostrem el valor total del magatzem
    console.log(WHITE + "Valor del magatzem: " + total + " €");
}
// FUNCIÓ: comptar quantes vegades apareix una lletra
function comptarLletraPocions() {
    // Demana una lletra a l’usuari
    let lletra = prompt("Introdueix una lletra: ");
    // Comprovem que només sigui una lletra
    if (lletra.length !== 1) {
        console.log(RED + "Error: només una lletra" + WHITE);
        return;
    }
    // Comptador total de coincidències
    let total = 0;
    // Recorrem cada nom de poció
    for (let nom of llistaPocions) {
        // Comptador per cada poció
        let contador = 0;
        // Recorrem cada lletra del nom
        for (let noms of nom.toLowerCase()) {
            // Si la lletra coincideix amb la buscada
            if (noms === lletra.toLowerCase()) {
                contador++;
                total++;
            }
        }
        // Mostra quantes vegades surt a cada poció
        console.log(nom + ": " + contador + " coincidències");
    }
    // Mostra el total general
    console.log("Total de coincidències: " + total);
}
// FUNCIÓ: mostra el menú del programa
function menu() {
    // Títol del menú
    console.log("--- MENÚ ---");
    // Opció 1
    console.log("1. Comprovar estoc");
    // Opció 2
    console.log("2. Calcular valor magatzem");
    // Opció 3
    console.log("3. Comptar lletra a les pocions");
    // Opció 4
    console.log("4. Sortir");
}
    // FUNCIÓ PRINCIPAL del programa
    function principal() {
        // Si el magatzem està tancat
        if (!magatzemObert) { //si posam ! esteim posant un condicional de que si el magatzem no esta obert posar un missatge
            console.log(RED + "El magatzem està tancat actualment" + WHITE);
            return; // no continua el programa
        }
        // Cridar a la funcio menu
        menu();
        // Demana opció a l’usuari
        let opcio = prompt("Tria una opció: ");
        // Si tria opció 1
        if (opcio === "1") {
            comprovarEstoc();
        }
        // Si tria opció 2
        else if (opcio === "2") {
            calcularValorMagatzem();
        }
        // Si tria opció 3
        else if (opcio === "3") {
            comptarLletraPocions();
        }
        // Si tria opció 4
        else if (opcio === "4") {
            console.log(WHITE + "Fins aviat!");
        }
        // Si posa qualsevol altra cosa
        else {
            console.log(RED + "Error: opció no vàlida" + WHITE);
        }
}
//Cridal a la funcio principal
principal();