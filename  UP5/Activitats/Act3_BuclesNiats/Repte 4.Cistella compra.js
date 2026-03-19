const prompt = require('prompt-sync')();

//Repte 4: Cistella compra

let total = 0;
let comptador = 0;
let acabar = false; // controla quan hem de sortir

let entrada = prompt("Introdueix un preu (o F per acabar): ");

while (acabar === false) {

    // comprovem si vol acabar
    if (entrada === "F" || entrada === "f") {
        acabar = true;
    }
    else {
        let preu = Number(entrada);

    // si hi ha error
        if (isNaN(preu) === true || preu < 0) {
            console.log("Error: valor no vàlid");
        }
        else {
            total = total + preu;
            comptador = comptador + 1;

            console.log("Subtotal: " + total + " €");
        }
        entrada = Number(prompt("Introdueix un preu (o F per acabar): "));
    }
}

//Resultat final

console.log("-----------------------------------------------");
console.log("Total: " + total + " €");
console.log("Productes: " + comptador);