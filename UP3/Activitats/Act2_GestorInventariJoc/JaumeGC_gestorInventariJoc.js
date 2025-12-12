let total_punts_vida= 0;
let total_pocions_magia=0;
let total_or=0;
let total_inventari=0;

//Has de tenir en compte que cada poció de vida val 50 punts de vida,
// cada poció de màgia val 35 punts de màgia
// cada moneda d’or val 10 punts.

let vida_por_pocio=50;
let magia_por_pocion=35;
let oro_por_moneda=10;

//Dades jugador.
let nom="Alex"
let pocions_vida=3;
let pocions_màgia=2;
let monedes_or=2;

//Calculs
total_punts_vida=pocions_vida*vida_por_pocio;
total_pocions_magia=pocions_màgia*magia_por_pocion;
total_or=monedes_or*oro_por_moneda;

total_inventari=total_punts_vida+total_pocions_magia+total_or;
let bonus= 20;
let calcul_bonus=total_or*(bonus/100);
total_inventari= total_inventari + calcul_bonus
/*Jugador: Alex
--- Inventari ---
Pocions de vida: 3 (150 punts)
Pocions de màgia: 2 (70 punts)
Monedes d’or: 2 (20 punts)
Total de valor: 240 punts
 */
console.log("Jugador: " + nom);
console.log("--- Inventari ---");
console.log("Pocions de vida: " + pocions_vida + " (" + total_punts_vida + " punts)");
console.log("Pocions de magia: " + pocions_màgia + " (" + total_pocions_magia + " punts)");
console.log("Monedes d'or: " + monedes_or + " (" + total_or + " punts)");
console.log("Total de valor: " + total_inventari + " punts");