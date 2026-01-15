// ACTIVITAT 5 - CUINA NÚMEROS
// ---------------------------------------------

// 1. CALCULADORA MÒDUL
const totalSegons = 903450;
const diesSetmana = 7;

const setmanesCompletes = Math.floor(totalSegons / (diesSetmana * 24 * 60 * 60)); // segons en una setmana
const segonsSobrants = totalSegons % (diesSetmana * 24 * 60 * 60);

console.log("1. CALCULADORA MÒDUL:");
console.log("Setmanes completes:", setmanesCompletes);
console.log("Segons sobrants:", segonsSobrants);
console.log("---------------------------------------------");

// 2. COMPTE ENRERE
let videsRestants = 10;
videsRestants--;   // decrement unitari
videsRestants--;   // decrement unitari

videsRestants -= 3; // decrement compost

console.log("2. COMPTE ENRERE:");
console.log("Vides restants finals:", videsRestants);
console.log("---------------------------------------------");

// 3. INCREMENT I ASIMETRIA
let punts = 4;
const doblePunts = 8;
punts++; // incrementant punts

const esDiferent = (punts !== doblePunts);

console.log("3. INCREMENT I ASIMETRIA:");
console.log("Punts actuals:", punts);
console.log("És diferent de doblePunts?", esDiferent);
console.log("---------------------------------------------");

// 4. NOT A NUMBER (NaN)
let valorNull = null;
let valorSenseAssignar;

let resultat = valorNull + valorSenseAssignar;
console.log("4. NOT A NUMBER:");
console.log("Resultat de sumar null + undefined:", resultat);

// El resultat és NaN: Not a Number. Indica que l'operació no dona un número vàlid.
console.log("---------------------------------------------");

// 5. EL MÉS GRAN DELS GRANS
const milions = 123456789012345678901234567890n; // BigInt
const resultatBigInt = milions / 2n;

console.log("5. EL MÉS GRAN DELS GRANS:");
console.log("Resultat de milions / 2:", resultatBigInt);
console.log("Tipus de dada:", typeof resultatBigInt); // -> bigint
console.log("---------------------------------------------");

// 6. LA DOBLE NEGACIÓ
const negNull = !!null;
const negUndefined = !!undefined;

console.log("6. LA DOBLE NEGACIÓ:");
console.log("!!null =", negNull);
console.log("!!undefined =", negUndefined);

// Ambdues donen false.
// Tant null com undefined són valors "falsy" en JavaScript perquè equivalen a false en contextos booleans.
console.log("---------------------------------------------");



