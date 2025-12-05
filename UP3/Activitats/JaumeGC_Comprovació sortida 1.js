let edat = 20;
let autoritzat = true;
console.log(edat >= 16 && autoritzat); // true

//Modificar una variable per obtenir un resultat diferent
autoritzat = false;
console.log(edat >= 16 && autoritzat); // false

//Tornar una variable al valor inicial i modificar l’altra per obtenir el mateix resultat que abans
autoritzat = true;  // valor inicial
edat = 15;          // canviem l'altre
console.log(edat >= 16 && autoritzat); // false