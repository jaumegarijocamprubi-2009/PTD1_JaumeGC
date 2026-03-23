//En aquesta activitat has de programar un simulador d’un casino.
const prompt = require("prompt-sync")()

// Funció per dibuixar el tiquet
function dibuixarTiquet(midaTiquet) { // mida del tiquet
    for (let fila = 1; fila <= midaTiquet; fila++) { // files
        let linia = fila + ": "; // número fila
        for (let columnes = 1; columnes <= midaTiquet; columnes++) { // columnes
            linia += "$ "; // afegeix $
        }
        console.log(linia); // mostra fila
    }
}

//Funció per jugar
function jugarNumero(saldoActual) { // saldo del jugador
    if(saldoActual===0){
        console.log("No tens diners per apostar")
        return 0;
    }
    let aposta;
    do{
        aposta=Number(prompt("Saldo: " + saldoActual + " | Aposta:")); // demana aposta

        if (isNaN(aposta) || aposta <= 0 || aposta > saldoActual) { // valida aposta
            console.log("Aposta incorrecta"); // error
        }
    }
    while(isNaN(aposta) || aposta <= 0 || aposta > saldoActual)

    let numeroUsuari;
    do{
        numeroUsuari= Number(prompt("Tria número (1-10):"))

        if(isNaN(numeroUsuari) || numeroUsuari < 1 || numeroUsuari > 10){ // valida número

            console.log("Número incorrecte"); // error
        }
    }
    while(isNaN(numeroUsuari) || numeroUsuari < 1 || numeroUsuari > 10) // valida número

    let numeroRandom = Math.floor(Math.random() * 10) + 1; // número aleatori
    console.log("Número aleatori: " + numeroRandom); // mostra número

    if (numeroUsuari === numeroRandom) { // comprova guany
        console.log("Has guanyat!");
        return aposta ; // guanya punts
    } else {
        console.log("Mala sort! Has perdut " + aposta + " punts!");
        return -aposta; // perd punts
    }
}

// Funció menú
function mostrarMenu() {
    console.log("1. Jugar");
    console.log("2. Dibuixar tiquet");
    console.log("3. Consultar saldo");
    console.log("4. Sortir");

    return Number(prompt("Escull una opció: "));
}

// PROGRAMA PRINCIPAL
let saldo = 100;
let opcio ;

do {
  // Mentre l'usuari no triï sortir (4)
    opcio = mostrarMenu() // Mostra el menú i guarda l'opció

    switch (opcio) { // Si tria jugar
        case 1:
            saldo += jugarNumero(saldo) // Juga i actualitza el saldo
            break;
        case 2:  // Si tria dibuixar tiquet
            let midaTiquet;
            do{
                midaTiquet= Number(prompt("Introdueix la mida del tiquet:"))
                if(isNaN(midaTiquet) || midaTiquet <= 0) { // Comprova que sigui vàlida
                    console.log("Mida incorrecta") // Error
                }
            } // Demana mida
            while(isNaN(midaTiquet) || midaTiquet <= 0)
            dibuixarTiquet(midaTiquet) // Dibuixa el tiquet

            break;
        case 3:  // Si tria consultar saldo
            console.log("Saldo actual: " + saldo + " punts") // Mostra saldo
            break;
        case 4: // Si tria sortir
            console.log("Sortint del casino...") // Missatge de sortida
            break;
        default: // Si tria una opció que no existeix
            console.log("Opció incorrecta") // Missatge d'error
    }
}

while(opcio !==4)