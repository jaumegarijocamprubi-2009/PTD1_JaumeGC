//Repte 4: Inicials
let mida4 = 4;
console.log("Dibuixant la lletra 'L'...");
for (let i = 0; i < mida4; i++) {
    let fila = "";
    for (let j = 0; j < mida4; j++) {
        if (j === 0 || i === mida4 - 1) {
            fila += "* ";
        } else {
            fila += "  ";
        }
    }
    console.log(fila);
}