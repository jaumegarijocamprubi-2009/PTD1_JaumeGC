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
