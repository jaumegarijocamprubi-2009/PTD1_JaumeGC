/*
    Activitat 3: Lasanya
	    Codi base d'un programa per ajudar a calcular el temps necessari per preparar una lasanya.
*/

//Habilitam el mòdul prompt-sync per a poder llegir dades per consola
const prompt = require("prompt-sync")();

/**
 * Total de minuts que es tarda a preparar una sola capa.
 */
//Crea dues constants que guardin els minuts de preparació per capa i els minuts que necessita de cocció al forn.
// Assigna a cada constant el valor corresponent.

// Constants
const MINUTS_PREPARACIO_PER_CAPA = 2;
const MINUTS_COCIO_FORN = 40;


/**
 *
 * Determina la quantitat de minuts que la lasanya encara necessita
 * al forn per estar cuita.
 *
 * @param {number} minutsActualsAlForn
 * @returns {number} nombre de minuts que encara necessita al forn
 */
function minutsRestantsAlForn(minutsActualsAlForn) {
    return MINUTS_COCIO_FORN - minutsActualsAlForn;
}

/**
 * Donat un nombre de capes, determina el temps total de preparació.
 *
 * @param {number} nombreDeCapes
 * @returns {number} temps total de preparació
 */
function tempsPreparacioEnMinuts(nombreDeCapes) {
    return nombreDeCapes * MINUTS_PREPARACIO_PER_CAPA;
}
/**
 * Calcula el temps total de treball. Això és, el temps per preparar totes les capes
 * de la lasanya (utilitza la funció anterior) i el temps que ja ha estat al forn.
 *
 * @param {number} nombreDeCapes
 * @param {number} minutsCoccioAlForn
 * @returns {number} temps total de treball
 */
function tempsTotalEnMinuts(nombreDeCapes, minutsCoccioAlForn) {
    const temps_preparacio=tempsPreparacioEnMinuts(nombreDeCapes);
    return temps_preparacio + minutsCoccioAlForn;
}





/*
Programa inicial
 */
console.log("Feim una lasanya!👨‍🍳👩‍🍳");
minutsActualsAlForn = 0
const numero_de_capes=Number(prompt("Quantes capes te la lasanya?"));

//Resum
let tempsPreparacio=tempsPreparacioEnMinuts(numero_de_capes);
let temps_total=tempsTotalEnMinuts(numero_de_capes, MINUTS_COCIO_FORN);

console.log("------ Resum ------");

console.log(`El temps de preparació per una lasanya de ${numero_de_capes} capes es de ${tempsPreparacio} minuts. `);
//TODO: Mostra per consola el procés de preparació i cocció de la lasanya. Fes que la sortida sigui com la que mostra l'enunciat.
console.log("------ Preparació i cocció ------")
console.log("Preparant la lasanya...")
console.log(`Han passat ${tempsPreparacio} minuts. La lasanya ja està preparada per anar al forn.`);
console.log(`Afegint la lasanya al forn...`);
minutsActualsAlForn=5
console.log("Han passat 5 minuts");
console.log(`Quedan ${minutsRestantsAlForn(minutsActualsAlForn)} minuts al forn`);

minutsActualsAlForn +=20;
console.log("Han passat 20 minuts mes...");
console.log(`Quedan ${minutsRestantsAlForn(minutsActualsAlForn)} minuts al forn`);
console.log(`El temps de cocció al forn es de ${MINUTS_COCIO_FORN} minuts.`);
console.log(`El temps total per fer la lasanya es de ${temps_total} minuts. `);

console.table({

    "Nombre de capes  ": numero_de_capes,
    "Temps de preparació (minuts) ": tempsPreparacio,
    "Temps de cocció al forn (minuts)": MINUTS_COCIO_FORN,
    "Temps total (minuts)": temps_total,

});
console.log("La lasanya ja està llesta! Bon profit!😋");