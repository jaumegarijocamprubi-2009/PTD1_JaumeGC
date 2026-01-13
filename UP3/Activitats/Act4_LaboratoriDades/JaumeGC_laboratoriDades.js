// Laboratori de Dades - Activitat 4

// REPTE 1
// 1. Declara una variable sense valor
let variable1;
console.log("Repte 1 - valor inicial:", variable1); // undefined
console.log("Repte 1 - tipus inicial:", typeof variable1); // undefined

// 2. Assigna-li null
variable1 = null;
console.log("Repte 1 - valor després de null:", variable1); // null
console.log("Repte 1 - tipus després de null:", typeof variable1); // object

// Comentari:
// És més convenient usar null quan volem indicar que la variable no té cap valor.
// Mentre que undefined normalment indica que la variable no s'ha inicialitzat encara.
// ===================


// REPTE 2
//He comentat la línia 20 perquè sino no es pot seguir l'execució d'abaix.
//console.log(variable2); // variable no declarada
// ===================


// REPTE 3
// Valor màxim segur de Number
console.log("Repte 3 - Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);

let num = Number.MAX_SAFE_INTEGER;
num += 1;
console.log("Repte 3 - sumant 1:", num, "Tipus:", typeof num);

num += 2;
console.log("Repte 3 - sumant 2:", num, "Tipus:", typeof num);
// ===================


// REPTE 4
// Repetim amb BigInt
let bigNum = BigInt(Number.MAX_SAFE_INTEGER);
console.log("Repte 4 - BigInt inicial:", bigNum, "Tipus:", typeof bigNum);

bigNum += 1n;
console.log("Repte 4 - sumant 1n:", bigNum, "Tipus:", typeof bigNum);

bigNum += 2n;
console.log("Repte 4 - sumant 2n:", bigNum, "Tipus:", typeof bigNum);
// ===================


// REPTE 5
// Creem dos symbols
let symbol1 = Symbol("symbol1");
let symbol2 = Symbol("symbol2");

console.log("Repte 5 - symbol1 == symbol2:", symbol1 === symbol2); // false
console.log("Repte 5 - tipus:", typeof symbol1, typeof symbol2); // symbol
// ===================


// REPTE 6
console.log("Repte 6 - null == undefined:", null == undefined); // true
console.log("Repte 6 - null === undefined:", null === undefined); // false
// Comentari: null només és igual a undefined amb ==, no als números.
// Comentari: == compara només valor i considera null i undefined iguals.
// === compara valor i tipus, per això és false.
// ===================


// REPTE 7
let varSenseValor;
console.log("Repte 7 - concatenació amb text:", varSenseValor + " hola");
// ===================


// REPTE 8
let variableNull = null;
console.log("Repte 8 - null == 0:", variableNull == 0); // false
console.log("Repte 8 - null === 0:", variableNull === 0); // false
// ===================


// REPTE 9
let symbolAmbDescripcio = Symbol("clau");
console.log("Repte 9 - tipus:", typeof symbolAmbDescripcio); // symbol

// Concatenació amb string provoca error:
// console.log("Repte 9 - concatenació:", symbolAmbDescripcio + " text"); // TypeError
// Per convertir a string cal fer .toString()
console.log("Repte 9 - concatenació amb toString():", symbolAmbDescripcio.toString() + " text");
// ===================


// REPTE 10
const nom = "Jaume";
const dataNaixement = "2009-09-25";

console.log("Repte 10 - nom:", nom, "Tipus:", typeof nom);
console.log("Repte 10 - dataNaixement:", dataNaixement, "Tipus:", typeof dataNaixement);

//nom="Juan"

// REPTE 11
let dadesTemporal = "Hola";
console.log("Repte 11 - valor inicial:", dadesTemporal, "Tipus:", typeof dadesTemporal);

dadesTemporal = null;
console.log("Repte 11 - valor després de null:", dadesTemporal, "Tipus:", typeof dadesTemporal);




