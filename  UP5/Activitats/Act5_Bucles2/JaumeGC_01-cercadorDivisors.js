//Repte 1: Cercador de divisors i comprovació de primer

const prompt = require("prompt-sync")();

// Declaració de variables
let numero = 0
let divisors = "" // per acumular els divisors com a string
let comptadorDivisors = 0
let i = 0

// Demanar número a l'usuari
numero = Number(prompt("Introdueix un número enter positiu: "))


// Cercar divisors
for (i = 1; i <= numero; i = i + 1) {
    if (numero % i === 0) {
        divisors = divisors + i + " "
        comptadorDivisors = comptadorDivisors + 1
    }
}

// Mostrar resultats
console.log("Els divisors de " + numero + " són: " + divisors)

if (comptadorDivisors === 2) {
    console.log(numero + " és un número primer.")
} else {
    console.log(numero + " no és un número primer.")
}
console.log("----------------------------------")


// Repte 2 - Viatge de l’explorador
// Declaració de variables
let x = 0
let y = 0
let moviments = 0
let direccio = ""

// Bucle mentre no escrigui "sortir"
while (direccio !== "sortir") {
    direccio = prompt("On vols anar? (Nord, Sud, Est, Oest) o 'SORTIR': ").toLowerCase()
    if (direccio === "nord") {
        y = y + 1
    } else if (direccio === "sud") {
        y = y - 1
    } else if (direccio === "est") {
        x = x + 1
    } else if (direccio === "oest") {
        x = x - 1
    } else if (direccio === "sortir") {
        // sortirà del bucle
    } else {
        console.log("Direccio no valida")
        continue
    }
    if (direccio !== "sortir") {
        moviments = moviments + 1
        console.log("Ara estàs a la posició: (" + x + "," + y + ")")
    }
}

// Resultats del viatge
console.log("Moviments totals fets: " + moviments)
console.log("Posició final: (" + x + "," + y + ")")

if (x === 0 && y === 0) {
    console.log("Has tornat al punt d'origen!")
} else {
    console.log("No has tornat al punt d'origen.")

}
    console.log("----------------------------------")

// Repte 3 - Matriu de multiplicacions
// Declaració de variables
let N = 0
let i2 = 0
let j = 0
let fila = ""

// Demanar mida de la matriu
N = Number(prompt("Introdueix la mida de la matriu (N x N): "))

console.log("Matriu de multiplicacions de mida " + N + " x " + N + ":")

// Crear matriu
for (i = 1; i <= N; i = i + 1) {
    fila = ""
    for (j = 1; j <= N; j = j + 1) {
        fila = fila + (i * j) + "\t"
    }
    console.log(fila)
}
console.log("---------------------------------------")