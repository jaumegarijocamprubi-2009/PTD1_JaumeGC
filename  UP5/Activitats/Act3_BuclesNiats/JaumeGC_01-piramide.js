const prompt = require("prompt-sync")()

let nivells;
do {
    nivells = Number(prompt("Introdueix el número de nivells de la piràmide:"));
    if (isNaN(nivells) || nivells <= 0) { //Comprova si no és un número o és ≤ 0.
        console.log("Error: has d'introduir un número vàlid més gran que 0.");
        //Si és incorrecte, mostra missatge d’error i ho torna a demanar.
        //Quan és correcte, imprimeix la piràmide amb dos for.
    }
} while (isNaN(nivells) || nivells <= 0);

console.log("Piràmide d'asteriscs:"); //Quan és correcte, imprimeix la piràmide amb dos for.

for (let i = 1; i <= nivells; i++) { //Controla el nivell de la piràmide
    let linia = "";

    for (let j = 0; j < i; j++) {
        linia += "*";
    }
    console.log(linia)
}