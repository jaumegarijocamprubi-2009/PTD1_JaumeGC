//Descompte si supera 50€

let total = 60;

if (total > 50) {
    let descompte = total * 0.10;
    let totalFinal = total - descompte;

    console.log("Descompte aplicat!");
    console.log("Total amb descompte: " + totalFinal + " €");

}

else {
    console.log("No hi ha descompte");
}