//Configuració inicial
const prompt = require("prompt-sync")();

const VALOR_N=3
const CODI_VERTIFICACIO=6

//Requisits del sistema
function mostrarCarta() {
    console.log("\n--- CARTA FOOD TRUCK ---");
    console.log("1. Hamburguesa (10€)");
    console.log("3. Beguda (3€)");
    console.log("4. Finalitzar comanda i pagar");
    console.log("------------------------");
}

// ---------------- FUNCIÓ CONTROL DE CAIXA ----------------
function controlCaixa(preu, saldo) {
    if (saldo >= preu) {
        return (true) //es pot comprar
    } else {
        return (false) //no es pot comprar
    }
}

//------------------ FUNCIÓ TIQUET DE SEGURETAT-----------------
function generarTiquet(productesComprats) {
    console.log("\n- - - - - - TIQUET DE SEGURETAT - - - - - -");

// Càlcul de columnes (arrodonint a la baixa)
    let columnes = Math.floor(CODI_VERTIFICACIO / VALOR_N);
// Generar patró
    for (let i = 0; i < productesComprats; i++) {
        let fila = ""
        for (let j = 0; j < columnes; j++) {
            fila += (j % 2 === 0) ? "|" : "#";
        }
        console.log(fila);
    }
    console.log("---------------------------------")
    console.log("Gràcies per la seva compra a la Food Truck!");

    //Programa principal
//Demanar saldo principal
    let saldo = Number(prompt("Introdueix els doblers disponibles:"));

    while (isNaN(saldo) || saldo <= 0) {
        saldo = Number(prompt("Error! Introdueix un saldo vàlid:"));
    }
    let productesComprats2 = 0;
    let continuar = true;
